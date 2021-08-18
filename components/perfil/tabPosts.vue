<template>
  <div  class="featured-posts ember-view"> 
         <div class="featured-posts__instructions">
    <div class="featured-posts__title">Featured Posts</div>

    <p>
      This is the place to show off your best posts: the stories, advice, and
      discussions that you're most proud of! Simply
      <a href="/new-post" id="ember1963" class="ember-view">create a post</a> or visit any of your
      existing posts, then click "Feature on Profile" in the options menu to
      add them to the list below.
    </p>
  </div>

<ol class="featured-posts__list">
<!----></ol>

<!----></div>
</template>

<script>
export default {
  name: 'tabPosts', 
  components: {},
  data() {
    return {
        
    }
  },
  methods: {

    },
   async fetch() {
      
     },
  mounted() {
  },
};
</script>

