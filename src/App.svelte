<script>
  import { Router, Route, navigate } from 'svelte-routing'
  import AppTop from './AppTop.svelte'
  import HomePage from './HomePage.svelte'
  import ScApplyPage from './ScApplyPage.svelte'
  import ScTrackOrderPage from './ScTrackOrderPage.svelte'
  import ScTrackPage from './ScTrackPage.svelte'
  import AboutPage from './AboutPage.svelte'
  import YouDonateIDonatePage from './YouDonateIDonatePage.svelte'
  import Modal from './Modal.svelte'

  export let url = ''
  window.__navigator = navigate
</script>

<Router url="{url}">
  <div class="app-top fixed-top">
    <AppTop />
  </div>
  <div class="app">
    <Route path="/sc/apply" component="{ScApplyPage}" />
    <Route path="/sc/track/:orderId" component="{ScTrackOrderPage}" />
    <Route path="/sc/track" component="{ScTrackPage}" />
    <Route path="/you-donate-i-donate" component="{YouDonateIDonatePage}" />
    <Route path="/about" component="{AboutPage}" />
    <Route path="/" component="{HomePage}" />
  </div>
  <Modal />
</Router>

<style>
  .app-top {
    height: 60px !important;
  }

  .app {
    margin-top: 60px;
    position: relative;
  }
</style>
