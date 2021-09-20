<script>
  export let inputClass = ''
  export let code = ''

  let inputCode = ''
  $: code = inputCode.replace(/[^0-9]/g, '')

  function formatCode (code = '') {
    return code.replace(/[^0-9]/g, '')
  }
</script>

<input class="{inputClass}" type="tel" inputmode="numeric" maxlength="3"
  placeholder="xxx"
  bind:value={inputCode}
  on:input={function () { this.value = formatCode(this.value) }}
/>

<style>
</style>
