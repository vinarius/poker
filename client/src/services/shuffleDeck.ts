import { Card, Suit, FaceCardValue, NumericValue } from '../interfaces/card';

const convertToFaceCard = (value: number): FaceCardValue | NumericValue => {
    switch(value) {
        case 9:
            return FaceCardValue.jack;
        case 10:
            return FaceCardValue.queen;
        case 11:
            return FaceCardValue.king;
        case 12:
            return FaceCardValue.ace;
        default:
            return value + 2;
    }
};

export default () => {
    const newDeck: Card[] = [];
    const suits: Suit[] = [
        Suit.spades,
        Suit.hearts,
        Suit.clubs,
        Suit.diamonds
    ];

    suits.forEach((suit: Suit) => {
        for (let i=0; i<13; i++) {
            const newCard: Card = {
                suit,
                rank: convertToFaceCard(i),
                isVisible: false
            };

            newDeck.push(newCard);
        }
    });

    const shuffledDeck: Card[] = [];
    const shuffle = (deck: Card[]): void => {
        const randomCard: number = Math.floor(Math.random() * deck.length);
        const card: Card = deck.splice(randomCard, 1)[0];
        shuffledDeck.push(card);
        if(deck.length > 0) shuffle(deck);
    };

    shuffle(newDeck);

    return shuffledDeck;
};