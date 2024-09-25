import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';


const Sign_up_detail = (props) => {
    return (
        <>
            <h3>Enter your detail</h3>
            <Form>
                <div className="form_field">
                    <div className="name">
                        <Form.Group className="form_group" controlId={'formgroupfname'}>
                            <Form.Label >First name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your first name' />
                        </Form.Group>
                        <Form.Group className="form_group" controlId={'formgrouplname'}>
                            <Form.Label >Last name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your last name' />
                        </Form.Group>
                    </div>
                    <Form.Group className="form_group email" controlId={'formgroupemail'}>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email address' />
                    </Form.Group>
                    <Form.Group className="form_group username" controlId={'formgroupusername'}>
                        <Form.Label >Username</Form.Label>
                        <Form.Control type='text' placeholder='Enter your email address' />
                    </Form.Group>
                    <Form.Group className='form_group radios'>
                        <p>Do you have an existing number to use?</p>
                        {
                            ['Yes', 'No'].map((item, index) => (
                                <Form.Check
                                    type="radio"
                                    name="group1"
                                    id={`radio-${index}`}
                                    label={item}
                                    key={index}
                                />
                            ))
                        }
                    </Form.Group>
                    <Form.Group className="form_group phone" controlId={'formgroupphone'}>
                        <Form.Label >Phone Number</Form.Label>
                        <Form.Control type='tel' placeholder='Enter phone number' />
                    </Form.Group>
                    <Form.Group className='form_group radios'>
                        <p>Do you have a smart phone or device to use?</p>
                        {
                            ['Yes', 'No'].map((item, index) => (
                                <Form.Check
                                    type="radio"
                                    name="group2"
                                    id={`radios-${index}`}
                                    label={item}
                                    key={index}
                                />
                            ))
                        }
                    </Form.Group>
                    <Form.Group className="form_group imei" controlId={'formgroupimei'}>
                        <Form.Label >IMEI number</Form.Label>
                        <p>Dial *#06# on your phone to access IMEI</p>
                        <Form.Control type='text' placeholder='Enter your device IMEI number' />
                    </Form.Group>
                </div>
                <Button className='btn-primary' onClick={() => props.setStep(props.step + 1)} >Continue</Button >
            </Form>
        </>
    )
}

export default Sign_up_detail;