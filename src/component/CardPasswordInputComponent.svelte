<script>
  export let inputClass = ''
  export let password = ''
</script>

<input class="{inputClass}" type="password" placeholder="發卡信上印製的交易密碼，請以硬幣刮開密碼條後確認" bind:value={password} />

<style>
</style>
