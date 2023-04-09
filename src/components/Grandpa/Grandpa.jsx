import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css"

export const MoneyContext = createContext(0)
const Grandpa = () => {
    const ring = 'diamond'
    const [money , setMoney] = useState(100)
    return (
        <div className='grandpa'>
            <h2>grandpa</h2>
            <p>has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
            <div className="flex" >
                <Father ring={ring}></Father>
                <Uncle ring={ring}></Uncle>
                <Aunty></Aunty>
            </div>
            </MoneyContext.Provider>
        </div>
    );
};
export const RingContext = createContext()
export default Grandpa;


// <RingContext.Provider value='Golden Ring'>
//             <div className="flex" >
//                 <Father ring={ring}></Father>
//                 <Uncle ring={ring}></Uncle>
//                 <Aunty></Aunty>
//             </div>
//             </RingContext.Provider>