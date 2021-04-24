import React from 'react'
import './Button.css'

/*
const Button = props => <button className='Button'> This button still can not do anything</button>

export default Button*/

const Button = ({ children, onClick }) => (

    <button onClick={onClick}>
        {children}
    </button>
)

export default Button