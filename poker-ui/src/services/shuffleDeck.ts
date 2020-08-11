const convertToFaceCard = (value: any): any => {
    switch(value) {
        case 9:
            return 'jack';
        case 10:
            return 'queen';
        case 11:
            return 'king';
        case 12:
            return 'ace';
        default:
            return (value + 2).toString();
    }
};

export default () => {
    const newDeck: any = [];
    const suits: any = ['spades', 'hearts', 'clubs', 'diamonds'];

    suits.forEach((suit: any) => {
        for (let i=0; i<13; i++) {
            const newCard = {
                suit,
                value: convertToFaceCard(i)
            };

            newDeck.push(newCard);
        }
    });

    const shuffledDeck: any = [];
    const shuffle = (deck: any) => {
        const randomCard = Math.floor(Math.random() * deck.length);
        const card = deck.splice(randomCard, 1)[0];
        shuffledDeck.push(card);
        if(deck.length > 0) shuffle(deck);
    };

    shuffle(newDeck);

    return shuffledDeck;
};