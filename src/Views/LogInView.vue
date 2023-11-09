<template>
  <main
    class="flex flex-col h-screen bg-indigo-800 mx-auto w-full items-center justify-center"
  >
    <!-- component -->
    <section class="flex w-[30rem] flex-col space-y-10">
      <div class="text-center text-4xl font-medium">Log In</div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
      >
        <input
          type="text"
          v-model="email"
          placeholder="Email Address"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        />
      </div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
      >
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        />
        <div v-if="errMsg">{{ errMsg }}</div>
      </div>

      <button
        class="transform rounded-sm bg-indigo-400 py-2 font-bold duration-300 hover:bg-indigo-50"
      >
        LOG IN
      </button>

      <a
        href="#"
        class="transform text-center font-semibold text-indigo-400 duration-300 hover:text-gray-300"
        >FORGOT PASSWORD?</a
      >

      <p class="text-center text-lg">
        No account?
        <router-link
          :to="{ name: 'register' }"
          class="font-medium text-indigo-400 underline-offset-4 hover:underline"
          >Create One</router-link
        >
      </p>
    </section>
  </main>
</template>

<script>
import { updateData, getData } from "/src/firebase.js";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref(); //error message
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully Signed In!");
      console.log(auth.currentUser);
      router.push("/src/Views/FeedView.vue");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
      }
    });
};
</script>
