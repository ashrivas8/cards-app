<script>
  import { deleteCard } from "../helpers";

  export let closeModal;
  export let digits;

  function onConfirm() {
    deleteCard();
    closeModal();
  }
</script>

<div class="flex-center confirm-container">
  <p>Are you sure you want to cancel the card ending with {digits}?</p>
  <div class="flex-center actions">
    <button on:click={onConfirm}>Confirm</button>
    <button on:click={closeModal}>Cancel</button>
  </div>
</div>

<style lang="scss">
  .confirm-container {
    flex-direction: column;
    gap: 24px;
    color: var(--blue-main);
    padding: 24px 16px;
    font-size: 16px;

    p {
      font-weight: 600;
    }

    .actions {
      flex-direction: row;
      gap: 24px;

      button {
        padding: 4px 6px;
        border-radius: 4px;
        border: 1px solid black;
        
        &:first-child {
          background-color: #F251951A;
          color: rgb(244, 86, 86);
          border: 1px solid rgb(244, 86, 86);
        }
      }
    }
  }
</style>
