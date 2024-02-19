<script>
  import DetailsCard from "../partials/DetailsCard.svelte";

</script>
<div class="details-container">
  <DetailsCard>
    <span slot="heading">Card details</span>
    <div slot="expanded" let:expanded class:show={expanded}>
      <!-- TODO -->
    </div>
  </DetailsCard>
  <DetailsCard>
    <span slot="heading">Recent transaction</span>
    <div slot="expanded" let:expanded class:show={expanded}>
      <!-- TODO -->
    </div>
  </DetailsCard>
</div>

<style lang="scss">
  .details-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

    span {
      color: var(--blue-main);

      &[slot="heading"] {
        font-weight: 600;
      }
    }

    div[slot="expanded"] {
      transition: 0.5s all;
      height: 0;

      &.show {
        display: block;
        height: 150px;
      }
    }
  }
</style>
