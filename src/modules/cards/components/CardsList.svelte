<script>
  import Card from '../partials/Card.svelte';
  import { activeCardId } from "../helpers";
  import { allCards } from "../helpers";
  import Icon from '../../../lib/components/Icon.svelte';
  import visaLogo from '../../../assets/icons/network-visa';

  let activeIdx = 0;

  function next() {
    if (activeIdx < $allCards.length - 1) {
      activeIdx++;
    }
  }

  function prev() {
    if (activeIdx > 0) {
      activeIdx--;
    }
  }

  $: currCard = $allCards[activeIdx];
  $: disablePrev = activeIdx === 0;
  $: disableNext = activeIdx === $allCards.length - 1;

  $: $activeCardId = $allCards[activeIdx]?.id;
</script>

<div class="list-cards">
  {#if currCard}
    <Card frozen={!currCard.active}>
      <span slot="name">{currCard.holderName}</span>
      <svelte:fragment slot="card-num">
        <span>****</span>
        <span>****</span>
        <span>****</span>
        <span>{currCard.last4}</span>
      </svelte:fragment>
      <svelte:fragment slot="valid-cvv">
        <span>Thru: {currCard.valid}</span>
        <span>CVV: ***</span>
      </svelte:fragment>
      <svelte:fragment slot="network-icon">
        <Icon icon={visaLogo} class="network" />
      </svelte:fragment>
    </Card>
  {/if}
</div>
<div class="page-container">
  <button on:click={prev} disabled={disablePrev}>{'<'}</button>
  <button on:click={next} disabled={disableNext}>{'>'}</button>
</div>

<style lang="scss">
  .list-cards {
    width: 100%;
    padding: 24px;
    margin-top: 36px;

    span[slot="name"] {
      font-weight: 700;
      font-size: 22px;
    }

    :global(.network) {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }
  }

  .page-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
  }
</style>
