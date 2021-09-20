<script>
  import PageHead from './PageHead.svelte'
  import CardNoInputComponent from './component/CardNoInputComponent.svelte'
  import CardGoodThruInputComponent from './component/CardGoodThruInputComponent.svelte'
  import CardCodeInputComponent from './component/CardCodeInputComponent.svelte'
  import CardPasswordInputComponent from './component/CardPasswordInputComponent.svelte'

  let cardNo = ''
  let goodThru = ''
  let code = ''
  let password = ''
  let scText = ''
  let scNote = ''
</script>

<PageHead title="免費SC申請" />

<div class="container">
  <div class="pt-3">
    <h3>免費SC申請</h3>
    <div>所有堅定15黨SC卡貴賓，皆可使用本服務申請代投SC，本黨會盡力將您對15的愛慕送達</div>
    <div>但考量本黨資金有限，並非所有申請都會受理，敬請見諒</div>
  </div>

  <div class="mt-5">

    <div class="mb-3 row">
      <label for="inputCardNo" class="col-sm-2 col-form-label">
        SC卡號
      </label>
      <div class="col-sm-10" id="inputCardNo">
        <CardNoInputComponent inputClass="form-control" bind:cardNo={cardNo} />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputGoodThru" class="col-sm-2 col-form-label">
        GOOD THRU
      </label>
      <div class="col-sm-10" id="inputGoodThru">
        <CardGoodThruInputComponent inputClass="form-control" bind:goodThru={goodThru} />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputCode" class="col-sm-2 col-form-label">
        CODE
      </label>
      <div class="col-sm-10" id="inputCode">
        <CardCodeInputComponent inputClass="form-control" bind:code={code} />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputCardPassword" class="col-sm-2 col-form-label">
        交易密碼
      </label>
      <div class="col-sm-10" id="inputCardPassword">
        <CardPasswordInputComponent inputClass="form-control" bind:password={password} />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputScText" class="col-sm-2 col-form-label">
        SC內容 ({`${scText.length}`.padStart(2, '0')} / 35)
      </label>
      <div class="col-sm-10" id="inputScText">
        <input class="form-control" type="text" placeholder="您想要傳送的超級留言訊息" maxlength="35" bind:value={scText} />
      </div>
    </div>

    <div class="mb-3 row">
      <label for="inputScNote" class="col-sm-2 col-form-label">
        備註
      </label>
      <div class="col-sm-10" id="inputScNote">
        <input class="form-control" type="text" placeholder="這則SC有什麼注意事項嗎" maxlength="1000" bind:value={scNote} />
      </div>
    </div>

  </div>
</div>

<style>
</style>
