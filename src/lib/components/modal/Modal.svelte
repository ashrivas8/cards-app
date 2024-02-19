<script>
  import { modal, closeModal } from './store';
</script>

{#if $modal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal flex-center">
    <div class="backdrop" on:click={closeModal}></div>
    <div class="content-wrapper">
      <svelte:component this={$modal.component} {closeModal} {...$modal.props} />
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .content-wrapper {
    background-color: white;
    z-index: 1;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    margin: auto 6px;
  }
</style>
