<script>
  import { navigate } from 'svelte-routing'
  import PageHead from './PageHead.svelte'
  import { showModal } from './modalController'
  import { send, HttpError } from './utils/httpSend'

  let orderList = []
  getList()

  async function getList () {
    try {
      const result = await send('GET', '/api/v1/sc/order/list')
      orderList = result
    } catch (err) {
      if (err instanceof HttpError) {
        await showModal({ title: `查詢失敗 (${err.code})`, message: `${err.message}` })
      } else {
        await showModal({ title: '查詢失敗', message: '無法解釋的錯誤，請稍後再試' })
      }
      navigate('/')
    }
  }

  function formatTime (time) {
    return (new Date(time)).toLocaleString()
  }
</script>

<PageHead title="SC訂單列表" />

<div class="container">
  <div class="pt-3 mb-4">
    <h3>SC訂單列表</h3>
  </div>

  {#each orderList as order}
    <a class="link-dark" href="/sc/track/{order.scOrderId}" target="_blank">
      <div class="card mb-3">
        <div class="row">
          <div class="col-md-7 col-12">
            <div class="card-body">
              <h5 class="card-title">{order.scOrderId}</h5>
              <p class="card-text">{order.scText}</p>
              <p class="card-text"><small class="text-muted">{formatTime(order.createdAt)}</small></p>
            </div>
          </div>
          <div class="col-md-5 col-12">
            {#if order.imgUrl}
              <img class="img-fluid rounded-start" src="{order.imgUrl}" alt="order img" />
            {/if}
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>

<style>
  a {
    text-decoration: none;
  }
</style>
