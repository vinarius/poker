import React, { useContext } from 'react';
import './table.css';
import { MyContext } from '../StateProvider/stateProvider';
import {convertToCardImageString, getImage, formatCashString} from '../../services/getImage';

interface player {
    name: string;
    cash: number;
    cardOne: null|string;
    cardTWo: null|string;
}

export const Table = () => {
    const cardHeight: string = '60';

    const { deck, shuffleDeck, exitGame } = useContext(MyContext);

    const playerData: player[] = require('../../assets/playerData.json').Items;

    return (
        <div className='table'>
            <main>
                <div className='flex-row'>
                        {(() => {
                            if(playerData[0]) {
                                const playerCard1: string = getImage(convertToCardImageString(deck[0]));
                                const playerCard2: string = getImage(convertToCardImageString(deck[7]));
                                const formattedCashString: string = formatCashString(playerData[0].cash);

                                return (
                                    <div className='table-seat'>
                                        <p>{playerData[0].name}</p>
                                        <p>{formattedCashString}</p>
                                        <div className='card-container'>
                                            <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                            <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='table-seat'>
                                        <div className='empty-seat'></div>
                                    </div>
                                )
                            }
                    })()}
                    {(() => {
                            if(playerData[1]) {
                                const playerCard1: string = getImage(convertToCardImageString(deck[1]));
                                const playerCard2: string = getImage(convertToCardImageString(deck[8]));
                                const formattedCashString: string = formatCashString(playerData[1].cash);
                                
                                return (
                                    <div className='table-seat'>
                                        <p>{playerData[1].name}</p>
                                        <p>{formattedCashString}</p>
                                        <div className='card-container'>
                                            <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                            <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='table-seat'>
                                        <div className='empty-seat'></div>
                                    </div>
                                )
                            }
                    })()}
                </div>
                <div className='flex-row-center'>
                    <div className='table-side-column'>
                    {(() => {
                            if(playerData[2]) {
                                const playerCard1: string = getImage(convertToCardImageString(deck[2]));
                                const playerCard2: string = getImage(convertToCardImageString(deck[9]));
                                const formattedCashString: string = formatCashString(playerData[2].cash);
                                
                                return (
                                    <div className='table-side-seat'>
                                        <p>{playerData[2].name}</p>
                                        <p>{formattedCashString}</p>
                                        <div className='card-container'>
                                            <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                            <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='table-side-seat'>
                                        <div className='empty-seat'></div>
                                    </div>
                                )
                            }
                    })()}
                    {(() => {
                        if(playerData[3]) {
                            const playerCard1: string = getImage(convertToCardImageString(deck[3]));
                            const playerCard2: string = getImage(convertToCardImageString(deck[10]));
                            const formattedCashString: string = formatCashString(playerData[3].cash);
                            
                            return (
                                <div className='table-side-seat'>
                                    <p>{playerData[3].name}</p>
                                    <p>{formattedCashString}</p>
                                    <div className='card-container'>
                                        <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                        <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='table-side-seat'>
                                        <div className='empty-seat'></div>
                                    </div>
                            )
                        }
                    })()}
                    </div>
                    <div className='table-center'>
                        <div className='center-text-container'>
                            <p>Pot</p>
                            <p>$45,234.00</p>
                            {/* <br></br>
                            <button onClick={()=>{shuffleDeck()}}>Shuffle Deck</button> */}
                        </div>
                    </div>
                    <div className='table-side-column'>
                    {(() => {
                            if(playerData[4]) {
                                const playerCard1: string = getImage(convertToCardImageString(deck[4]));
                                const playerCard2: string = getImage(convertToCardImageString(deck[11]));
                                const formattedCashString: string = formatCashString(playerData[4].cash);
                                
                                return (
                                    <div className='table-side-seat'>
                                        <p>{playerData[4].name}</p>
                                        <p>{formattedCashString}</p>
                                        <div className='card-container'>
                                            <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                            <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='table-side-seat'>
                                        <div className='empty-seat'></div>
                                    </div>
                                )
                            }
                    })()}
                    {(() => {
                        if(playerData[5]) {
                            const playerCard1: string = getImage(convertToCardImageString(deck[5]));
                            const playerCard2: string = getImage(convertToCardImageString(deck[12]));
                            const formattedCashString: string = formatCashString(playerData[5].cash);
                            
                            return (
                                <div className='table-side-seat'>
                                    <p>{playerData[5].name}</p>
                                    <p>{formattedCashString}</p>
                                    <div className='card-container'>
                                        <img alt='playing card' className='card-image' src={playerCard1} height={cardHeight} />
                                        <img alt='playing card' className='card-image' src={playerCard2} height={cardHeight} />
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className='table-side-seat'>
                                    <div className='empty-seat'></div>
                                </div>
                            )
                        }
                    })()}
                    </div>
                </div>
                <div className='flex-row'>
                    <div className='card-container'>
                        <img alt='playing card' src={getImage(convertToCardImageString(deck[14]))} className='river-card playing-card' height={cardHeight} />
                        <img alt='playing card' src={getImage(convertToCardImageString(deck[15]))} className='river-card playing-card' height={cardHeight} />
                        <img alt='playing card' src={getImage(convertToCardImageString(deck[16]))} className='river-card playing-card' height={cardHeight} />
                        <img alt='playing card' src={getImage(convertToCardImageString(deck[17]))} className='river-card playing-card' height={cardHeight} />
                        <img alt='playing card' src={getImage(convertToCardImageString(deck[18]))} className='river-card playing-card' height={cardHeight} />
                    </div>
                </div>
                <div className='player-info-container'>
                    <div className='display-flex'>
                        <div className='padding-seven-half-top-px'>
                            <img alt='playing card' src={getImage(convertToCardImageString(deck[6]))} className='playing-card' height={cardHeight} />
                            <img alt='playing card' src={getImage(convertToCardImageString(deck[13]))} className='playing-card' height={cardHeight} />
                        </div>
                        <div className='padding-seven-half-top-px'>
                            <div className="container-center-items">
                                <button className='player-game-action-button' onClick={()=>{console.log('Check feature under construction :)')}}>Check</button>
                            </div>
                            <div className="container-center-items">
                                <button className='player-game-action-button' onClick={()=>{console.log('Bet feature under construction :)')}}>Bet</button>
                                <button className='player-game-action-button' onClick={()=>{console.log('Fold feature under construction :)')}}>Fold</button>
                            </div>
                        </div>
                    </div>
                    <div className='display-flex'>
                        <div className='user-info'>
                            <p>Mark:</p>
                            <p>$15,277.00</p>
                        </div>
                        <div>
                            <button className='margin-quarter player-game-menu-button' onClick={()=>{console.log('Chat feature under construction :)')}}>Chat</button>
                            <button className='margin-quarter player-game-menu-button' onClick={()=>{exitGame()}}>Menu</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};