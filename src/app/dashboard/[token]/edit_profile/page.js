'use client'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../../../sass/dashboard/profile.scss';
import Breadcrumb from '@/app/components/breadcrumb';
import Image from 'next/image';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';
import goku from '@/app/images/goku.jpg';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import validator from 'validator';


const Page = () => {
    const { token } = useParams();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phonenumber: ''
    });
    const [res, setRes] = useState({
        status: undefined,
        message: ''
    })
    const [err, setErr] = useState({})

    const handleChange = (field, value) => {
        setData({ ...data, [field]: value })
        setErr({ ...err, [field]: '' })
    }


    const handleValidations = () => {
        if (!validator.isEmail(data.email)) {
            setRes({ ...res, status: true, message: 'Please Enter Correct Email' })
            return false
        }
        else if (!validator.isNumeric(data.phonenumber)) {
            setRes({ ...res, status: true, message: 'Please enter numbers only' })
            return false
        }
        return true
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        let is_valid = handleValidations();
        try {
            if (is_valid) {
                const resp = await axios.put('http://159.65.150.47:4000/users/update-profile', data, config)
                console.log(resp)
                if (resp.data.status) {
                    setRes({ ...res, status: resp.data.status, message: resp.data.message })
                    setTimeout(() => {
                        router.push(`/dashboard/${token}/profile`)
                    }, 2000)
                }
                else {
                    setErr(resp.data.message.errors)
                    console.log(err, '*********************')
                }
            }
        } catch (error) {
            setRes({ ...res, status: error.response.data.status, message: error.response.data.message })
        }
    }

    useEffect(() => {
        let timer
        if (res.status !== undefined) {
            timer = setTimeout(() => {
                setRes({ ...res, status: undefined })
            }, 1500);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [res.status])

    const router = useRouter();
    return (
        <>
            <div className="profile">
                <Breadcrumb name={'Profile'} view={'Profile View'} icon={<FontAwesomeIcon icon={faUser} />} />
                <div className="edit_profile_view profile_view">
                    <div className="user_edit_panel">
                        <Form className='form_main' onSubmit={handleSubmit}>
                            <div className="edit_field_area">
                                <div className="inner_form">
                                    <Row>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                                            <div className="edit_image_area">
                                                <div className="image">
                                                    <div className="user_image">
                                                        <Image src={goku} alt='goku' title='...' priority={false} />
                                                    </div>
                                                    <div className="form">
                                                        <Form.Group controlId='user_image' className='form-group'>
                                                            <Form.Label><FontAwesomeIcon icon={faPen} /></Form.Label>
                                                            <Form.Control type='file' hidden
                                                                onChange={(e) => handleChange('image', e.target.value)} />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='fname'>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: Jack Joseph'
                                                    onChange={(e) => handleChange('first_name', e.target.value)}
                                                // required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='lname'>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: Victoria'
                                                    // required
                                                    onChange={(e) => handleChange('last_name', e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='orgname'>
                                                <Form.Label>Organization Name</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: William Drug Store'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='role'>
                                                <Form.Label>Role in the Organization</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: William Henna'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='representative'>
                                                <Form.Label>Representative Email</Form.Label>
                                                <Form.Control
                                                    type='email'
                                                    placeholder='Eg: abc@gmial.com'
                                                    // required
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                />
                                                {err.email && <p className='text-danger'>{err.email}</p>}
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='contact'>
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: +91 123 456 789 0'
                                                    pattern='[0-9]+'
                                                    // required
                                                    onChange={(e) => handleChange('phonenumber', e.target.value)}
                                                />
                                                {err.phonenumber && <p className='text-danger'>{err.phonenumber}</p>}
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Group className='form-group message' controlId='address'>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Eg: UAE'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="edit_btn_area">
                                    <Button type='reset' className='btn-primary' onClick={() => router.back()}>Cancel</Button>
                                    <Button type='submit' className='btn-primary'>Save Changes</Button>
                                </div >
                            </div>
                        </Form>
                    </div>
                </div>
                {
                    < Toast show={res.status !== undefined}  delay={1500} autohide >
                        <Toast.Body>{res.message}</Toast.Body>
                    </Toast >
                }
            </div>
        </>
    )
}

export default Page