import { useMemo } from 'react';

export const useShortedCards = (cards, filter) => {
  const shortedCards = useMemo(() => {
    if (!filter.short) {
      return cards;
    }
    return cards.filter((card) => card.duration <= 40);
  }, [filter.short, cards]);
  return shortedCards;
};

export const useShortedAndSearchedCards = (cards, filter) => {
  const shortedCards = useShortedCards(cards, filter);
  const shortedAndSearchedCards = useMemo(() => {
    return shortedCards.filter((sortedCards) =>
      sortedCards.nameRU.toLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, shortedCards]);
  return shortedAndSearchedCards;
};
