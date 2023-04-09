import React, { useContext } from 'react';
import Cousin from '../Father/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ring}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
           <h2>Uncle</h2>
           <p>grandpa money: {money}</p>
           <button onClick={()=>{setMoney(money + 100)}}>send 100tk</button>
           <Cousin ring={ring} hasFriend={true} >Jami</Cousin> 
        </div>
    );
};

export default Uncle;