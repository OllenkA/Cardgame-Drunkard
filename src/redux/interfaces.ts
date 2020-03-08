import {COMPARE_GAME_CARDS, CONTINUE_GAME, GAME_MOVE, PICK_UP_CARDS, SHUFFLE_CARDS, START_GAME} from "./mainReducer";

export interface ICardsInterface {
    id?: number,
    number?: string,
    picture?: string,
    value?: number,
}

export interface IReducerState {
    cards: ICardsInterface[],
    cardsGamer1: ICardsInterface[],
    cardsGamer2: ICardsInterface[],
    isGameStarted: boolean,
    cardGamer1: ICardsInterface[],
    cardGamer2: ICardsInterface[],
    compare: string,
    isMove: boolean,
}

export interface IShuffleCards {
    type: typeof SHUFFLE_CARDS
}

export interface IStartGame {
    type: typeof START_GAME
}

export interface IGameMove {
    type: typeof GAME_MOVE
}

export interface ICompareGameCards {
    type: typeof COMPARE_GAME_CARDS,
}

export interface IPickUpCards {
    type: typeof PICK_UP_CARDS,
}

export interface IContinueGame {
    type: typeof CONTINUE_GAME,
}