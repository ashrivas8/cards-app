<script>
  import chevron from "../../../assets/icons/chevron";
  import Icon from "../../../lib/components/Icon.svelte";

  let expanded = false;
</script>

<div class="container">
  <button on:click={() => expanded = !expanded} class="clickable">
    <slot name="heading" />
    <div class="flex-center expand-indicator" class:expanded={expanded}>
      <Icon icon={chevron} />
    </div>
  </button>
  <slot name="expanded" {expanded} />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #F5F5F5;
    box-shadow: 0 0 8px #0000000A;
    background-color: #FAFCFF;
  }
  
  .clickable {
    display: flex;
    padding: 24px;
    display: flex;
    background-color: transparent;
    flex-direction: row;
    border: none;
    justify-content: space-between;
    align-items: center;
  }

  .expand-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #009DFF1A;

    :global(span) {
      transform: rotate(90deg) translate(0px, 1.5px);
    }

    &.expanded :global(span) {
      transform: rotate(-90deg) translate(0px, 1.5px);
    }
  }
</style>
