import React from 'react';
import './NavbarSwitchOption.scss'
import {Link} from "react-router-dom";

const NavbarSwitchOption = ({icon, title, value}) => {
    return (
            <div className={'option'}>
                <div className={'option_icon'}>
                    {icon}
                </div>
                <div className={'option_title'}>
                    {title}
                </div>
            </div>
    );
};

export default NavbarSwitchOption;