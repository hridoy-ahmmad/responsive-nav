import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='active:bg-gray-500 px-10 lg:px-0 md:px-5 '><a className='' href={route.path}> {route.name} </a></li>
    )

};

export default Link;