<template>
     <div
      
        class="mailing-list-form ember-view community-sidebar__mailing-list-form"
      >
        <form
          action="https://app.convertkit.com/landing_pages/191452/subscribe"
          class="mailing-list-form__form"
        >
          <p class="mailing-list-form__title">
            News for founders, not consumers.
          </p>

          <p class="mailing-list-form__subtitle">
            Market insights to help grow your indie business.
          </p>

          <div class="mailing-list-form__email-wrapper">
            <input
              value=""
              name="email"
              required="true"
              placeholder="Enter email address"
              id="ember21802294"
              class="ember-text-field ember-view mailing-list-form__email-input"
              type="email"
            />
          </div>

          <div
            class="mailing-list-form__captcha-wrapper"
            style="position: absolute !important; left: -999em !important"
          >
            <input
              placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer."
              value=""
              type="text"
            />
          </div>

          <button class="mailing-list-form__submit-button">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802295"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <span>Subscribe</span>
            </div>
          </button>
        </form>
      </div>
</template>

<script>
export default {
  name: "seccionMailForm",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
  mounted() {},
};
</script>

