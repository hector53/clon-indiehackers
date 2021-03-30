import cookieparser from "cookieparser";
export const state = () => ({
 cookieLogin: false, 
 urlApi: 'https://indiehackersapi.hectoracosta.site/api',
 img_perfil: '/images/avatar.png',
 tokenUser: '',
 p: '',
 username: '',
 dateUser: '', 
 nombres: '', 
 edad: '', 
 fechaNac: '',
 ciudad: '', 
 twitter: '', 
 email: '', 
 bio: '',
 loader: true,
 notifyCount: 0,
 Meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
'Octubre', 'Noviembre', 'Diciembre' ], 

})

export const getters = {
  getCookieLogin: (state) => {
    return state.cookieLogin
  }, 

}

export const mutations = {
  setLoader(state, val){
    state.loader = val;
  }, 
  setnotifyCount(state, val){
    state.notifyCount = val;
  },
  setCookieLogin(state, val){
    state.cookieLogin = val;
  }, 
  setCookieImgPerfil(state, val){
    state.img_perfil = val;
  }, 
  setCookieUsername(state, val){
    state.username = val;
  }, 
  setCookieDateUser(state, val){
    state.dateUser = val;
  },
  setCookieToken(state, val){
    state.tokenUser = val;
  }, 
  setCookieEdad(state, val){
    state.edad = val;
  }, 
  setCookieNombres(state, val){
    state.nombres = val;
  },
  setCookieCiudad(state, val){
    state.ciudad = val;
  },
  setCookieTwitter(state, val){
    state.twitter = val;
  },
  setCookieEmail(state, val){
    state.email = val;
  },
  setCookieBio(state, val){
    state.bio = val;
  },
  setCookieFechaNac(state, val){
    state.fechaNac = val;
  },
  setCookieP(state, val){
    state.p = val;
  }

}



export const actions = {
    nuxtServerInit({ commit }, { req }) {
      if (process.server && process.static) return;
      if (!req.headers.cookie) return;
  
      const parsed = cookieparser.parse(req.headers.cookie);
      const accessTokenCookie = parsed.access_token_;
      if(!accessTokenCookie){
        return;
      }
      const cookieDataUser = parsed.user_data_;  
      var DataUser = JSON.parse(cookieDataUser)
    //  console.log(DataUser.img)
      if (!accessTokenCookie) return;
  
      commit("setCookieLogin", true );
      commit("setCookieImgPerfil", DataUser.img );
      commit("setCookieUsername", DataUser.username );
      commit("setCookieDateUser", DataUser.date );
      commit("setCookieP", DataUser.p );
      commit("setCookieToken", accessTokenCookie );
      
      if(DataUser.edad){
        commit("setCookieEdad", DataUser.edad );
      }
      if(DataUser.nombres){
        commit("setCookieNombres", DataUser.nombres );
      }
      if(DataUser.fechaNac){
        commit("setCookieFechaNac", DataUser.fechaNac );
      }
      if(DataUser.ciudad){
        commit("setCookieCiudad", DataUser.ciudad );
      }
      if(DataUser.twitter){
        commit("setCookieTwitter", DataUser.twitter );
      }
      if(DataUser.email){
        commit("setCookieEmail", DataUser.email );
      }
      if(DataUser.bio){
        commit("setCookieBio", DataUser.bio );
      }


      
      
      
      
      
      
      
      


    }
  };

