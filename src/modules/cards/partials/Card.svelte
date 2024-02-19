<script>
  import Icon from "../../../lib/components/Icon.svelte";
  import brandFull from '../../../assets/icons/aspire-full';

  export let frozen = false;
</script>

<div class="card-container" class:disable={frozen}>
  <Icon icon={brandFull} class="brand-icon" />
  <div class="name">
    <slot name="name" />
  </div>
  <div class="num">
    <slot name="card-num" />
  </div>
  <div class="valid-cvv">
    <slot name="valid-cvv" />
  </div>
  <slot name="network-icon" />
</div>

<style lang="scss">
  .card-container {
    display: flex;
    padding: 24px;
    background-color: var(--green-main);
    flex-direction: column;
    border-radius: 12px;
    color: white;
    position: relative;

    &.disable {
      opacity: 0.5;
    }

    :global(.brand-icon) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 24px;
    }

    .num, .valid-cvv {
      display: flex;
      gap: 24px;
      flex-direction: row;
    }

    .valid-cvv {
      gap: 30px;
    }

    .name {
      margin-bottom: 24px;
    }

    .num, .valid-cvv {
      margin-bottom: 12px;
      :global(span) {
        letter-spacing: 6px;
        font-size: 16px;
        font-weight: bold;
      }
    }

    .valid-cvv {
      margin-bottom: 18px;
      :global(span) {
        letter-spacing: 2px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
</style>
