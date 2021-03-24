<template>
<div>
 <indexComp></indexComp>
 </div>
</template>

<script>
import indexComp from '~/components/index/indexComp.vue';
export default {
  name: 'indexSlug', 
  middleware: 'indexSlug',
  components: {indexComp},
  data() {
    return {


    }
  },
  methods: {
  },
   async fetch() {

   },
  mounted() {
 console.log("slug")
  },
};
</script>

