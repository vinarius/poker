import { ICard, Suit, FaceCardValue, NumericValue } from '../interfaces/card';

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
    const newDeck: ICard[] = [];
    const suits: Suit[] = [
        Suit.spades,
        Suit.hearts,
        Suit.clubs,
        Suit.diamonds
    ];

    suits.forEach((suit: Suit) => {
        for (let i=0; i<13; i++) {
            const newCard: ICard = {
                suit,
                value: convertToFaceCard(i)
            };

            newDeck.push(newCard);
        }
    });

    const shuffledDeck: ICard[] = [];
    const shuffle = (deck: ICard[]): void => {
        const randomCard: number = Math.floor(Math.random() * deck.length);
        const card: ICard = deck.splice(randomCard, 1)[0];
        shuffledDeck.push(card);
        if(deck.length > 0) shuffle(deck);
    };

    shuffle(newDeck);

    return shuffledDeck;
};