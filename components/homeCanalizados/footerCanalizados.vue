<template>
<div>
    <section id="subscribe-form" class="subscribe-form">
      <div class="centered-container w-container">
        <h2>Mantenete informado</h2>
        <p>
          Somos la comunidad <strong>hispana de Startups</strong> más grande del
          mundo. Vas a encontrar todas las personas que forman parte de
          latinoamérica en Canalizados.
        </p>
        <div class="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            class="subscribe-form-flex"
          >
            <div class="subscribe-form-input-wrapper">
              <input
                type="email"
                class="subscribe-form-input w-input"
                maxlength="256"
                name="Subscriber-Email"
                data-name="Subscriber Email"
                placeholder="Ingresa tu Email"
                id="Subscriber-Email"
                required=""
              />
            </div>
            <input
              type="submit"
              value="Registrarme"
              data-wait="Por favor esperá..."
              class="submit-button w-button"
            />
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer" class="footer">
      <div class="w-container">
        <div>Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
      </div>
    </footer>
</div>
</template>


<script>

export default {
    name: "footerCanalizados", 
    data() {
        return {

        }
    },
}
</script>
