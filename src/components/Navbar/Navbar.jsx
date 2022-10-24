import React, { useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LogoutOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { SidebarData } from '../Profile-menu/SidebarData';
import { Divider, Radio, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.scss';





const Navbar = () => {



    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    }

    return (
        <div>

            <nav className='navbar'>
                {/* <Typography.Title
                    className='logo'
                    editable
                    level={2}
                    style={{
                        margin: 0,
                    }}
                >
                    Hello Pravin
                </Typography.Title> */}
                <a href="https://www.furtimtechnologies.com/">
                    <img src="https://www.furtimtechnologies.com/wp-content/uploads/2019/09/logo_00d500500_2184.png" alt="" />
                </a>
                <ul className='nav-links'>


                    <Link to='/home' className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about' className='about'>
                        <li>About</li>
                    </Link>
                    <Link to='/skills' className='skills'>
                        <li>Products</li>
                    </Link>
                    <Link to='/contact' className='contact'>
                        <li>Contact</li>
                    </Link>
                    {/* <Link to='/signup' className='signup'>
                    <li>Sign up</li>
                </Link> */}

                    <div className='profile'>
                        <Link to='/profile'>
                            <li>  <Dropdown overlay={SidebarData} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <CgProfile />
                                    </Space>
                                </a>
                            </Dropdown>
                            </li>
                        </Link>
                    </div>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;
