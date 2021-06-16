<template>
 <div>
<h1>Test Imagen post meta sin async data</h1>

 </div>

</template>


<script>

export default {
     head(){
    return {
      title: "test imagen",
            meta: [
                {
    hid: 'og:title',
     property:"og:title", content: "test imagen",
  },
  {
    hid: 'og:description',
     property:"og:description", content: "descripcion test imagen"
  },


  {
    hid: 'og:image',
     property:"og:image", content: "https://cdn.canalizados.com/uploads/2021/06/C1E8423B-FB60-46F3-A332-A2804B8CC2A6.jpeg"
  },
   {
      hid: 'twitter:card',
     name:"twitter:card", content:"summary_large_image" 
  },
            ],
                 link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/testimagen'
        }
      ], 
     
     
    }
  },
    data() {
        return {
        }
    },

   
  mounted() {
  },
  
}
</script>
