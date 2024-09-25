import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Breadcrumb from '@/app/components/breadcrumb';
import '../../sass/dashboard/profile.scss';


const Page = () => {
    return (
        <>
           <Breadcrumb name={'Profile'} view={'Profile View'} icon={<FontAwesomeIcon icon={faUser} />}/>
            <div className="profile_view " >
                <div className="user_panel">
                    <div className="user_left_area">
                        <div className="user_field">
                            <div className="title">Representative Name</div>
                            <div className="desc">William Henna</div>
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
                            <div className="desc">jack@mailinator.com</div>
                        </div>
                        <div className="user_field">
                            <div className="title">Contact Number</div>
                            <div className="desc">+1 788-789-7897</div>
                        </div>
                        <div className="user_field">
                            <div className="title">Gender</div>
                            <div className="desc">male</div>
                        </div>
                        <div className="user_field">
                            <div className="title">Address</div>
                            <div className="desc">UAE</div>
                        </div>
                    </div>
                    <div className="user_right_area">
                        <Link className='edit_btn' href={'/dashboard/edit_profile'} prefetch>Edit Profile</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page