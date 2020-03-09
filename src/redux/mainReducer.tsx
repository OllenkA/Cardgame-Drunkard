import {compareCards, createCards, shuffle} from "../utility/helpers-function";
import {
    ICompareGameCards, IGameMove, IGameOver, IPickUpCards, IReducerState, IShuffleCards, IStartGame
} from "./interfaces";

export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const START_GAME = 'START_GAME';
export const GAME_MOVE = 'GAME_MOVE';
export const COMPARE_GAME_CARDS = 'COMPARE_GAME_CARDS';
export const PICK_UP_CARDS = 'PICK_UP_CARDS';
export const GAME_OVER = 'GAME_OVER';

const initialState: IReducerState = {
    cards: [],
    cardsGamer1: [],
    cardsGamer2: [],
    isGameStarted: false,
    cardGamer1: [],
    cardGamer2: [],
    compare: '',
    strokeNumber: 0,
};

const mainReducer = (state = initialState, action: IStartGame | IGameMove | ICompareGameCards | IPickUpCards
    | IGameOver | IShuffleCards) => {

    switch (action.type) {

        case SHUFFLE_CARDS:
            let newStartArray = shuffle(createCards()).map((card: any, index: number) => {
                return {...card, id: index + 1,}
            });
            return {
                ...state,
                cards: newStartArray,
                cardsGamer1: [],
                cardsGamer2: [],
                cardGamer1: [],
                cardGamer2: [],
                compare: '',
                isGameStarted: false,
                strokeNumber: 0,
            };

        case START_GAME:
            // let cardsForGamer1 = state.cards
            //     .filter((card: any, index: number) => index <= 17 && {...card, id: index + 1});
            // let cardsForGamer2 = state.cards.filter((card: any, index: number) => index > 17)
            //     .map((element: any, index: number) => {
            //         return {...element, id: index + 1}
            //     });
            let cardsForGamer1 = state.cards
                .filter((card: any, index: number) => index <= (state.cards.length/2) - 1 && {...card, id: index + 1});
            let cardsForGamer2 = state.cards.filter((card: any, index: number) => index > (state.cards.length/2) - 1)
                .map((element: any, index: number) => {return {...element, id: index + 1}});
            return {
                ...state,
                cards: [],
                cardsGamer1: cardsForGamer1,
                cardsGamer2: cardsForGamer2,
                isGameStarted: true,
            };

        case GAME_MOVE:
            let newCardGamer1 = state.cardsGamer1.filter(card => card.id === 1);
            let newCardGamer2 = state.cardsGamer2.filter(card => card.id === 1);

            let newCardsDeskGamer1 = state.cardsGamer1.filter((card: any, index: number) => index > 0)
                .map((element: any, index: number) => {return {...element, id: index + 1,}});

            let newCardsDeskGamer2 = state.cardsGamer2.filter((card: any, index: number) => index > 0)
                .map((element: any, index: number) => {return {...element, id: index + 1}});

            return {
                ...state,
                cardsGamer1: newCardsDeskGamer1,
                cardsGamer2: newCardsDeskGamer2,
                cardGamer1: [...newCardGamer1, ...state.cardGamer1].map((el: any, index: number) => {
                    return {...el, id: index + 1}}),
                cardGamer2: [...newCardGamer2, ...state.cardGamer2].map((el: any, index: number) => {
                    return {...el, id: index + 1}}),
                strokeNumber: state.strokeNumber + 1,
            };

        case COMPARE_GAME_CARDS:
            return {
                ...state,
                compare: compareCards(state.cardGamer1[0].value, state.cardGamer2[0].value)
            };

        case PICK_UP_CARDS:
            if (state.compare === '1') {
                return {
                    ...state,
                    cardsGamer1: [...state.cardsGamer1, ...state.cardGamer1, ...state.cardGamer2]
                        .map((el: any, index: number) => {return {...el, id: index + 1}}),
                    cardGamer1: [],
                    cardGamer2: [],
                }
            } else {
                return {
                    ...state,
                    cardsGamer2: [...state.cardsGamer2, ...state.cardGamer1, ...state.cardGamer2]
                        .map((el: any, index: number) => {return {...el, id: index + 1}}),
                    cardGamer1: [],
                    cardGamer2: [],
                }
            }

        case GAME_OVER:
            return {
                ...state,
                cards: [],
                cardsGamer1: [],
                cardsGamer2: [],
                isGameStarted: false,
                cardGamer1: [],
                cardGamer2: [],
                compare: '',
                strokeNumber: 0,
            };
        default:
            return state;
    }
};

export const startGame = () => ({type: START_GAME});
export const gameMove = () => ({type: GAME_MOVE});
export const compareGameCards = () => ({type: COMPARE_GAME_CARDS});
export const pickUpCards = () => ({type: PICK_UP_CARDS});
export const gameOver = () => ({type: GAME_OVER});
export const shuffleCards = () => ({type: SHUFFLE_CARDS});

export default mainReducer;