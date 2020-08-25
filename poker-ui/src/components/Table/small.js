import React, { useContext } from 'react';
import './small.css';
import { MyContext } from '../StateProvider/stateProvider';
import {convertToCardImageString, getImage} from '../../services/getImage';


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

export const SmallTable = () => {
    const cardHeight = "60";

    const { deck } = useContext(MyContext);
    console.log('deck from MyContext:', deck);

    const test1String = convertToCardImageString(deck[0]);
    const test1Img = getImage(test1String);

    return (
        <div className='small-table'>
            <main>
                <div className="flex-row">
                    <div className="table-seat">
                        <p>Joey</p>
                        <p>$7,345.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[0]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[7]))} height={cardHeight} />
                        </div>
                    </div>
                    <div className="table-seat">
                        <p>Phil</p>
                        <p>$17,543.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[1]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[8]))} height={cardHeight} />
                        </div>
                    </div>
                </div>
                <div className="flex-row-center">
                    <div className="table-side-column">
                        <div className="table-side-seat">
                            <p>Cole</p>
                            <p>$120,250.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[2]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[9]))} height={cardHeight} />
                        </div>
                        </div>
                        <div className="table-side-seat">
                            <p>Ryan</p>
                            <p>$250.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[3]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[10]))} height={cardHeight} />
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
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[4]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[11]))} height={cardHeight} />
                        </div>
                        </div>
                        <div className="table-side-seat">
                            <p>Lauren</p>
                            <p>$13,737.00</p>
                        <div className="card-container">
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[5]))} height={cardHeight} />
                            <img alt="playing card" className="card-image" src={getImage(convertToCardImageString(deck[12]))} height={cardHeight} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="card-container">
                        <img alt="playing card" src={getImage(convertToCardImageString(deck[14]))} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={getImage(convertToCardImageString(deck[15]))} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={getImage(convertToCardImageString(deck[16]))} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={getImage(convertToCardImageString(deck[17]))} className="river-card playing-card" height={cardHeight} />
                        <img alt="playing card" src={getImage(convertToCardImageString(deck[18]))} className="river-card playing-card" height={cardHeight} />
                    </div>
                </div>
                <div className="player-info-container">
                    <div className="display-flex">
                        <div className="padding-seven-half-top-px">
                            <img alt="playing card" src={getImage(convertToCardImageString(deck[6]))} className="playing-card" height={cardHeight} />
                            <img alt="playing card" src={getImage(convertToCardImageString(deck[13]))} className="playing-card" height={cardHeight} />
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