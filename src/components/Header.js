import React from 'react'
import Button from './Button';
import { useLocation } from 'react-router';


const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
           { location.pathname==='/' && 
           <Button color="green" text={showAdd ? 'Close':'Add'} onClick={onAdd} />}
        </header>
    )
}

export default Header;

