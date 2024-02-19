<script>
  import { createNewCard } from "../helpers";

  export let closeModal;

  function handleSubmit(e) {
    e.preventDefault();
    const name = new FormData(e.target).get('name');
    // @ts-ignore
    createNewCard(name);
    closeModal();
  }
</script>

<form on:submit={handleSubmit}>
  <label for="name">
    <input required placeholder="Cardholder name" name="name">
  </label>
  <div class="flex-center btn-container">
    <button>Add card</button>
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    input {
      width: 100%;
      background-color: white;
      padding: 6px 8px;
      font-size: 16px;
      border-radius: 8px;
      color: var(--blue-main);
    }

    .btn-container {
      justify-content: flex-end;
    }

    button {
      min-width: 50%;
      padding: 6px 0;
      background-color: var(--blue-main);
    }
  }
</style>
