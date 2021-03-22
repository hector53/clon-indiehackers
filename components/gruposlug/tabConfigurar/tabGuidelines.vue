<template>
  <div class="group-admin__form">
  <fieldset class="group-admin__fieldset">
    <div class="group-admin__fieldset-header">
      <label class="group-admin__field-label">
        What is this?
      </label>
    </div>
    <p class="group-admin__explanation">
      Create up to five <strong>guidelines</strong> for people to see before
      they post in your group. It's the best way to ensure your group has
      relevant and high-quality discussions.
    </p>
  </fieldset>

  <fieldset class="group-admin__fieldset group-admin__guideline--encouragement">
    <div class="group-admin__fieldset-header">
      <label class="group-admin__field-label">Guidelines</label>
    </div>

    <p class="group-admin__explanation">
      We recommending including a mix of guidelines that are positive and
      <strong class="guideline-word--encouragment">encouraging</strong>,
      that provide helpful
      <strong class="guideline-word--instruction">instructions</strong> or tips,
      and that outline
      <strong class="guideline-word--warning">warnings</strong> or rules.
    </p>

    <div id="ember127" class="posting-guideline posting-guideline--warning ember-view"><div class="posting-guideline__type">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember128" class="ember-view posting-guideline__type-icon"><path d="M12 0l-12 12 12 12 12-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z">
<!----></path>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember129" class="ember-view posting-guideline__action-icon"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
<!----></path>
</svg>
</div>

<input maxlength="80" id="ember130" class="ember-text-field ember-view posting-guideline__input" type="text" placeholder="Enter a rule or a warning…">
</div>
    <div id="ember131" class="posting-guideline posting-guideline--encouragement ember-view"><div class="posting-guideline__type">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember132" class="ember-view posting-guideline__type-icon"><path d="M17.95 24h-11.9v-2.416c0-1.478-.22-1.698-.639-2.445-1.447-2.581-3.478-6.221-4.291-7.767-.218-.414-.083-.925.31-1.178h.001c.414-.266.959-.194 1.291.169.909.994 2.806 2.975 4.435 4.665 1.221 1.269 1.383 1.92 4.775 1.961 3.391.041 3.615-.614 4.911-1.961 1.629-1.69 3.526-3.671 4.435-4.665.332-.363.877-.435 1.291-.169h.001c.264.17.412.456.414.752.001.144-.032.291-.104.426-.813 1.546-2.844 5.186-4.291 7.767-.419.747-.639.873-.639 2.445v2.416zm-5.95-18c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-1.351-5.31l-.961-.69-3.657 5.094c-1.18-1.806-3.457-2.283-4.631-.648-.262.366-.385.786-.387 1.207-.004.741.363 1.483.987 1.932 1.164.835 2.968 1.013 4.046-.485l4.603-6.41zm8.671-.69l1.201 2.217 2.479.457-1.737 1.827.331 2.499-2.274-1.088-2.275 1.088.332-2.499-1.737-1.827 2.479-.457 1.201-2.217z">
<!----></path>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember133" class="ember-view posting-guideline__action-icon"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
<!----></path>
</svg>
</div>

<input maxlength="80" id="ember134" class="ember-text-field ember-view posting-guideline__input" type="text" placeholder="Say something encouraging…">
</div>
    <div id="ember135" class="posting-guideline posting-guideline--instruction ember-view"><div class="posting-guideline__type">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember136" class="ember-view posting-guideline__type-icon"><path d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z">
<!----></path>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember137" class="ember-view posting-guideline__action-icon"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
<!----></path>
</svg>
</div>

<input maxlength="80" id="ember138" class="ember-text-field ember-view posting-guideline__input" type="text" placeholder="Provide helpful instructions…">
</div>
    <div id="ember139" class="posting-guideline posting-guideline--instruction ember-view"><div class="posting-guideline__type">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember140" class="ember-view posting-guideline__type-icon"><path d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z">
<!----></path>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember141" class="ember-view posting-guideline__action-icon"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
<!----></path>
</svg>
</div>

<input maxlength="80" id="ember142" class="ember-text-field ember-view posting-guideline__input" type="text" placeholder="Provide helpful instructions…">
</div>
    <div id="ember143" class="posting-guideline posting-guideline--warning ember-view"><div class="posting-guideline__type">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember144" class="ember-view posting-guideline__type-icon"><path d="M12 0l-12 12 12 12 12-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z">
<!----></path>
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember145" class="ember-view posting-guideline__action-icon"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
<!----></path>
</svg>
</div>

<input maxlength="80" id="ember146" class="ember-text-field ember-view posting-guideline__input" type="text" placeholder="Enter a rule or a warning…">
</div>

  </fieldset>
</div>
</template>

<script>
export default {
  name: "tabGuidelines",
  props: ["pGroup"],
  async fetch() {},
  data() {
    return {
   
    };
  },
  watch: {},
  methods: {

      
     },
  mounted() {},
};
</script>

