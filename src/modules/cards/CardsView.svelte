<script>
  import { onMount } from "svelte";
  import aspireShort from "../../assets/icons/aspire-short";
  import Icon from "../../lib/components/Icon.svelte";
  import CardOverview from "./components/CardOverview.svelte";
  import { getCards } from "./helpers/cards";
  import { allCards } from "./helpers/index";
  import CardActions from "./components/CardActions.svelte";
  import CardDetails from "./components/CardDetails.svelte";

  let overviewHeight = 0;

  onMount(() => {
    getCards().then((res) => $allCards = res);
  });
</script>

<section class="overview-section" bind:clientHeight={overviewHeight}>
  <Icon icon={aspireShort} class="aspire-icon" />
  <CardOverview />
</section>
<section class="actions-details-section" style:margin-top={`${(overviewHeight || 0) - 30}px`}>
  <div class="content" style="">
    <CardActions />
    <CardDetails />
  </div>
</section>

<style lang="scss">
  .overview-section {
    position: fixed;
    background-color: var(--blue-main);
    top: 0;
    width: 100%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 110px;
  }

  .actions-details-section {
    position: relative;
    width: 100vw;
    overflow: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 80px;
    background-color: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
    max-height: 95vh;
    min-height: 600px;
  }

  :global(.aspire-icon) {
    position: absolute;
    color: var(--green-main);
    top: 16px;
    right: 24px;
  }
</style>
