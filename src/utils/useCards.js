import { useMemo } from 'react';

// const useLikedCards = (cards, likedMovies) => {
//   const likedCards = useMemo(() => {
//     console.log(likedMovies, cards.map(i => i.nameEN).filter(name => name))
//     return cards
//   }, [cards, likedMovies])
//   return likedCards;
// }

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
