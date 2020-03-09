import hearts from "../assets/hearts.png";
import diamonds from "../assets/diamond.png";
import spades from "../assets/pika.png";
import clubs from "../assets/cross.png";

const picture: string[] = [hearts, diamonds, spades, clubs];
const numberCard: string[] = ['6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
// const numberCard: string[] = ['6', '7', 'A'];
// const picture: string[] = [hearts,clubs];


const findValue = (number: string) => {
    switch (number) {
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case '10':
            return 10;
        case'J':
            return 11;
        case 'D':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 14;
        default:
            return null;
    }
};

export const createCards = () => {
    let cards = [];
    for (let i = 0; i <= numberCard.length - 1; i++) {
        for (let j = 0; j <= picture.length - 1; j++) {
            cards.push(
                {
                    id: cards.length,
                    number: numberCard[i],
                    picture: picture[j],
                    value: findValue(numberCard[i])
                }
            );
        }
    }
    return cards
};

export const shuffle = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * arr.length);
        const temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr
};

export let compareCards = (value1: any, value2: any) => {
    if(value1 === 6 && value2 === 14){
        return '1'
    }else if(value1 === 14 && value2 === 6){
        return '-1'
    }else if(value1 > value2){
        return '1'
    }else if(value1 < value2){
        return '-1'
    }else {
        return '0'
    }
};