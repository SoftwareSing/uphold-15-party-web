<script>
  export let inputClass = ''
  export let goodThru = ''

  let inputGoodThru = ''
  $: goodThru = inputGoodThru.replace(/[^0-9]/g, '')

  function formatGoodThru (goodThru = '') {
    const numberOnly = goodThru.replace(/[^0-9]/g, '')
    return numberOnly !== ''
      ? numberOnly.match(/([0-9]{1,2})/g).join(' / ')
      : ''
  }
</script>

<input class="{inputClass}" type="tel" inputmode="numeric" maxlength="7"
  placeholder="xx / xx"
  bind:value={inputGoodThru}
  on:input={function () { this.value = formatGoodThru(this.value) }}
/>

<style>
</style>
