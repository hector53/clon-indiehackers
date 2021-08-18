export default ({ app,  store }) => {
    const cookieRes = app.$cookies.get('access_token_')
    if(cookieRes){
store.state.cookieLogin = true 
console.log("si existe")
    }
   
  }