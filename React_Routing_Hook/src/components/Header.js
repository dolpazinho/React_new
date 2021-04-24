import React from 'react'
import './Header.css'

/*
const Header = props => <h1 className='Header'>This is an Interesting buttons</h1>

export default Header*/


const Header = ({count}) =>
    <h1>
        Current Count: {count}
    </h1>

export default Header