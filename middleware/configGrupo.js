export default ({ $axios, store, route, redirect}) => {
 if(store.state.tokenUser == ''){
    return redirect('/g/'+route.params.slug)
 }else{

    if(route.name == 'g-slug-configuracion' || route.name == 'g-slug-configuracion-moderadores'){
        $axios.$get("/grupos/getrolusergrupo?slug="+route.params.slug+"&token="+store.state.tokenUser)
         .then((response) => {
             console.log(response)
             if(response.status != 1 &&  response.status != 2){
                 return redirect('/g/'+route.params.slug)
             }
         })
         
       }
 }


      
   
  }

  