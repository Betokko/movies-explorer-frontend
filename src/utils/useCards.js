import { useMemo } from 'react';

export const useSortedCards = (cards, sort) => {
  const sortedCards = useMemo(() => {
    if (!sort) {
      return cards;
    }
    return cards.filter((card) => card.duration <= 40);
  }, [sort, cards]);
  return sortedCards;
};

export const useSortedAndSearchedCards = (cards, sort, query) => {
  const sortedCards = useSortedCards(cards, sort);
  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter((sortedCards) =>
      sortedCards.nameRU.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, sortedCards]);
  return sortedAndSearchedCards;
};
