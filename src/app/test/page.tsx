'use client'

import React, { useState } from 'react'

const Test = () => {
    const [counter, setCounter] = useState(Math.random());

    return (
        <div>
            <span>Counter: {counter}</span>
        </div>
    )
}

export default Test