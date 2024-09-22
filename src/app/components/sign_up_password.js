import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Sign_up_password = () => {

    const [password, setPassword] = useState([
        { title: 'New Password', icon: <FontAwesomeIcon icon={faEyeSlash} />, icon1: <FontAwesomeIcon icon={faEye} />, toggle: false },
        { title: 'Confirm Password', icon: <FontAwesomeIcon icon={faEyeSlash} />, icon1: <FontAwesomeIcon icon={faEye} />, toggle: false }
    ])

    function handleShow(index) {
        setPassword(password.map((ele, i) =>
            i === index ? { ...ele, toggle: !ele.toggle } : ele
        ));
    }


    return (
        <div className="lower_area">
            <h3>Set your Password</h3>
            <Form>
                <div className="form_field" >
                    <div className="name">
                        {
                            password.map((item, index) => (
                                <Form.Group className="form_group" controlId={`formgrouppass${index}`} key={index}>
                                    <Form.Label >{item.title}</Form.Label>
                                    <div className="input_field">
                                        <Form.Control type={item.toggle ? 'text' : 'password'} placeholder='Enter new password' />
                                        <div className="icon" onClick={() => handleShow(index)}>
                                            {item.toggle ? item.icon1 : item.icon}
                                        </div>
                                    </div>
                                </Form.Group>
                            ))
                        }
                    </div>
                </div >
                {/* <Link href='' onClick={() => props.setStep(props.step - 1)}>Back</Link> */}
                <Link href='/login'>Let&apos;s Go</Link>
            </Form >
        </div >
    )
}

export default Sign_up_password