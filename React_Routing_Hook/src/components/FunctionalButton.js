import React from 'react'

const FunctionalButton  = ({onButtonClick, times}) => (
    <button onClick={onButtonClick('functional')}>
        Function: Clicked {times} times
    </button>
)
export default FunctionalButton