'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Breadcrumb from '@/app/components/breadcrumb';
import '../../../sass/dashboard/profile.scss';
import { useParams } from 'next/navigation';
import axios from 'axios';


const Page = () => {
    const { token } = useParams()
    const [data, setData] = useState({})

    async function GetData() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        try {
            const res = await axios.get('http://159.65.150.47:4000/users/profile', config)
            console.log(res)
            if (res.data.status) {
                setData(res.data.data)
            } else {
                
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        GetData()
    }, [])


    return (
        <>
            <div className="profile">
                <Breadcrumb name={'Profile'} view={'Profile View'} icon={<FontAwesomeIcon icon={faUser} />} />
                <div className="profile_view " >
                    <div className="user_panel">
                        <div className="user_left_area">
                            <div className="user_field">
                                <div className="title">Representative Name</div>
                                <div className="desc">{`${data.first_name} ${data.last_name}`}</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Organization Name</div>
                                <div className="desc">William Drug Store</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Role in the Organization</div>
                                <div className="desc">William Drug Store</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Email Id</div>
                                <div className="desc">{data.email}</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Contact Number</div>
                                <div className="desc">{data.phonenumber}</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Gender</div>
                                <div className="desc">male</div>
                            </div>
                            <div className="user_field">
                                <div className="title">Address</div>
                                <div className="desc">{data.address}</div>
                            </div>
                        </div>
                        <div className="user_right_area">
                            <Link className='edit_btn' href={`/dashboard/${token}/edit_profile`} prefetch>Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page