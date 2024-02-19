<script>
  import Icon from "../../../lib/components/Icon.svelte";
  import freeze from "../../../assets/icons/freeze";
  import gpay from "../../../assets/icons/gpay";
  import limit from "../../../assets/icons/limit";
  import replace from "../../../assets/icons/replace";
  import cancel from "../../../assets/icons/cancel";
  import { activeCard, changeActiveStatus } from "../helpers";
  import { openModal } from "../../../lib/components/modal/store";
  import DeleteCard from "../partials/DeleteCard.svelte";

  function openDeleteConfirmation() {
    openModal({ component: DeleteCard, props: { digits: $activeCard.last4 } });
  }

  $: isActiveCardFrozen = !$activeCard?.active;
</script>
<div class="actions-container">
  <button on:click={changeActiveStatus} class="action-item flex-center text-btn">
    <Icon icon={freeze} />
    <span>{isActiveCardFrozen ? 'Unfreeze' : 'Freeze'} card</span>
  </button>
  <button class="action-item flex-center text-btn">
    <Icon icon={limit} />
    <span>Set spend limit</span>
  </button>
  <button class="action-item flex-center text-btn">
    <Icon icon={gpay} />
    <span>Add to Gpay</span>
  </button>
  <button class="action-item flex-center text-btn">
    <Icon icon={replace} />
    <span>Replace card</span>
  </button>
  <button on:click={openDeleteConfirmation} class="action-item flex-center text-btn">
    <Icon icon={cancel} />
    <span>Cancel card</span>
  </button>
</div>

<style lang="scss">
  .actions-container {
    background-color: #EDF3FF;
    padding: 20px 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 12px;

    .action-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 8px;
      color: var(--blue-main);

      span {
        text-align: center;
      }
    }
  }
</style>
