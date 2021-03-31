<template>
  <div class="user-settings">
    <div class="user-settings__settings-group">
      <h2 class="user-settings__title">Account</h2>

      <div class="settings-group__content">
        <div class="settings-group__setting">
          <label class="settings-group__label">Username</label>
          <p class="settings-group__description">@nachobuey</p>
          <button class="settings-group__button">Change</button>
        </div>

        <div class="settings-group__setting">
          <label class="settings-group__label">Email Address</label>
          <p class="settings-group__description">nachobuey@hotmail.com</p>
          <button class="settings-group__button">Change</button>
        </div>

        <div class="settings-group__setting">
          <label class="settings-group__label">Password</label>
          <p class="settings-group__description">••••••••••</p>
          <button class="settings-group__button">Change</button>
        </div>

        <div class="settings-group__setting">
          <label class="settings-group__label">Deletion</label>
          <p class="settings-group__description">
            Permanently delete your account, posts, and comments.
          </p>
          <button class="settings-group__button">Delete</button>
        </div>
      </div>
    </div>

    <div class="user-settings__settings-group">
      <h2 class="user-settings__title">Email Subscriptions</h2>

      <div class="settings-group__content">
        <div
          class="settings-group__setting settings-group__setting--subscription"
        >
          <img
            src="https://storage.googleapis.com/indie-hackers.appspot.com/miscellaneous-images/newsletter-icons__newsletter.png"
            id="ember559"
            class="img-lazy img-lazy--loaded ember-view settings-group__image"
          />
          <label class="settings-group__label">
            <a href="/newsletter" id="ember560" class="ember-view"
              >The Indie Hackers Newsletter</a
            >
          </label>
          <p class="settings-group__description">
            A regular dose of everything you need to stay informed as an indie
            hacker: news, stories, deals, events, and more.
          </p>
          <button class="settings-group__button settings-group__button--active">
            Unsubscribe
          </button>
        </div>

        <div
          class="settings-group__setting settings-group__setting--subscription"
        >
          <img
            src="https://storage.googleapis.com/indie-hackers.appspot.com/miscellaneous-images/newsletter-icons__digest.png"
            id="ember561"
            class="img-lazy img-lazy--loaded ember-view settings-group__image"
          />
          <label class="settings-group__label">Community Digest</label>
          <p class="settings-group__description">
            The top posts from the people you follow and the groups you're
            subscribed to.
          </p>
          <button class="settings-group__button settings-group__button--active">
            Unsubscribe
          </button>
        </div>

        <div
          class="settings-group__setting settings-group__setting--subscription"
        >
          <img
            src="https://storage.googleapis.com/indie-hackers.appspot.com/miscellaneous-images/newsletter-icons__growthBites.png"
            id="ember562"
            class="img-lazy img-lazy--loaded ember-view settings-group__image"
          />
          <label class="settings-group__label">
            <a href="/growth-bites" id="ember563" class="ember-view"
              >Growth Bites</a
            >
          </label>
          <p class="settings-group__description">
            Tasty, bite-sized tactics to keep you at the top of your growth game
            in just 30 seconds a day.
          </p>
          <button
            class="settings-group__button settings-group__button--inactive"
          >
            Subscribe
          </button>
        </div>

        <div
          class="settings-group__setting settings-group__setting--subscription"
        >
          <img
            src="https://storage.googleapis.com/indie-hackers.appspot.com/miscellaneous-images/newsletter-icons__topMilestones.png"
            id="ember564"
            class="img-lazy img-lazy--loaded ember-view settings-group__image"
          />
          <label class="settings-group__label">
            <a href="/milestones" id="ember565" class="ember-view"
              >Top Milestones</a
            >
          </label>
          <p class="settings-group__description">
            Stay motivated with a steady stream of the top wins shared by your
            fellow indie hackers.
          </p>
          <button class="settings-group__button settings-group__button--active">
            Unsubscribe
          </button>
        </div>
      </div>
    </div>

    <div class="user-settings__field-group">
      <h2 class="user-settings__title">
        Website Notifications
        <!---->
      </h2>

      <p class="user-settings__group-description">
        What would you like to see when you visit the Indie Hackers website?
      </p>

      <fieldset class="settings-group__fieldset">
        <label class="user-settings__labeled-checkbox checked">
          <input
            id="ember566"
            class="ember-checkbox ember-view"
            type="checkbox"
          />
          Notifications for new followers
        </label>
      </fieldset>

      <fieldset class="settings-group__fieldset">
        <label class="user-settings__labeled-checkbox">
          <input
            id="ember567"
            class="ember-checkbox ember-view"
            type="checkbox"
          />
          Notifications for likes on your posts
        </label>
      </fieldset>
    </div>

    <div class="user-settings__field-group">
      <h2 class="user-settings__title">
        Email Notifications
        <!---->
      </h2>

      <p class="user-settings__group-description">
        What would you like to be notified of via email?
      </p>

      <fieldset class="settings-group__fieldset">
        <label class="user-settings__labeled-checkbox checked">
          <input
            id="ember568"
            class="ember-checkbox ember-view"
            type="checkbox"
          />
          Emails for new followers
        </label>
      </fieldset>

      <fieldset class="settings-group__fieldset">
        <label class="user-settings__labeled-checkbox checked">
          <input
            id="ember569"
            class="ember-checkbox ember-view"
            type="checkbox"
          />
          Emails for replies to your posts
        </label>
      </fieldset>

      <fieldset class="settings-group__fieldset">
        <label class="user-settings__labeled-checkbox checked">
          <input
            id="ember570"
            class="ember-checkbox ember-view"
            type="checkbox"
          />
          Emails when someone tags you
        </label>
      </fieldset>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "configuracion",
  layout: "perfil",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
  mounted() {},
};
</script>

