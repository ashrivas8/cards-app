<script>
  import creditLogo from '../assets/icons/credit.js';
  import cardLogo from '../assets/icons/card.js';
  import aspireLogo from '../assets/icons/aspire-short.js';
  import paymentsLogo from '../assets/icons/payments.js';
  import accountLogo from '../assets/icons/account.js';
  import Icon from '../lib/components/Icon.svelte';
</script>

<footer>
  <nav class="flex-center">
    <a href="#" class="flex-center">
      <Icon icon={aspireLogo} />
      <span>Home</span>
    </a>
    <a href="#" class="flex-center" data-selected="true">
      <Icon icon={cardLogo} />
      <span>Cards</span>
    </a>
    <a href="#" class="flex-center">
      <Icon icon={paymentsLogo} />
      <span>Payments</span>
    </a>
    <a href="#" class="flex-center">
      <Icon icon={creditLogo} />
      <span>Credit</span>
    </a>
    <a href="#" class="flex-center">
      <Icon icon={accountLogo} />
      <span>Profile</span>
    </a>
  </nav>
</footer>

<style lang="scss">
  footer {
    position: fixed;
    bottom: 0;
    background-color: white;
    padding: 8px 28px;
    width: 100%;
    box-shadow: 0 -3px 6px #00000014;
  }

  nav {
    justify-content: space-between;
    color: var(--grey-main);

    a {
      color: var(--grey-main);
      font-size: 9px;
      flex-direction: column;
    }

    a[data-selected="true"] {
      color: var(--green-main);
    }
  }
</style>
