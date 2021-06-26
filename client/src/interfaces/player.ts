export interface Player {
  cardOne: null|string;
  cardTwo: null|string;
  cash: number;
  isSpectator: boolean;
  name: string;
  playerId: string;
  seatPosition: number;
}