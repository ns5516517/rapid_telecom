'use client'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../sass/dashboard/profile.scss';
import Breadcrumb from '@/app/components/breadcrumb';
import Image from 'next/image';
import { Button, Col, Form, Row } from 'react-bootstrap';
import goku from '@/app/images/goku.jpg';
import { useRouter } from 'next/navigation';



const Page = () => {
    const router = useRouter();
    return (
        <>
            <div className="profile">
                <Breadcrumb name={'Profile'} view={'Profile View'} icon={<FontAwesomeIcon icon={faUser} />} />
                <div className="edit_profile_view profile_view">
                    <div className="user_edit_panel">
                        <div className="edit_image_area">
                            <div className="image">
                                <div className="user_image">
                                    <Image src={goku} alt='goku' title='...' priority={false} />
                                </div>
                                <Form className='form'>
                                    <Form.Group controlId='user_image' className='form-group'>
                                        <Form.Label><FontAwesomeIcon icon={faPen} /></Form.Label>
                                        <Form.Control type='file' hidden />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div className="edit_field_area">
                            <Form className='form_main' onSubmit={(e) => e.preventDefault()}>
                                <div className="inner_form">
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='fname'>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: Jack Joseph' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='lname'>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: Victoria' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='orgname'>
                                                <Form.Label>Organization Name</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: William Drug Store' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='role'>
                                                <Form.Label>Role in the Organization</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: William Henna' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='representative'>
                                                <Form.Label>Representative Name</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: 12 Jun , 2023' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <Form.Group className='form-group' controlId='contact'>
                                                <Form.Label>Contact Number</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: +91 123 456 789 0' />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Group className='form-group message' controlId='address'>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type='text' placeholder='Eg: UAE' />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="edit_btn_area">
                                    <Button type='reset' className='btn-primary' onClick={() => router.back()}>Cancel</Button>
                                    <Button type='submit' className='btn-primary' onClick={() => router.push('/dashboard/profile')}>Save Changes</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page