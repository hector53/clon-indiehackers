<template>
 
<div class="post-page__content">
    <div class="post-page__actions" v-if="p == 1 && tituloPost != ''">
      <div class="post-page__actions-content">
        <div class="post-page__upvotes">
          <div id="ember1206" class="post-liker post-liker--disabled post-liker--liked ember-view"><div class="post-liker__icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1207" class="ember-view post-liker__icon"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
<!----></path>
</svg>
</div>

<div class="post-liker__text">
  <div class="post-liker__count">1</div>

    <div class="post-liker__likes-label">
      Vote
    </div>
</div>
</div>
        </div>

          <div class="post-page__stat post-page__stat--comments">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1208" class="ember-view post-page__stat-icon"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z">
<!----></path>
</svg>
            <span>
              0 Comments
            </span>
          </div>

<!---->
          <div class="post-page__stat post-page__stat--views">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1209" class="ember-view post-page__stat-icon"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z">
<!----></path>
</svg>
            <span>
              1 View
            </span>
          </div>

        <div class="post-page__admin-actions">
            <a href="/edit-post/702b9fa3b3" id="ember1210" class="ember-view post-page__admin-action post-page__admin-action--edit">
              <div class="admin-action__button-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1211" class="ember-view admin-action__button-icon"><path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z">
<!----></path>
</svg>
                <p class="admin-action__button-label">Edit</p>
              </div>
            </a>

            <button class="post-page__admin-action post-page__admin-action--delete" @click="borrarPost">
              <div class="admin-action__button-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1212" class="ember-view admin-action__button-icon"><path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z">
<!----></path>
</svg>
                <p class="admin-action__button-label">Delete</p>
              </div>
            </button>

            <button class="post-page__admin-action post-page__admin-action--feature">
              <div class="admin-action__button-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1213" class="ember-view admin-action__button-icon"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
<!----></path>
</svg>
                <p class="admin-action__button-label">Feature</p>
              </div>
            </button>
          
<!---->        </div>
      </div>
    </div>
<div class="post-page__actions" v-if="p == 0 && tituloPost != ''">
      <div class="post-page__actions-content">
        <div class="post-page__upvotes">
          <div id="ember58" class="post-liker ember-view"><div class="post-liker__icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember59" class="ember-view post-liker__icon"><path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
<!----></path>
</svg>
</div>

<div class="post-liker__text">
  <div class="post-liker__count">1</div>

    <div class="post-liker__likes-label">
      Vote
    </div>
</div>
</div>
        </div>

          <div class="post-page__stat post-page__stat--comments">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember60" class="ember-view post-page__stat-icon"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z">
<!----></path>
</svg>
            <span>
              1 Comment
            </span>
          </div>

<!---->
<!---->
        <div class="post-page__admin-actions">
<!---->
<!---->
<!---->
            <button class="post-page__admin-action post-page__admin-action--report">
              <div class="admin-action__button-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember61" class="ember-view admin-action__button-icon"><path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z">
<!----></path>
</svg>
                <p class="admin-action__button-label">Report</p>
              </div>
            </button>
        </div>
      </div>
    </div>
    <header class="post-page__header">
        <h1 class="post-page__title" balance-text=""
         style="max-width: 611px;">{{tituloPost}}</h1>

      <a href="/Nananonaweb" id="ember1214" class="ember-view post-page__byline">
        by <span>Hector Acosta22</span>
      </a>

<!---->    </header>

    <div class="post-page__main">
        <div  class="post-page__body content ember-view" v-html="contenido"> 
           

            </div>

<!---->
<!---->
       <div class="post-page__post-footer" >
        <div class="post-page__inline-author">
          <div id="ember1037" class="user-link ember-view">
            <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: username },
              }"
              class="user-link__link ember-view"
            >
              <span class="user-link__name"> {{ username }} </span>

              <!---->

              <!----></nuxt-link
            >
            <!---->
            <!---->
          </div>
        </div>

        <!---->
        <a
          title="Monday, March 15th 2021 (3:35 pm)"
          href="#"
          id="ember1040"
          class="loading ember-view post-page__date"
        >
          el <span>{{ fecha }}</span>
        </a>
      </div>

      <div class="post-page__comments" id="comments">
        <div id="ember1220" class="embedded-comments embedded-comments--no-comments embedded-comments--0-levels ember-view">
  <div id="ember1221" class="comment-box--top-level comment-box comment-box--empty comment-box--unfocused ember-view"><div class="comment-box__field-wrapper">
    <textarea rows="4" placeholder="Say something nice to Nananonaweb…" maxlength="12000" id="ember1222" class="ember-text-area comment-box__textarea ember-auto-resize ember-view" style="height: 127.969px; overflow: hidden;"></textarea>

<!---->
  <div class="comment-box__actions">
      <button class="comment-box__save-button">
        Post Comment
      </button>

<!---->
      <div id="ember1223" class="comment-formatting-tips ember-view"><div class="comment-formatting-tips__icon-wrapper" title="Formatting Tips">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1224" class="comment-formatting-tips__icon ember-view"><path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z">
<!----></path>
</svg>
</div>

<!----></div>
  </div>
</div>

<!----></div>

<!---->
  

</div>
      </div>
    </div>

    <div id="ember1225" class="post-page__recommendations ember-view">  <div class="post-page__recommendations-heading">
    Trending on Indie Hackers
  </div>

  <div class="post-page__recommendations-list">
        <a href="/post/d057ae3f90" id="ember1227" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://stanleycyang.com/how-to-drive-traffic-to-your-website.png">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              How I Went From 0 to 142,263 Users in 12 Months
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1228" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_482wajy4AMU1IlpuapByBn18LJ03.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/482wajy4AMU1IlpuapByBn18LJ03" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/482wajy4AMU1IlpuapByBn18LJ03" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              29 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1229" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
        <a href="/post/1d8435da12" id="ember1231" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/1d8435da12/DB3sUMTRBHcr8iC3Ob9XjUU3LH62/c88c68cb-6411-05f6-ce5e-051c6ca243df.png">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              From 10-hour Smoke Test to 4,500+ Emails: How I validated a SaaS project.
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1232" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_DB3sUMTRBHcr8iC3Ob9XjUU3LH62.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/DB3sUMTRBHcr8iC3Ob9XjUU3LH62" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/DB3sUMTRBHcr8iC3Ob9XjUU3LH62" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              12 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1233" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
        <a href="/post/e4db12b966" id="ember1235" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--OrE4lP1p--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hkvir806a2jsyqtsqsoh.png">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              The Part Time Creator Manifesto
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1236" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_knB6tgB1DbNrfy58ruuat19mhO93.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/knB6tgB1DbNrfy58ruuat19mhO93" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/knB6tgB1DbNrfy58ruuat19mhO93" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              12 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1237" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
        <a href="/post/0685355244" id="ember1239" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/0685355244/bVimQk6FKHZdnQc30WtuVaMydpf1/36b68e3f-387c-7e4a-58f6-83a5e9f527ed.png">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              I tried out 6 different email subject lines and collected some great data.
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1240" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_bVimQk6FKHZdnQc30WtuVaMydpf1.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/bVimQk6FKHZdnQc30WtuVaMydpf1" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/bVimQk6FKHZdnQc30WtuVaMydpf1" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              9 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1241" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
        <a href="/post/5735411869" id="ember1243" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/5735411869/CwjWXg3pv8N3WXmjsPZmoOhkA773/06e0b834-f33e-2ceb-8049-0273b3b530b3.jpg">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              How We Got 1,000 Users by Engaging Developers
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1244" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_CwjWXg3pv8N3WXmjsPZmoOhkA773.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/CwjWXg3pv8N3WXmjsPZmoOhkA773" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/CwjWXg3pv8N3WXmjsPZmoOhkA773" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              8 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1245" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
        <a href="/post/7126a6ab41" id="ember1247" class="ember-view post-page__recommendation">
            <img class="post-page__recommendation-image" src="https://moores.samaltman.com/images/social.png">
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              Moore's Law for Everything
            </span>
            <span class="post-page__recommendation-footer">
              <picture id="ember1248" class="user-avatar ember-view post-page__recommendation-avatar">  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_PWairgiOpneHvkGJri7RVbtORKI2.webp" type="image/webp">
  <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/PWairgiOpneHvkGJri7RVbtORKI2" type="image/png">
    <source srcset="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/PWairgiOpneHvkGJri7RVbtORKI2" type="image/jpeg">

  <img src="/nonexistent-image.png">
</picture>
              6 comments
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1249" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </span>
          </span>
        </a>
  </div>
</div>
  </div>
</template>

<script>
export default {
  layout: "postSlug",
  name: "postSlug",
  data() {
    return {
        idP: 0,
      tituloPost: '', 
      username: '', 
      contenido: '', 
      fecha: '', 
      p: 0,
       meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    };
  },
  watch: {
  },
  methods: {
    async  getPost(){
        var tokenUser = this.$store.state.tokenUser
           await this.$axios
        .$get("/getpost/usuario/?token="+tokenUser+"&slug="+this.$route.params.slug)
        .then((response) => {
          if(response.status == 0){
                this.$router.push({ name: 'index' })
          }else{
              this.tituloPost = response.post[0].titulo
              this.username = response.post[0].username
              this.contenido = response.post[0].contenido
              this.fecha = response.post[0].fecha
              this.p = response.post[0].p
              this.idP = response.post[0].id

                    var f = new Date(this.fecha);
                    this.fecha =
                    f.getDate() +
                    " de " +
                    this.meses[f.getMonth()] +
                    " de " +
                    f.getFullYear();

          }

        });

      }, 
   async   borrarPost(){
        let formData = new FormData();
            formData.append('id', this.idP);
            formData.append('token', this.$store.state.tokenUser);
           
          const response = await this.$axios.$post('/post/delete/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
if(response.status == 1){
   this.$router.push({ name: 'index' })
}
      }
  },
  mounted() {
      this.getPost()
},
};
</script>

