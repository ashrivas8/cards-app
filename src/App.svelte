<script>
  import FooterNav from "./components/FooterNav.svelte";
  import Modal from "./lib/components/modal/Modal.svelte";

  function loadCardsView() {
    return import('./modules/cards/index').then((mod) => mod.component);
  }
</script>

<main>
  {#await loadCardsView()}
  {:then component} 
    <svelte:component this={component} />
  {/await}
  <FooterNav />
  <Modal />
</main>

<style lang="scss">
  main {
    overflow: hidden;
    position: relative;
  }
</style>
