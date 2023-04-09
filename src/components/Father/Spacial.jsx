import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spacial = ({ring}) => {
    const GRing = useContext(RingContext)
    return (
        <div>
            <h2>special</h2>
            <h2>{ring}</h2>
            <h2>{GRing}</h2>

        </div>
    );
};

export default Spacial;