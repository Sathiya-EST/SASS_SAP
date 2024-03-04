import React from 'react';

const Card = ({ name, path }) => {
    return (
        <div className='card' style={{ backgroundImage: `url(${path})` }}>
            <p className='card--text'>{name}</p>
            <div className='card--line' />
        </div>
    );
}

export default Card;
