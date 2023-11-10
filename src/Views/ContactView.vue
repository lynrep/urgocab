<template>
  <div id="about" class="flex flex-col h-screen bg-indigo-600">
    <div class="m-3 mb-auto">
      <h1 class="mt-10 text-xl text-left text-indigo-100">
        Meet the developers who design and work together on this app...
      </h1>
      <div class="flex grid-cols-2 gap-4 mt-10">
        <h2 class="text-lg text-center text-indigo-200">
          <span class="text-4xl text-indigo-50">Ailyn</span> is a working mother
          who challenges herself to pursue continuous learning and polishing her
          skills as a Front End Web Developer.
        </h2>
        <h2 class="text-xl text-center text-indigo-200">
          <span class="text-4xl text-indigo-50">Javier</span> is a man on a
          mission in Ireland right now. He will continue his career in
          Engineering improving both his technical skills and communication
          skills.
        </h2>
      </div>

      <div class="flex items-center justify-start mt-20">
        <div class="mx-auto w-full">
          <h1 class="text-xl font-sm text-indigo-100">Contact us</h1>
          <p class="mt-3 text-indigo-100">
            Email us at help@domain.com or message us here:
          </p>

          <form action="https://api.web3forms.com/submit" class="mt-10">
            <!-- This is a working contact form. 
         Get your free access key from: https://web3forms.com/  -->

            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="relative z-0">
                <input
                  type="text"
                  name="name"
                  class="peer block w-full appearance-none border-0 border-b border-indigo-500 bg-transparent py-2.5 px-0 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-indigo-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-200 peer-focus:dark:text-indigo-400"
                  >Your name</label
                >
              </div>
              <div class="relative z-0">
                <input
                  type="text"
                  name="email"
                  class="peer block w-full appearance-none border-0 border-b border-indigo-500 bg-transparent py-2.5 px-0 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-indigo-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-200 peer-focus:dark:text-indigo-400"
                  >Your email</label
                >
              </div>
              <div class="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="3"
                  class="peer block w-full appearance-none border-0 border-b border-indigo-500 bg-transparent py-2.5 px-0 text-sm text-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-indigo-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-200 peer-focus:dark:text-indigo-400"
                  >Your message</label
                >
              </div>
            </div>
            <button
              type="submit"
              class="mt-5 rounded-md bg-indigo-500 px-10 py-2 text-indigo-100 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>
