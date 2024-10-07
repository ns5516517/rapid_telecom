'use client'
import React, { useEffect, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import '../../../sass/dashboard/change_password.scss';
import axios from 'axios';
import { useParams } from 'next/navigation';

const Page = () => {

    const { token } = useParams();
    const [password, setPassword] = useState({});
    const [response, setResponse] = useState({ status: undefined, message: '' })

    const handleChange = (field, value) => {
        setPassword({ ...password, [field]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const res = await axios.put('http://159.65.150.47:4000/users/change-password', password, config)
            console.log(res)
            if (res.data.status) {
                setResponse({ status: res.data.status, message: res.data.message })
            }
            else {
                setResponse({ status: res.data.status, message: res.data.message })
            }
        } catch (error) {
            setResponse({status: error.status, message:error.message})
        }
    }

    useEffect(() => {
        if (response.status !== undefined) {
            setResponse({ status: undefined, message: '' })
        }
    }, [response])

    return (
        <>
            <div className="change_password">
                <div className="upper">
                    <h3>Change password</h3>
                </div>
                <div className="lower">
                    <Form onSubmit={handleSubmit}>
                        <div className="inner_form">
                            <Form.Group controlId='old_pass' className='form_group'>
                                <Form.Label>Old password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Your Password'
                                    onChange={(e) => handleChange('old_password', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId='new_pass' className='form_group'>
                                <Form.Label>New password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter New Password'
                                    onChange={(e) => handleChange('new_password', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId='confirm_pass' className='form_group'>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm New Password'
                                    onChange={(e) => handleChange('confirm_password', e.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <Button type='submit' className='change_btn'>Change Password</Button>
                    </Form>
                </div>
                {
                    <Toast show={response.status !== undefined} delay={1500} autohide>
                        <Toast.Body>{response.message}</Toast.Body>
                    </Toast>
                }
            </div>
        </>
    )
}

export default Page