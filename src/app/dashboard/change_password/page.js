'use client'
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../sass/dashboard/change_password.scss';

const Page = () => {
    return (
        <>
            <div className="change_password">
                <div className="upper">
                    <h3>Change password</h3>
                </div>
                <div className="lower">
                    <Form>
                        <div className="inner_form">
                            <Form.Group controlId='old_pass' className='form_group'>
                                <Form.Label>Old password</Form.Label>
                                <Form.Control type='password' placeholder='Enter Your Password'/>
                            </Form.Group>
                            <Form.Group controlId='new_pass' className='form_group'>
                                <Form.Label>New password</Form.Label>
                                <Form.Control type='password' placeholder='Enter New Password'/>
                            </Form.Group>
                            <Form.Group controlId='confirm_pass' className='form_group'>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type='password' placeholder='Confirm New Password'/>
                            </Form.Group>
                        </div>
                        <Button type='submit' className='change_btn'>Change Password</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Page