<script>
  import { navigate } from 'svelte-routing'
  import PageHead from './PageHead.svelte'
  import { showModal } from './modalController'
  import { send, HttpError } from './utils/httpSend'

  export let orderId

  const statusMap = new Map([
    ['applied', '已收到申請，等待執行人員確認'],
    ['processing', '處理中'],
    ['finish', '已完成'],
    ['reject', '拒絕申請']
  ])

  let order = {
    scOrderId: orderId,
    orderStatus: '',
    scText: '',
    scNote: '',
    createdAt: new Date()
  }
  let logList = []
  getOrderDetail(orderId)

  async function getOrderDetail (orderId) {
    try {
      const result = await send('GET', `/api/v1/sc/order/${orderId}`);
      ({ scOrder: order, scOrderLogList: logList } = result)
    } catch (err) {
      if (err instanceof HttpError) {
        await showModal({ title: `查詢失敗 (${err.code})`, message: `${err.message}` })
      } else {
        await showModal({ title: '查詢失敗', message: '無法解釋的錯誤，請稍後再試' })
      }
      navigate('/sc/track')
    }
  }

  function formatTime (time) {
    return (new Date(time)).toLocaleString()
  }
</script>

<PageHead title="SC進度追蹤" description="SC進度追蹤 - 訂單編號 {orderId}" />

<div class="container">
  <div class="pt-3">
    <h3>SC進度追蹤</h3>
  </div>
  <table class="table table-borderless">
    <tbody>
      <tr>
        <th class="fw-normal">訂單編號</th>
        <th class="fw-normal">{order.scOrderId}</th>
      </tr>
      <tr>
        <th class="fw-normal">訂單狀態</th>
        <th class="fw-normal">{statusMap.get(order.orderStatus)}</th>
      </tr>
      <tr>
        <th class="fw-normal">申請時間</th>
        <th class="fw-normal">{formatTime(order.createdAt)}</th>
      </tr>
      <tr>
        <th class="fw-normal">SC內容</th>
        <th class="fw-normal">{order.scText}</th>
      </tr>
      <tr>
        <th class="fw-normal">備註</th>
        <th class="fw-normal">{order.scNote}</th>
      </tr>
      {#if order.imgUrl}
        <tr>
          <th class="fw-normal">SC截圖</th>
          <th class="fw-normal">
            <a href="{order.imgUrl}" target="_blank">
              <img class="mw-100" src="{order.imgUrl}" alt="sc img" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </a>
          </th>
        </tr>
      {/if}
    </tbody>
  </table>

  <hr />

  <div>
    <h4>處理紀錄</h4>
  </div>
  <table class="table">
    <tbody>
      {#each logList as log}
        <tr>
          <td>{formatTime(log.createdAt)}</td>
          <td>{log.message}</td>
          <td class="w-25">
            {#if log.imgUrl}
              <a href="{log.imgUrl}" target="_blank">
                <img class="w-100" src="{log.imgUrl}" alt="log img" crossorigin="anonymous" referrerpolicy="no-referrer" />
              </a>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table * {
    white-space: pre-line;
  }
</style>
