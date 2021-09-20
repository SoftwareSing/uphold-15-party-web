<script>
  export let title = ''
  export let description = ''
  export let image = ''

  const websiteName = '堅定15黨'
  $: headTitle = title ? `${title} - ${websiteName}` : websiteName
  $: headDescription = description || '遵從15的每個教誨，實現15的每個願望'
</script>

<svelte:head>
	<title>{headTitle}</title>
  <meta property="og:title" content="{headTitle}" />
  <meta property="twitter:title" content="{headTitle}" />

  <meta name="description" content="{headDescription}" />
  <meta property="og:description" content="{headDescription}" />
  <meta property="twitter:description" content="{headDescription}" />

  <meta property="og:site_name" content="{websiteName}" />

  {#if image}
    <meta property="twitter:card" content="summary" />
    <meta property="og:image" content="{image}" />
    <meta property="og:image:url" content="{image}" />
    <meta property="twitter:image" content="{image}" />

    <link rel="icon" href="{image}" />
  {:else}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="og:image" content="https://uphold-15-party.com/img/uphold-15-party-for-fb-logo.png" />
    <meta property="og:image:url" content="https://uphold-15-party.com/img/uphold-15-party-for-fb-logo.png" />
    <meta property="twitter:image" content="https://uphold-15-party.com/img/uphold-15-party-for-fb-logo.png" />

    <link rel="icon" type="image/png" href="/favicon.png" />
  {/if}
</svelte:head>

<style>
</style>
