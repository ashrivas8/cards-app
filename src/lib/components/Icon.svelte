<script>
  export let icon = '';
</script>

{#if icon}
  <span class="{$$props.class}">
    {@html icon}
  </span>
{/if}
