'use client'
import Image from 'next/image';
import React from 'react';
import profile from '../images/goku.jpg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBlog, faHeart, faLock, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import '../sass/dashboard/dashboard.scss';
import { usePathname } from 'next/navigation';

const Dashboard_Layout = ({ children }) => {

    const links = [
        { name: "Profile", link: '/dashboard/profile', icon: <FontAwesomeIcon icon={faUser} /> },
        { name: "Create Blog", link: '/dashboard/create_blog', icon: <FontAwesomeIcon icon={faSquarePlus} /> },
        { name: "Blogs", link: '/dashboard/transactions', icon: <FontAwesomeIcon icon={faBlog} /> },
        { name: "My Wishlist", link: '/dashboard/wishlist', icon: <FontAwesomeIcon icon={faHeart} /> },
        { name: "Change Password", link: '/dashboard/change_password', icon: <FontAwesomeIcon icon={faLock} /> },
        { name: "Logout", link: '/', icon: <FontAwesomeIcon icon={faArrowRightFromBracket} /> },
    ];

    const pathname = usePathname();

    return (
        <>
            <section className="dashboard">
                <div className="parent_dashboard">
                    <div className="sidebar">
                        <div className="upper_area">
                            <div className="outer_area">
                                <div className="profile_pic">
                                    <Image src={profile} alt='user' title='...' priority={false} />
                                </div>
                            </div>
                            <p>Dianne Jane</p>
                        </div>
                        <div className="lower_area">
                            <ul>
                                {
                                    links.map((ele, index) => (
                                        <li key={index}>
                                            <Link
                                                href={ele.link}
                                                className={pathname === ele.link ? 'active' : ''}
                                                prefetch>
                                                <span>{ele.icon}</span>
                                                {ele.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="right_dash">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard_Layout