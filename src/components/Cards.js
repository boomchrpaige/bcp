import React from 'react';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Updates & News</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                <li className="playlist"><a href='https://bit.ly/3z54jPE' target='_blank' rel='noreferrer'>Feature on Ambient Soul Vibrations</a></li>
                <li className="playlist"><a href='https://open.spotify.com/playlist/2CsTZ92uYaXI7oYuoq7NwM?si=542b93cc4de64f2c&nd=1' target='_blank' rel='noreferrer'>Feature @ Music Enthusiast's New Music Friday</a></li>
                <li className="interview"><a href='https://bit.ly/3quH2ne' target='_blank' rel='noreferrer'>Interview with Mundane Magazine</a></li>
                <li className="review"><a href='https://bit.ly/3wXMxgE' target='_blank' rel='noreferrer'>Membranes LP review from Exclusive Magazine</a></li>
                <li className="interview"><a href='https://bit.ly/3iBMSRL' target='_blank' rel='noreferrer'>Boom chr Paige Interview with Music Existence</a></li>
                <li className="interview"><a href='https://bit.ly/3uF0s9W' target='_blank' rel='noreferrer'>Boom chr Paige Interview with Vents Magazine</a></li>
                <li className="feature"><a href='https://bit.ly/2R3bt6m' target='_blank' rel='noreferrer'>Boom chr Paige Feature on Stitched Sound</a></li>
                <li className="feature"><a href='https://bit.ly/3ta5p9j' target='_blank' rel='noreferrer'>Above London Feature on the Tinnitist Blog</a></li>
                </ul>
                </div>
            </div>
        </div> 
    )
}

export default Cards;
