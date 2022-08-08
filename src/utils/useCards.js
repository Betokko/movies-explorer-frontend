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
    return shortedCards.filter((card) =>
      card.nameRU.toLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, shortedCards]);
  return shortedAndSearchedCards;
};

// export const useLikedShortedAndSearchedCards = (cards, filter) => {
//   const shortedAndSearchedCards = useShortedAndSearchedCards(cards, filter);
//   const likedShortedAndSearchedCards = useMemo(() => {
//     return shortedAndSearchedCards.filter((card) => !filter.names.includes(card.nameEN))
//   }, [shortedAndSearchedCards])
//   return likedShortedAndSearchedCards;
// }