'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../sass/pages/header.scss';
import { faArrowRightFromBracket, faBars, faGear, faHouse, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import goku from '@/app/images/goku.jpg';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        setToggle(false)
    }, [pathname])

    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [toggle])


    const Links = [
        { name: 'Home', link: '/home' },
        { name: 'About Us', link: '/about_us' },
        { name: 'Blogs', link: '/blogs' },
        { name: 'Contact Us', link: '/contact_us' },
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/sign_up' },
        { name: 'Profile', link: '/dashboard/profile' },
        { name: 'Create Blogs', link: '/dashboard/create_blog' },
        { name: 'Blogs', link: '/dashboard/transactions' },
        { name: 'My Wishlist', link: '/dashboard/wishlist' },
        { name: 'Change Password', link: '/dashboard/change_password' },
        { name: 'Logout', link: '/dashboard/home' },
    ];

    const btns = [
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/sign_up' }
    ];



    return (
        /* ----------  Header Start  -----------*/
        <>
            <section className="header">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_header">
                                <div className="header_left">
                                    <div className="inner_left">
                                        <div className="logo">
                                            <Image src={logo} alt='logo' title='...' priority={true} loading='eager' />
                                        </div>
                                    </div>
                                    <div className="inner_right">
                                        <ul>
                                            {
                                                Links.map((item, index) => {
                                                    if (index < 4) {
                                                        return <li key={index}>
                                                            <Link href={item.link}
                                                                className={`link ${pathname === item.link ? 'active' : ''}`}
                                                                prefetch
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    }
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="header_right">
                                    <div className="menu_bar d-block d-md-none" onClick={() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></div>
                                    <ul className="btns">
                                        {
                                            btns.map((btn, index) => (
                                                <li key={index}>
                                                    <Link href={btn.link}
                                                        className={`btn-primary ${btn.link === '/sign_up' ? 'active' : ''}`}
                                                        prefetch
                                                    >
                                                        {btn.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    {/* user after login starts */}

                                    {/* <div className="login_user d-md-block d-none">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <div className="user_image">
                                                    <Image src={goku} alt='user' title='...' priority={false} />
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <ul>
                                                    <li><span><FontAwesomeIcon icon={faHouse} /></span>My Account</li>
                                                    <li><span><FontAwesomeIcon icon={faGear} /></span>Setting</li>
                                                    <li><span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>Logout</li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div> */}

                                    {/* user after login ends */}

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* --------  Mobile Navbar Start  ---------- */}

            <div className={`mobile_nav ${toggle == true ? 'show' : ''}`}>
                <div className="top_area">
                    <div className="logo">
                        <Image src={logo} alt='logo' title='...' priority={true} loading='eager' />
                    </div>
                    <div className="close_icon" onClick={() => setToggle(false)}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                </div>
                <ul>
                    {
                        Links.map((item, index) => {
                            return <li key={index}>
                                <Link href={item.link}
                                    className={`link ${pathname === item.link ? 'active' : ''}`}
                                    prefetch
                                >
                                    {item.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            {/* --------  Mobile Navbar End  ---------- */}

        </>
        /* ----------  Header End  -----------*/

    )
}

export default Header