<script>
  import { Link } from 'svelte-routing'
  import PageHead from './PageHead.svelte'
</script>

<PageHead />

<div class="container">
  <h2>SC服務</h2>
  <div class="d-flex flex-wrap">
    <div class="service-btn">
      <Link to="/sc/apply" style="text-decoration: none;">
        <button type="button" class="btn btn-outline-dark fs-1">
          <i class="bi bi-credit-card"></i> 免費SC申請
        </button>
      </Link>
    </div>

    <div class="service-btn">
      <Link to="/sc/track" style="text-decoration: none;">
        <button type="button" class="btn btn-outline-dark fs-1">
          <i class="bi bi-truck"></i> SC進度追蹤
        </button>
      </Link>
    </div>

    <div class="service-btn">
      <Link to="/you-donate-i-donate" style="text-decoration: none;">
        <button type="button" class="btn btn-outline-dark fs-1">
          <i class="bi bi-truck"></i> SC 1+1 <br />
          (即將開放)
        </button>
      </Link>
    </div>
  </div>

  <hr />

  <h2>關於15黨</h2>
  <div class="d-flex flex-wrap">
    <div class="service-btn">
      <Link to="/about" style="text-decoration: none;">
        <button type="button" class="btn btn-outline-dark fs-1">
          <i class="bi bi-flag"></i> 核心理念
        </button>
      </Link>
    </div>
  </div>
</div>

<style>
  .service-btn {
    padding: 10px;
    width: 320px;
    height: 220px;
  }

  .service-btn button {
    width: 100%;
    height: 100%;
  }
</style>
