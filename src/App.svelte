<script>
  import FooterNav from "./components/FooterNav.svelte";
  import Modal from "./lib/components/modal/Modal.svelte";
  // import CardsView from "./modules/cards/CardsView.svelte";

  function loadCardsView() {
    return import('./modules/cards/index').then((mod) => mod.component);
  }
</script>

<main>
  <!-- <CardsView /> -->
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
