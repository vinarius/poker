import React, { FunctionComponent, useContext } from 'react';
import { MyContext } from '../StateProvider/stateProvider';
import './mainMenu.css';

export const MainMenu: FunctionComponent = () => {

    const { enterGame } = useContext(MyContext);

    return (
        <div className='main-menu'>
            <p className='title'>Vin's Poker App</p>
            <button className="main-menu-button" onClick={()=>{enterGame()}}>Enter Game</button>
            <button className="main-menu-button" onClick={()=>{console.log('Friends feature under construction :)')}}>Friends</button>
            <button className="main-menu-button" onClick={()=>{console.log('Leaderboard feature under construction :)')}}>Leaderboard</button>
            <button className="main-menu-button" onClick={()=>{console.log('Settings feature under construction :)')}}>Settings</button>
        </div>
    );
};