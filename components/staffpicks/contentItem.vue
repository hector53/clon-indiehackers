<template>
    <div>
        <div>
        <p style="margin-left: 20px; margin-top: 10px">{{content.slice(0,210)}}...</p>
        </div>
        <nuxt-link
            class="userStaffpick2"
            :to="{
              name: 'u-username',
              params: { username: nombre },
            }"
          >
            <p class="infoAdicional" style="margin-left: 15px;">{{nombre}} </p>
            <p> · </p>
            <p class="infoAdicional">{{ fecha }}</p>
          </nuxt-link>
    </div>   
</template>
<script>
export default {
    props:["content", "slug", "nombre", "fecha"],
    data() {
        return {
          
        }
    },
    methods: {
        
    },
}
</script>