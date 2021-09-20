<script>
  import { Link } from 'svelte-routing'
</script>

<div class="app-top vw-100 h-100">
  <div class="container h-100">
    <div class="party-logo">
      <Link to="/" style="text-decoration: none;">
        <img src="/img/uphold-15-party-logo.png" alt="uphold 15 party logo" />
      </Link>
    </div>
  </div>
</div>

<style>
  .app-top {
    background-color: #FFF;
  }

  .app-top * {
    max-height: 100%;
  }

  .party-logo {
    padding: 5px 0px;
    height: 100%;
  }

  .party-logo img {
    height: 100%;
    max-height: 100%;
  }
</style>
