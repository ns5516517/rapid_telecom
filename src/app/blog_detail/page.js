'use client'
import { faArrowLeft, faArrowRight, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import blog_detail from '../images/blog_detail.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation';
import '../sass/pages/blog_detail.scss';
import Related_posts from '../components/related_posts';
import axios from 'axios';
import Title from '../components/title';

const Page = () => {

    const [show, setShow] = useState(false);

    const [active, setActive] = useState(-1)

    const [review_data, setReview_data] = useState({
        title: '',
        desc: '',
        ratings: ''
    })

    const router = useRouter();

    const data = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
        ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        'Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    ]

    const new_post_data = [
        'Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit con sectetur elit.', 'Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit con sectetur elit.', 'Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit con sectetur elit.', 'Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit con sectetur elit.'
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        // const response = await axios.post('/rating_list', review_data)
        // console.log(response.data)
        // if(response.status) {
        //     router.push(`/rating_list?data = ${review_data.desc}`)
        // }
        router.push(`/rating_list?desc=${review_data.desc}&rating=${review_data.ratings}`)

    }


    return (
        <>
            <section className="blog_detail">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_blog_detail">
                                <Row className='row-gap-2'>
                                    <Col xxl={8} xl={8} lg={7} md={7} sm={12} xs={12}>
                                        <div className="left">
                                            <div className="back">
                                                <Breadcrumb>
                                                    <Breadcrumb.Item href='/blogs' >
                                                        <span><FontAwesomeIcon icon={faArrowLeft} /></span> Blogs
                                                    </Breadcrumb.Item>
                                                </Breadcrumb>
                                            </div>
                                            <h3>Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit. Nullam maximus</h3>
                                            <div className='date'>Sat, November 05</div>
                                            <div className="blog_image">
                                                <Image src={blog_detail} alt='blog_detail' title='...' priority={false} />
                                            </div>
                                            <div className="content_box">
                                                {data.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={5} md={5} sm={12} xs={12}>
                                        <div className="right">
                                            <h4>New Posts</h4>
                                            <ul>
                                                {
                                                    new_post_data.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                            <Button variant="primary" onClick={() => setShow(true)}>
                                                Rate & Review
                                            </Button>
                                            <Modal show={show}  >
                                                <Modal.Header onClick={() => setShow(false)}><FontAwesomeIcon icon={faXmark} /></Modal.Header>
                                                <Modal.Body>
                                                    <div className="form_area">
                                                        <Title title={'Write a Review'} />
                                                        <Form onSubmit={handleSubmit} >
                                                            <div className="form">
                                                                <Form.Group className='form-group' >
                                                                    <Form.Label>How would you rate it ?</Form.Label>
                                                                    <ul className="rating_area">
                                                                        {
                                                                            [...Array(5)].map((_, index) => {
                                                                                const givenRating = index + 1
                                                                                return <li key={index}
                                                                                    className={givenRating < active || givenRating == active ? 'active' : ''}
                                                                                    onClick={() => {
                                                                                        setActive(givenRating);
                                                                                        setReview_data({ ...review_data, ratings: givenRating })
                                                                                    }}
                                                                                >
                                                                                    <FontAwesomeIcon icon={faStar} />
                                                                                </li>
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </Form.Group>
                                                                <Form.Group className='form-group' controlId='title'>
                                                                    <Form.Label>Title your Review</Form.Label>
                                                                    <Form.Control type='text' onChange={(e) => setReview_data({ ...review_data, title: e.target.value })} />
                                                                </Form.Group>
                                                                <Form.Group className='form-group' controlId='textarea'>
                                                                    <Form.Label>Title your Review</Form.Label>
                                                                    <Form.Control as={'textarea'} rows={8} onChange={(e) => setReview_data({ ...review_data, desc: e.target.value })} />
                                                                </Form.Group>
                                                            </div>
                                                            <div className="modal_footer">
                                                                <Button type='submit' variant="primary" onClick={() => { setShow(false) }} >
                                                                    Submit
                                                                </Button>
                                                                <Button type='reset' variant="primary" onClick={() => setShow(false)}>
                                                                    Cancel
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Related_posts />
        </>
    )
}

export default Page