import { cardsList } from "../data";

export function getCards() {
  return new Promise((resolve) => {
    resolve(cardsList);
  });
}

export function getTotalBalance(cards = []) {
  return cards.reduce((total, card) => total + card.balance / card.denomination, 0);
}
