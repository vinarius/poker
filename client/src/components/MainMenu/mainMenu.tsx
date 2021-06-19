import React, { FunctionComponent, useContext, useRef, MutableRefObject } from 'react';
import { MyContext } from '../StateProvider/stateProvider';
import './mainMenu.css';
import { Button } from 'primereact/button';
import { Toast, ToastMessage } from 'primereact/toast';
import {Link} from 'react-router-dom';

export const MainMenu: FunctionComponent = () => {

    const { enterGame } = useContext<any>(MyContext);

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

    return (
        <div className='main-menu'>
            <Toast className="main-menu-toast" ref={myToast} />
            <p className='title'>Vin's Poker App</p>
            <Button className="main-menu-button" onClick={()=>{enterGame()}}>Enter Game</Button>
            <Button className="main-menu-button" onClick={()=>{ showToast('info', 'info message', 'Friends feature under construction :)')} }>Friends</Button>
            <Button className="main-menu-button" onClick={()=>{ showToast('info', 'info message', 'Leaderboard feature under construction :)')} }>Leaderboard</Button>
            <Button className="main-menu-button" onClick={()=>{ showToast('info', 'info message', 'Settings feature under construction :)')} }>Settings</Button>
            <Link to='/rules'><Button className="main-menu-button" onClick={()=>{} }>Rules</Button></Link>
        </div>
    );
};