export interface Card {
    suit: Suit;
    rank: NumericValue | FaceCardValue;
    isVisible: Boolean;
}

export enum Suit {
    spades = 'spades',
    hearts = 'hearts',
    clubs = 'clubs',
    diamonds = 'diamonds'
}

export enum FaceCardValue {
    jack = 'jack',
    queen = 'queen',
    king = 'king',
    ace = 'ace'
}

export enum NumericValue {
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
    nine = 9,
    ten = 10
}