import React, { FunctionComponent, useContext } from 'react';
import { MyContext } from '../StateProvider/stateProvider';

export const MainMenu: FunctionComponent = () => {

    const { enterGame } = useContext(MyContext);

    return (
        <div>
            <button onClick={()=>{enterGame()}}>Enter Game</button>
        </div>
    );
};