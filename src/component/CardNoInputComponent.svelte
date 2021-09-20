<script>
  export let inputClass = ''
  export let cardNo = ''

  let inputCardNo = ''
  $: cardNo = inputCardNo.replace(/[^0-9]/g, '')

  function formatCardNo (cardNo = '') {
    const numberOnly = cardNo.replace(/[^0-9]/g, '')
    return numberOnly !== ''
      ? numberOnly.match(/([0-9]{1,4})/g).join('  ')
      : ''
  }
</script>

<input class="{inputClass}" type="tel" inputmode="numeric" maxlength="22"
  placeholder="xxxx  xxxx  xxxx  xxxx"
  bind:value={inputCardNo}
  on:input={function () { this.value = formatCardNo(this.value) }}
/>

<style>
</style>
