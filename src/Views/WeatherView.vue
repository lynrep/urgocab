<template>
  <div id="weather" class="flex flex-col h-screen bg-indigo-800">
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Enter city..."
        v-model="query"
        @keypress="getWeather"
      />
    </div>
    <div class="city-box" v-if="typeof weather.main != 'undefined'">
      <div class="city">{{ weather.name }}, {{ weather.sys.country }}</div>
      <div class="date">{{ dateBuilder() }}</div>

      <div class="weather-info">
        <div class="temp">{{ Math.round(weather.main.temp) }} ºc</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
        <img :src="icon" alt="weather icon" class="weather-icon" />
      </div>
    </div>

    <div>
      <div v-if="loading">
        <!-- begin rect modal -->
        <div class="rect">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
      <div class="error" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherView",
  data() {
    return {
      loading: false,
      api_key: "33090a24e2fbcb83e866a563b036d093",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      error: "",
      icon: "",
    };
  },
  methods: {
    getWeather(e) {
      this.loading = true;
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then((response) => {
            if (!response.ok) throw new Error("Data Error!");
            return response.json();
          })
          .catch((error) => {
            this.loading = false;
            this.error = error.message;
          })
          .then(this.setResults);
        this.loading = false;
      }
    },
    setResults(results) {
      this.weather = results;
      this.icon = `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`;
    },

    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style>
.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px, 0px, 16px, rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
}

body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.city-box .city {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px, 3px, rgba(0, 0, 0, 0.25);
}

.city-box .date {
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-info {
  text-align: center;
}

.weather-info .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-info .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700px;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

/*  begin rect css */

.rect {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.rect > div {
  background-color: #fff;
  height: 300%;
  width: 10px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.rect .rect2 {
  animation-delay: -1.1s;
}

.rect .rect3 {
  animation-delay: -1s;
}

.rect .rect4 {
  animation-delay: -0.9s;
}

.rect .rect5 {
  animation-delay: -0.8s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

.error {
  color: red;
  font-size: 40px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
}

.weather-icon {
  display: inline-block;
  padding: 10px 25px;
  height: 25em;
  width: 25em;
}
</style>
