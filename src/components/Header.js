import React from 'react'
import Button from './Button';


const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" title="New" />
        </header>
    )
}



export default Header;

