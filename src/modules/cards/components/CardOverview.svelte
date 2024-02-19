<script>
  import { allCards } from "../helpers/index";
  import { getTotalBalance } from "../helpers/cards";
  import { openModal } from "../../../lib/components/modal/store";
  import NewCard from "../partials/NewCard.svelte";
  import CardsList from "./CardsList.svelte";

  $: total = getTotalBalance($allCards);

  function openNewCardModal() {
    openModal({ component: NewCard });
  }
</script>

<div class="overview-container">
  <div class="balance-container">
    <h3>Account balance</h3>
    <div class="flex-center balance-info">
      <div class="left flex-center">
        <span>{total}</span>
      </div>
      <div class="flex-center right">
        <button on:click={openNewCardModal} class="text-btn">
          <span>New card</span>
        </button>
      </div>
    </div>
  </div>

  <CardsList />
</div>

<style lang="scss">
  .overview-container {
    display: flex;
    flex-direction: column;
    padding: 32px 0 0;
  }

  .balance-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 24px;

    h3 {
      font-weight: 600;
      font-size: 14px;
    }
  }

  .balance-info {
    flex-direction: row;
    justify-content: space-between;

    .left {
      gap: 10px;

      &::before {
        content: '$$';
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: var(--green-main);
        font-size: 12px;
        font-weight: 700;
        border-radius: 4px;
        width: 40px;
        height: 22px;
      }

      span {
        font-size: 24px;
        font-weight: 700;

      }
    }

    .right {
      gap: 6px;

      &::before {
        content: '+';
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: var(--blue-tertiary);
        color: var(--blue-main);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
      }

      button {
        font-weight: bold;
        font-size: 13px;
        color: var(--blue-tertiary);
      }
    }
  }
</style>
