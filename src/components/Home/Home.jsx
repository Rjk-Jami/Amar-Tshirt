import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    console.log(tShirts)
    return (
        <div>
            <h3>this is home</h3>
        </div>
    );
};

export default Home;