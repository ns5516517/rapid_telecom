'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import profile from '../../images/goku.jpg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBlog, faHeart, faLock, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Button, Toast } from 'react-bootstrap';
import Animation from '../../components/animation';
import axios from 'axios';
import '../../sass/dashboard/dashboard.scss';

const Dashboard_Layout = ({ children }) => {

    const { token } = useParams();
    const router = useRouter();
    const links = [
        { name: "Profile", link: `/dashboard/${token}/profile`, icon: <FontAwesomeIcon icon={faUser} /> },
        { name: "Create Blog", link: `/dashboard/${token}/create_blog`, icon: <FontAwesomeIcon icon={faSquarePlus} /> },
        { name: "Blogs", link: `/dashboard/${token}/transactions`, icon: <FontAwesomeIcon icon={faBlog} /> },
        { name: "My Wishlist", link: `/dashboard/${token}/wishlist`, icon: <FontAwesomeIcon icon={faHeart} /> },
        { name: "Change Password", link: `/dashboard/${token}/change_password`, icon: <FontAwesomeIcon icon={faLock} /> }
    ];
    const [res, setRes] = useState({ status: undefined, message: '' })

    const pathname = usePathname();

    async function Logout() {
        try {
            const res = await axios.post(`http://159.65.150.47:4000/auth/logout/`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data)
            if (res.data.status) {
                router.replace('/home')
            }
            else {
                setRes({ ...res, status: res.data.status, message: res.data.message })
            }
        } catch (error) {
            setRes({ ...res, status: true, message: error.message })
        }
    }

    useEffect(() => {
        if (res.status !== undefined) {
            setTimeout(() => {
                setRes({ ...res, status: undefined })
            }, 1500)
        }
    }, [res])

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
                                                className={`side_tabs ${pathname === ele.link ? 'active' : ''}`}
                                                prefetch
                                            >
                                                <span>{ele.icon}</span>
                                                {ele.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li>
                                    <Button type='button' onClick={Logout} className='side_tabs'>
                                        <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>  Logout
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_dash">
                        <Animation key={pathname}>
                            {children}
                        </Animation>
                    </div>
                </div>
                {
                    <Toast show={res.status !== undefined} delay={1500} autohide>
                        <Toast.Body>{res.message}</Toast.Body>
                    </Toast>
                }
            </section>
        </>
    )
}

export default Dashboard_Layout