import Link from 'next/link';
import React from 'react';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Sign_up_adress = (props) => {

    const address = [
        {
            title: 'Service Address'
        },
        {
            title: 'Billing Address'
        }
    ]
    return (
        <div className="lower_area">
            <h3>Enter your address</h3>
            <Form>
                {
                    address.map((item, index) => (
                        <div className="form_field" key={index}>
                            <p>{item.title}</p>
                            <div className="name">
                                <Form.Group className="form_group" controlId={`formgroupfname${index}`}>
                                    <Form.Label >Street</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Street' />
                                </Form.Group>
                                <Form.Group className="form_group" controlId={`formgrouplname${index}`}>
                                    <Form.Label >City</Form.Label>
                                    <Form.Control type='text' placeholder='Enter city' />
                                </Form.Group>
                                <div className="form_group">
                                    <Dropdown>
                                        <p >State</p>
                                        <Dropdown.Toggle variant="success" id={`dropdown-basic${index}`} >
                                            State
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Australia</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">England</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Form.Group className="form_group" controlId={`formgroupzip${index}`}>
                                    <Form.Label >ZIP Code</Form.Label>
                                    <Form.Control type='text' placeholder='Enter ZIP code' />
                                </Form.Group>
                            </div>
                        </div>
                    ))
                }
                {/* <Link href='' onClick={() => props.setStep(props.step - 1)}>Back</Link> */}
                <Link href='' onClick={() => props.setStep(props.step + 1)}>Continue</Link>
            </Form>
        </div>
    )
}

export default Sign_up_adress