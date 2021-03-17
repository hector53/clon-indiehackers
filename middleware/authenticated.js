export default ({ app, redirect }) => {
    const cookieRes = app.$cookies.get('access_token_')
    if(cookieRes){
         return redirect('/')
    }
   
  }