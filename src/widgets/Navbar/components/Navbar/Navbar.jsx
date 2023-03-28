import React, {useEffect, useState} from 'react';
import './Navbar.scss'
import NavbarSwitch from "../NavbarSwitch/NavbarSwitch";
import {MdCode, MdOutlineRemoveRedEye} from "react-icons/md";
import NavbarSwitchOption from "../NavbarSwitchOption/NavbarSwitchOption";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const [mode, setMode] = useState('/')
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=>{
        setMode(location.pathname)
    },[])


    const links = [
        {
            value: '/runtime',
            label: 'runtime',
            icon: (<MdOutlineRemoveRedEye />),
        },
        {
            value: '/',
            label: 'constructor',
            icon: (<MdCode />),
        },
    ]

    const navbarLinks = links.map(link=>{
        return ({...link, component: (<NavbarSwitchOption icon={link.icon} title={link.label} value={link.label} />)})
    })

    const handleModeChange = (value) => {
        setMode(value)
        navigate(value)
    }


    return (
        <div className={'navbar'}>
            <div className={'navbar-switch_box'}>
                <NavbarSwitch items={navbarLinks} value={mode} onChange={handleModeChange}/>
            </div>
        </div>
    );
};

export default Navbar;