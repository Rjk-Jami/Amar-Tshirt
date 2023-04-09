import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring = useContext(RingContext)
    const [money] = useContext(MoneyContext)

    return (
        <div>
            <h2>sister</h2>
            <h2>{ring}</h2>
          <h3>Money: {money}</h3>
        </div>
    );
};

export default Sister;