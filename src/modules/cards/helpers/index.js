import { derived, get, writable } from "svelte/store";
import { generateRandom } from "./generate";

const generateCvv = generateRandom(3);
const generateCardNumber = generateRandom(4);

export const activeCardId = writable();

export const allCards = writable([]);

export const activeCard = derived([allCards, activeCardId], ([$allCards, $activeCardId]) => $allCards.filter((card) => card.id === $activeCardId)[0])

export function createNewCard(name = '') {
  allCards.update((cards) => {
    return [
      ...cards,
      {
        holderName: name,
        id: Date.now(),
        cvv: generateCvv(),
        valid: '12/24',
        balance: 0,
        denomination: 100,
        network: 'visa',
        last4: generateCardNumber(),
        active: true,
      },
    ];
  });
}

export function changeActiveStatus() {
  const id = get(activeCardId);
  allCards.update((cards) => {
    const targetCard = cards.filter((card) => card.id === id)[0];
    if (!targetCard) {
      return cards;
    }

    targetCard.active = !targetCard.active;

    return [...cards];
  })
}

export function deleteCard() {
  const id = get(activeCardId);
  allCards.update((cards) => {
    const idx = cards.findIndex((card) => card.id === id);
    if (idx === -1) {
      return cards;
    }

    return [...cards.filter((card) => card.id !== id)];
  })
}
