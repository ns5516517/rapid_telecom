'use client'
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../sass/pages/blogs_slider.scss';
import user from '../images/reviewer_img1.png';
import Title from '../components/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


const Page = () => {

    const [rating_data, setRating_data] = useState([
        { rating: 3, src: user, name: 'Sanjay Ahmed', date: 'Reviewed on 19 Feb, 2024', feedback: 'Excellent Service', desc: 'Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.' },
        { rating: 4, src: user, name: 'Sanjay Ahmed', date: 'Reviewed on 19 Feb, 2024', feedback: 'Excellent Service', desc: 'Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.' },
        { rating: 1, src: user, name: 'Sanjay Ahmed', date: 'Reviewed on 19 Feb, 2024', feedback: 'Excellent Service', desc: 'Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.' },
        { rating: 2, src: user, name: 'Sanjay Ahmed', date: 'Reviewed on 19 Feb, 2024', feedback: 'Excellent Service', desc: 'Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.' },
        { rating: 5, src: user, name: 'Sanjay Ahmed', date: 'Reviewed on 19 Feb, 2024', feedback: 'Excellent Service', desc: 'Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.' }
    ])

    const service = ['Not Good', 'Poor Service', ' Good Service', 'Excellent Service', 'Very Excellent Service']


    // const searchparams = useSearchParams();

    // const desc = searchparams.get('desc');
    // const rating = searchparams.get('rating');
    // useEffect(() => {

    //     console.log(desc, rating)

    //     const newData = {
    //         rating: rating,
    //         src: user,
    //         name: 'Sanjay Ahmed',
    //         feedback: '',
    //         desc: desc
    //     }
    //     console.log(newData)

    //     let updateData = [...rating_data, newData]

    //     console.log(updateData)

    //     setRating_data(updateData)
    // }, [])



    return (
        <>
            <section className="rating_list all_blogs blogs_slider">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="parent_rating_list parent_all_blogs parent_blogs_slider">
                                <Title title={'Rating & Review'} />
                                <div className="rating_area">
                                    {
                                        rating_data.map((item, index) => {

                                            // return <User_rating key={index} src={item.src} date={item.date} desc={item.desc ? item.desc : desc} feedback={item.feedback} name={item.name} rating={item.rating ? item.rating : rating} />
                                            return (
                                                <div className="rating" key={index}>
                                                    <div className="top_area">
                                                        <div className="user">
                                                            <div className="left">
                                                                <div className="user_image">
                                                                    <Image src={item.src} alt='user' title='...' priority={false} />
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="user_name">{item.name}</div>
                                                                <ul>
                                                                    {[...Array(5)].map((_, ind) => {
                                                                        const givenRating = ind + 1
                                                                        return <li key={ind} className={givenRating <= item.rating ? 'active' : ''}><FontAwesomeIcon icon={faStar} /></li>
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="date">{item.date}</div>
                                                    </div>
                                                    <div className="bottom_area">
                                                        {service.map((service, i) => {
                                                            const newRating = i + 1
                                                            return <div className={`${item.rating == newRating && 'feedback'} ${item.rating <= 2 && 'red'} ${item.rating == 3 && 'yellow'} ${item.rating >= 4 && 'green'} `
                                                            } key={i} > {item.rating == newRating && service}</div>
                                                        })}
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </div >
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Page