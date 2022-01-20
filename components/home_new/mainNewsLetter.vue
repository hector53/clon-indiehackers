<template>
     <div class="canalizadosNews">
            <div class="canalizadosNewsBox">
              <span class="canalizadosNewsBoxIcon">
                Newsletter
              </span>
              <p>No pierdas de vista lo que está pasando</p>
              <p>
                Suscribete al newsletter de Canalizados y recibe las novedades
                mas importantes del ecosistema emprendedor
              </p>
              <b-form>
                <b-form-group label="Email (Requerido):" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button
                  type="submit"
                  variant="primary"
                  block
                  class="btnUneteComunidad"
                  >Suscribirme</b-button
                >
              </b-form>
            </div>
          </div>
</template>

<script>
    export default {
        
    }
</script>

