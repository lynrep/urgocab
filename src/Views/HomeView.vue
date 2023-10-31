<template>
   <div id="home" class="flex flex-col h-screen  bg-gray-300">
        <div class="m-3 mb-auto">

            <div class="grid grid-cols-2 gap-3 my-3">
                <ServiceSelectLarge :text="serviceSelectText" :imageWidth="serviceSelectImg"/>      
            </div>  
            <div
            class="
                w-full
                bg-white
                h-14
                rounded-full
                flex
                items-center
                p-3
              "
            >
                <MagnifyIcon :size="40" class=" text-gray-700" />
                <div class="ml-3 text-xs font-semibold text-gray-700">
                    Pick-up point
                </div>
            </div>  
        </div>
    </div>
</template>

<script>

import ServiceSelectLarge from '../components/ServiceSelectLarge.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'; 

export default {
    name: 'HomeView',
    components: {
        ServiceSelectLarge,
        MagnifyIcon,
    },
    data () {
        return{
            serviceSelectText: 'My Journey', 
            serviceSelectImg: 74, 
        }
    }
}
</script>
