'use client'
import Title from '@/app/components/title';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../sass/pages/blogs_slider.scss';
import '../../sass/pages/contact.scss';
import { faAt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Select from 'react-select'
import axios from 'axios';
import Animation from '@/app/components/animation';

const Page = () => {

    const address = [
        { src: <FontAwesomeIcon icon={faLocationDot} />, desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut accusantium eaque non fugiat omnis.' },
        {
            src: <FontAwesomeIcon icon={faPhone} />, desc: '+123 456 789 0'
        },
        { src: <FontAwesomeIcon icon={faAt} />, desc: 'info@samplemail.com' }
    ];

    const [isMounted, setIsMounted] = useState(false);// just to remove a warning from react-select bcs the id on server and client isn't matched


    const social = [
        { src: <FontAwesomeIcon icon={faFacebookF} />, link: 'https://www.facebook.com/' },
        { src: <FontAwesomeIcon icon={faTwitter} />, link: 'https://x.com/?lang=en' },
        { src: <FontAwesomeIcon icon={faInstagram} />, link: 'https://www.instagram.com/' }
    ];

    const city = [
        { value: 'india', label: 'india' },
        { value: 'australia', label: 'australia' },
        { value: 'england', label: 'england' }
    ];

    const subject = [
        { value: 'telecom', label: 'telecom' },
        { value: 'lorem', label: 'lorem' },
        { value: 'lorem', label: 'lorem' }
    ];

    const [form_value, setForm_value] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phonenumber: '',
        city: '',
        zip: '',
        subject: '',
        message: ''
    })

    const [err, setErr] = useState({})

    useEffect(() => setIsMounted(true), []);

    // contact us
    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = ValidateForm()
        if (isValid) {
            const res = await axios.post('http://192.168.1.43:8000/contact-us', form_value)
            console.log(res.data)
            if (!res.data.status) {
                let errData = res.data.error
                setErr(errData)
                console.log(err)
            }
        }
        else {
            console.log('Validation Failed')
        }
        // router.push(`/home?`)
    }

    const ValidateForm = () => {
        const phoneRegexp = new RegExp('^[7-9][0-9]{9}$')
        const emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
        const isPhoneValid = form_value.phonenumber !== '' && !isNaN(form_value.phonenumber) && phoneRegexp.test(form_value.phonenumber)
        const isEmailValid = form_value.email !== '' && emailRegExp.test(form_value.email)
        return isEmailValid && isPhoneValid
    }

    const handleChange = (field, value) => {
        setForm_value({ ...form_value, [field]: value })
        setErr({ ...err, [field]: '' })
    }


    return (
        <>
            <Animation>
                <section className="contact_us blogs_slider about_page">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <div className="parent_contact_us parent_blogs_slider">
                                    <Title title={'CONTACT US'} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="contact_area cms">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                                <div className="parent_contact_area">
                                    <div className="left">
                                        <div className="upper_area">
                                            <div className="heading">Get in touch</div>
                                            <div className="desc">Fill up the form and our team will get back to you within 24 hours!</div>
                                            <ul className="address">
                                                {
                                                    address.map((item, index) => (
                                                        <li key={index}>
                                                            <span>
                                                                {item.src}
                                                            </span>
                                                            <Link href={' '} >
                                                                {item.desc}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <ul className="social">
                                                {
                                                    social.map((ele, i) => (
                                                        <li key={i}>
                                                            <Link
                                                                href={ele.link}
                                                                target='_blank'
                                                                prefetch>
                                                                {ele.src}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="lower_area">
                                            <div className="contact_time">
                                                <p>Monday - Friday: 9am - 5pm</p>
                                                <p className='right_p'>Saturday - Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <Form className='form' onSubmit={handleSubmit}>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" controlId='fname'>
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type='text'
                                                            placeholder='Enter your first name'
                                                            onChange={(e) => handleChange('first_name', e.target.value)}
                                                        />
                                                        <p className='text-danger'>{err.first_name}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" controlId='lname'>
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type='text'
                                                            placeholder='Enter your last name'
                                                            onChange={(e) => handleChange('last_name', e.target.value)}
                                                        />
                                                        <p className='text-danger'>{err.last_name}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" controlId='email' >
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            type='email'
                                                            placeholder='Enter your email'
                                                            autoComplete='email'
                                                            onChange={(e) => handleChange('email', e.target.value)}
                                                        />
                                                        <p className='text-danger'>{err.email}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" controlId='phone' >
                                                        <Form.Label>Phone number</Form.Label>
                                                        <Form.Control
                                                            type='tel'
                                                            placeholder='Enter your phone no.'
                                                            autoComplete='mobile tel-local'
                                                            onChange={(e) => handleChange('phonenumber', e.target.value)}
                                                        // onKeyDown={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                                                        />
                                                        <p className='text-danger'>{err.phonenumber}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" >
                                                        <Form.Label>City</Form.Label>
                                                        {
                                                            isMounted &&
                                                            <Select className='form-control'
                                                                classNamePrefix='select'
                                                                options={city}
                                                                placeholder='Enter City'
                                                                onChange={(e) => handleChange('city', e.value)}
                                                            />
                                                        }
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field" controlId='zip'>
                                                        <Form.Label>ZIP Code</Form.Label>
                                                        <Form.Control
                                                            type='text'
                                                            onChange={(e) => handleChange('zip', e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field">
                                                        <Form.Label>Subject</Form.Label>
                                                        {
                                                            isMounted &&
                                                            <Select className='form-control'
                                                                classNamePrefix='select'
                                                                options={subject}
                                                                placeholder='Choose Subject'
                                                                onChange={(e) => handleChange('subject', e.value)}
                                                            />
                                                        }
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form_field message" controlId='message'>
                                                        <Form.Label>Message</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            rows={7}
                                                            placeholder='Write Your Message'
                                                            onChange={(e) => handleChange('message', e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="submit_btn">
                                                <Button className='btn-primary' type='submit'>Submit</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Animation>
        </>
    )
}

export default Page