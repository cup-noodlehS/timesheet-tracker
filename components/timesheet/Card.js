'use client';

import React from 'react'

function Card(props) {
    const {name, hours, createdOn} = props;
    const date = new Date(createdOn);
    return (
        <div className="flex justify-between items-center mx-3 px-5 py-2 border shadow-sm rounded-md hover:pointer">
            <div className="flex flex-col gap-1">
                <div className="font-medium">
                {name}
                </div>
                <div className="text-gray-500 text-xs">
                {date.toLocaleDateString()}
                </div>
            </div>
            <div>{hours}hrs</div>
        </div>
    )
}

export default Card