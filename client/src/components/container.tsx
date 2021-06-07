import React, { FunctionComponent, useContext } from 'react';
import '../App.css';
import { MyContext } from './StateProvider/stateProvider';
import { Table } from './Table/table';
import { MainMenu } from './MainMenu/mainMenu';

export const Container: FunctionComponent = () => {

    const { inGame } = useContext(MyContext);

    return (
        <div className='App'>
            { inGame ? <Table /> : <MainMenu /> }
        </div>
    );
};