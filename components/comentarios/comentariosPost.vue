<template>
  <div class="post-page__comments" id="comments">
        <div
          class="embedded-comments embedded-comments--no-comments embedded-comments--0-levels ember-view"
        >
          <div
            class="comment-box--top-level comment-box comment-box--empty comment-box--unfocused ember-view"
          >
            <div class="comment-box__field-wrapper">
              <textarea
                rows="4"
                placeholder="Escribe tu comentario aqui…"
                maxlength="12000"
                v-model="commentText"
                class="ember-text-area comment-box__textarea ember-auto-resize ember-view"
                style="height: 127.969px; overflow: hidden"
              ></textarea>

              <!---->
              <div class="comment-box__actions">
                <button class="comment-box__save-button"
                 @click="addComment(0)" :disabled="ButtonReplyDisable">Publicar</button>

                <!---->
                <div  class="comment-formatting-tips ember-view">
                  <div
                    class="comment-formatting-tips__icon-wrapper"
                    title="Formatting Tips"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="ember1224"
                      class="comment-formatting-tips__icon ember-view"
                    >
                      <path
                        d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"
                      >
                        <!---->
                      </path>
                    </svg>
                  </div>

                  <!---->
                </div>
              </div>
            </div>

            <!---->
          </div>

          <ol
        
            class="comment-tree comment-tree--level-1 ember-view"
          >
            <li v-for="(item, index) in comentarios" :key="index" >
              <div
                :id="item.comentarioId"
                
                :class="{'comment comment--on-desktop ember-view' : item.creadorPost == 0,
               'comment comment--highlight-username comment--on-desktop ember-view' : item.creadorPost == 1 }"
                
              >
                <!--votos-->
        <like-comments :p="item.comment_ID" :votos="item.votos"></like-comments>
          <!--votos-->

                <div class="comment__main">
                  <!---->
                  <div class="comment__footer">
                    <div
                     
                      class="user-link footer__user-link ember-view"
                    >
                        <nuxt-link :to="{name:'u-username', params: {username: item.username}}" 
                        class="user-link__link ember-view"
                      >
                        <picture
                          id="ember151"
                          class="user-avatar ember-view user-link__avatar"
                        >
                      
                          <img :src="item.avatar" style="    display: initial;
    width: 33px;" />
                        </picture>

                        <span class="user-link__name user-link__name--username"
                        >

                        
                          {{item.username}}
                        </span>

                       </nuxt-link  >
                     
                    </div>

                    <div class="footer__separator">·</div>

                    <nuxt-link
              :to="{
                name: 'c-slug',
                params: { slug: $route.params.slug },
                query: {commentId: item.comentarioId}
              }" 
                      class="footer__date ember-view"
                    >
                    {{item.fecha}}
                    </nuxt-link>
                  
                  
                  
                    <div class="footer__separator">·</div>

                    <div class="footer__action footer__action--reply"
                     @click="responderBoton(item.comentarioId)">
                      Responder
                    </div>

                    <div class="footer__separator">·</div>

                    <button class="footer__action footer__action--edit"
                    @click="editarComment(item.comentarioId, item.textoComment)"
                     v-if="item.yoCreePost == 1">
                      Editar
                    </button>

                    <div class="footer__separator" v-if="item.yoCreePost == 1">·</div>

                    <button class="footer__action footer__action--delete" 
                    @click="EliminarComment(item.comentarioId)"
                    v-if="item.yoCreePost == 1">
                      Eliminar
                    </button>
                  </div>
                  <div
                
                    class="comment__content content ember-view"
                  >
                    <p>{{item.textoComment}}</p>
                  </div>

                  

                  <!--reply box-->

<div v-if="replyBox == item.comentarioId" :id="'reply_'+item.comentarioId" class="comment-box comment-box--empty comment-box--unfocused ember-view">
    <div class="comment-box__field-wrapper">
    <textarea rows="4" placeholder="Escribe tu comentario aquí…"
     maxlength="12000" id="ember674" class="ember-text-area
      comment-box__textarea ember-auto-resize ember-view" 
      v-model="commentTextReply"
      style="height: 128.667px; overflow: hidden;"></textarea>

<!---->
  <div class="comment-box__actions">
      <button class="comment-box__save-button" @click="addComment(item.comentarioId)"    
      :disabled="ButtonReplyDisable">
        Publicar
      </button>

      <div class="comment-box__cancel-link" @click="replyBox = ''">
        Cancelar
      </div>

      <div id="ember675" class="comment-formatting-tips ember-view">
          <div class="comment-formatting-tips__icon-wrapper" title="Formatting Tips">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember676"
   class="comment-formatting-tips__icon ember-view">
   <path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z">
<!----></path>
</svg>
</div>

<!----></div>
  </div>
</div>

<!----></div>
   <!--reply box-->


                </div>
              </div>

             <comentario-reply :replies="item.replies"  @addCommentReply="getComments"
             @EliminarComment="EliminarComment"
             v-if="item.replies.length > 0" :p="p" :mostrarReply="item.comment_ID" :idP="idP"></comentario-reply>
            </li>
          </ol>
        </div>
      </div>
</template>

<script>
import ComentarioReply from '~/components/comentarios/comentarioReply.vue';
import LikeComments from '../likes/likeComments.vue';
export default {
  name: 'comentariosPost', 
  props:['idP', 'p'],
  components: {ComentarioReply,  LikeComments},
    watch: {
    commentText: function (value) {
      if (value.length == 0) {
        this.ButtonReplyDisable = true;
      }else{
        this.ButtonReplyDisable = false;
      }
    },

        commentTextReply: function (value) {
      if (value.length == 0) {
        this.ButtonReplyDisable = true;
      }else{
        this.ButtonReplyDisable = false;
      }
    },
  },
  data() {
    return {
          commentText: '', 
            
          comentarios: [], 
          replyBox: '', 
          commentTextReply: '',
            editar: 0,
          ButtonReplyDisable: true
    }
  },
  methods: {
   async   EliminarComment(id){
            let formData = new FormData();
            formData.append("p", this.idP);
            formData.append("token", this.$store.state.tokenUser);
            formData.append("parent", id);
            const response = await this.$axios.$post("/comentario/elimpost/", formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
            });
           // console.log(response)
            if(response.status == true){
                    this.getComments()
            }

      },
      editarComment(id, texto){
        this.replyBox = id
        this.commentTextReply = texto
        this.editar = 1
    },  
        responderBoton(id){
      this.editar = 0
    this.replyBox = id
    this.commentTextReply = ''
        },
      addCommentReply(id, text){
            this.commentTextReply = text
            this.addComment(id)
      },

       async addComment(id){

        if(this.$store.state.tokenUser != ''){
         
        }else{
          this.$router.push({name: 'iniciar-sesion'})
          return false
        }



           this.ButtonReplyDisable = true
           var textoCommentario = this.commentText
           if(id){
                textoCommentario = this.commentTextReply
           }
         let formData = new FormData();
      formData.append("p", this.idP);
      formData.append("token", this.$store.state.tokenUser);
      formData.append("username", this.$store.state.username);
       formData.append("commentText", textoCommentario);
       formData.append("parent", id);
         formData.append("editar", this.editar);
         formData.append("idComment", this.replyBox);
      const response = await this.$axios.$post("/comentario/addpost/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response)
      if(response.status == 1){
           this.replyBox = ''
      this.commentText = ''
      this.commentTextReply = ''
      this.ButtonReplyDisable = false
     this.getComments()
      }
     

    },

       async getComments() {
      await this.$axios.$get("/get/commentsbypost/?pU="+this.p+"&p="+this.idP+"&token="+this.$store.state.tokenUser).then((response) => {
     //   console.log(response);
     //   console.log(response.length);
        this.comentarios = response

          this.$emit("CantidadComentarios", response.length);
        
      });
    },

    },
   async fetch() {
      
     },
  mounted() {
    console.log("cargaron comentarios")
     this.getComments();
  },
};
</script>

