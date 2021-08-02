export default ({ route, redirect }) => {
  
  
    if(route.params.slug == 'top' || route.params.slug == 'nuevos'){

            if(route.params.slug == 'top'){
                if(route.params.sub == 'semanal' || route.params.sub == 'mensual'
                 || route.params.sub == 'todos'  ){

                }else{
                    return redirect('/')
                }
            }

            if(route.params.slug == 'nuevos'){
                if(route.params.sub){
                    return redirect('/')
                }
            }
        
    }else{
        return redirect('/')
    }

  
   
  }