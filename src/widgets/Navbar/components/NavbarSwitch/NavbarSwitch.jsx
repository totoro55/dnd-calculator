import React from 'react';
import './NavbarSwitch.scss'
import Switcher from "../../../../shared/UI/Switcher/Switcher";

const NavbarSwitch = ({items, onChange, value}) => {

    return (
        <div className={'navbar-switch'}>
            <Switcher items={items} value={value} onValueChange={onChange}/>
        </div>
    );
};

export default NavbarSwitch;