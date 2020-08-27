import React, { FunctionComponent, useContext } from 'react';
import { MyContext } from '../StateProvider/stateProvider';
import './mainMenu.css';

export const MainMenu: FunctionComponent = () => {

    const { enterGame } = useContext(MyContext);

    return (
        <div className='main-menu'>
            <p className='margin-bot-5'>Vin's Poker App</p>
            <button onClick={()=>{enterGame()}}>Enter Game</button>
            <button onClick={()=>{console.log('Friends feature under construction :)')}}>Friends</button>
            <button onClick={()=>{console.log('Leaderboard feature under construction :)')}}>Leaderboard</button>
            <button onClick={()=>{console.log('Settings feature under construction :)')}}>Settings</button>
        </div>
    );
};