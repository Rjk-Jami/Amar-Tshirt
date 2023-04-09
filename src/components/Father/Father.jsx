import React from 'react';
import Myself from './Myself';
import Sister from './Sister';

const Father = ({ ring }) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>

            </section>
        </div>
    );
};

export default Father;