import React, { FunctionComponent, useContext, useState, useRef, MutableRefObject, FormEvent } from 'react';
import './table.css';
import { MyContext } from '../StateProvider/stateProvider';
import {convertToCardImageString, getImage, formatCashString} from '../../services/getImage';
import { player } from '../../interfaces/player';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Toast, ToastMessage } from 'primereact/toast';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { IState } from '../../interfaces/state';
import convertChatMessageIntoMultiline from '../../services/convertChatMessageIntoMultiline';


export const Table: FunctionComponent = () => {
    const cardHeight: string = '60';

    const {
        deck,
        shuffleDeck,
        exitGame,
        chatInput,
        updateChatInput,
        chatHistory,
        updateChatHistory
     } = useContext<any>(MyContext);
    const [isShowingChat, setIsShowingChat] = useState<boolean>(false);
    const myToast = useRef() as MutableRefObject<Toast>;
    const showToast: Function = (
        severityValue: ToastMessage['severity'],
        summaryValue: ToastMessage['summary'],
        detailValue: ToastMessage['detail']
        ): void => {
        myToast.current.show({
            severity: severityValue,
            summary: summaryValue,
            detail: detailValue
        });
    }

    const handleChatSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        updateChatHistory(chatInput);
        updateChatInput('');
    };

    const playerData: player[] = require('../../assets/playerData.json').Items;

    const chatBoxHistory: HTMLParagraphElement[] = chatHistory.map((el:IState['chatHistory'], index:number) => {
        // el.length > 26 ? convertChatMessageIntoMultiline(el, index)
        // : <p key={index} className='chat-message'>{el}</p>
    });

    return (
        <div className='table'>
            <main>
                <Toast className='main-menu-toast' ref={myToast} />
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
                                <Button className='player-game-action-button' onClick={()=>{ showToast('info', 'info message', 'Check feature under construction :)') }}>Check</Button>
                            </div>
                            <div className="container-center-items">
                                <Button className='player-game-action-button' onClick={()=>{ showToast('info', 'info message', 'Bet feature under construction :)') }}>Bet</Button>
                                <Button className='player-game-action-button' onClick={()=>{ showToast('info', 'info message', 'Fold feature under construction :)') }}>Fold</Button>
                            </div>
                        </div>
                    </div>
                    <div className='display-flex'>
                        <div className='user-info'>
                            <p>Mark:</p>
                            <p>$15,277.00</p>
                        </div>
                        <div>
                            <Sidebar className='player-game-sidebar-chat' visible={isShowingChat} position="right" onHide={() => setIsShowingChat(false)}>
                                <Card className='chat-card' title='Chat'>
                                    <div className='chat-box'>
                                        {chatBoxHistory}
                                    </div>
                                    <form onSubmit={(event)=>{ handleChatSubmit(event) }}>
                                        <InputText className='chat-input-text' value={chatInput} onChange={(event) => { updateChatInput(event.target.value) }} />
                                    </form>
                                </Card>
                            </Sidebar>
                            
                            <Button onClick={(e) => setIsShowingChat(true)} className='player-game-action-button'>Chat</Button>
                            <Button onClick={()=>{exitGame()}} className='player-game-action-button'>Menu</Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};