import React, { useContext } from 'react';
import './small.css';
import { MyContext } from '../StateProvider/stateProvider';
import convertToCardImageString from '../../services/convertToCardImageString';



// import userCardOne from test;
// import userCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[1])}.png`;

// import riverCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[2])}.png`;
// import riverCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[3])}.png`;
// import riverCardThree from `../../assets/Playing_Cards/${convertToCardImageString(deck[4])}.png`;
// import riverCardFour from `../../assets/Playing_Cards/${convertToCardImageString(deck[5])}.png`;
// import riverCardFive from `../../assets/Playing_Cards/${convertToCardImageString(deck[6])}.png`;

// import playerOneCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[7])}.png`;
// import playerOneCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[8])}.png`;
// import playerTwoCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[9])}.png`;
// import playerTwoCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[10])}.png`;
// import playerThreeCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[11])}.png`;
// import playerThreeCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[12])}.png`;
// import playerFourCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[13])}.png`;
// import playerFourCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[14])}.png`;
// import playerFiveCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[15])}.png`;
// import playerFiveCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[16])}.png`;
// import playerSixCardOne from `../../assets/Playing_Cards/${convertToCardImageString(deck[17])}.png`;
// import playerSixCardTwo from `../../assets/Playing_Cards/${convertToCardImageString(deck[18])}.png`;

import userCardOne from '../../assets/Playing_Cards/AC.png';
import userCardTwo from '../../assets/Playing_Cards/AS.png';

import riverCardOne from '../../assets/Playing_Cards/2C.png';
import riverCardTwo from '../../assets/Playing_Cards/3C.png';
import riverCardThree from '../../assets/Playing_Cards/4C.png';
import riverCardFour from '../../assets/Playing_Cards/5C.png';
import riverCardFive from '../../assets/Playing_Cards/6C.png';

import playerOneCardOne from '../../assets/Playing_Cards/2H.png';
import playerOneCardTwo from '../../assets/Playing_Cards/3H.png';
import playerTwoCardOne from '../../assets/Playing_Cards/4H.png';
import playerTwoCardTwo from '../../assets/Playing_Cards/5H.png';
import playerThreeCardOne from '../../assets/Playing_Cards/6H.png';
import playerThreeCardTwo from '../../assets/Playing_Cards/2D.png';
import playerFourCardOne from '../../assets/Playing_Cards/3D.png';
import playerFourCardTwo from '../../assets/Playing_Cards/4D.png';
import playerFiveCardOne from '../../assets/Playing_Cards/5D.png';
import playerFiveCardTwo from '../../assets/Playing_Cards/6D.png';
import playerSixCardOne from '../../assets/Playing_Cards/JS.png';
import playerSixCardTwo from '../../assets/Playing_Cards/QS.png';
const { deck } = useContext(MyContext);
console.log('deck from MyContext:', deck);

const test = `../../assets/Playing_Cards/${convertToCardImageString(deck[0])}.png`;
console.log('test', test);

export const SmallTable = () => {
    const cardHeight = "60";

    return (
        <div className='small-table'>
            <main>
                <div className="flex-row">
                    <div className="table-seat">
                        <p>Joey</p>
                        <p>$7,345.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerOneCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerOneCardTwo} height={cardHeight} />
                        </div>
                    </div>
                    <div className="table-seat">
                        <p>Phil</p>
                        <p>$17,543.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerTwoCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerTwoCardTwo} height={cardHeight} />
                        </div>
                    </div>
                </div>
                <div className="flex-row-center">
                    <div className="table-side-column">
                        <div className="table-side-seat">
                            <p>Cole</p>
                            <p>$120,250.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerThreeCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerThreeCardTwo} height={cardHeight} />
                        </div>
                        </div>
                        <div className="table-side-seat">
                            <p>Ryan</p>
                            <p>$250.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerFourCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerFourCardTwo} height={cardHeight} />
                        </div>
                        </div>
                    </div>
                    <div className="table-center">
                        <div className="center-text-container">
                            <p>Pot</p>
                            <p>$45,234.00</p>
                        </div>
                    </div>
                    <div className="table-side-column">
                        <div className="table-side-seat">
                            <p>Crystal</p>
                            <p>$10,250.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerFiveCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerFiveCardTwo} height={cardHeight} />
                        </div>
                        </div>
                        <div className="table-side-seat">
                            <p>Lauren</p>
                            <p>$13,737.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={playerSixCardOne} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={playerSixCardTwo} height={cardHeight} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="card-container">
                        <img alt="playing card" src={riverCardOne} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={riverCardTwo} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={riverCardThree} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={riverCardFour} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={riverCardFive} className="river-card playing-card" height={cardHeight} />
                    </div>
                </div>
                <div className="player-info-container">
                    <div className="display-flex">
                        <div className="padding-seven-half-top-px">
                            <img alt="playing card" src={userCardOne} className="playing-card" height={cardHeight} />
                            <img alt="playing card" src={userCardTwo} className="playing-card" height={cardHeight} />
                        </div>
                        <div className="padding-seven-half-top-px">
                            <button>Check</button>
                            <button>Bet</button>
                            <button>Fold</button>
                        </div>
                    </div>
                    <div className="display-flex">
                        <div className="user-info">
                            <p>Mark:</p>
                            <p>$5,277.00</p>
                        </div>
                        <button className="margin-quarter menu-button">Chat</button>
                        <button className="margin-quarter menu-button">Menu</button>
                    </div>
                </div>
            </main>
        </div>
    );
};