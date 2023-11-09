<template>
  <div class="flex flex-col h-screen bg-indigo-800">
    <h1>Login</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>
    <router-link to="/register">
      <p>Register here</p>
    </router-link>
  </div>
</template>

<script>
//import firebase from "firebase";

export default {
  name: "LogInView",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>
