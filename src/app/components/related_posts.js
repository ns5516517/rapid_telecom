import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog_card from './blog_card';
import blog_2 from '../images/blog_2.png';
import blog_3 from '../images/blog_1.png';
import blog_4 from '../images/blog_4.png';
import '../sass/pages/related.scss';
import Title from './title';

const Related_posts = () => {
    const blog_data = [
        { src: blog_2, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
        { src: blog_3, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
        { src: blog_4, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false }
    ]
    return (
        <>
            <section className="related">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_related">
                                <Title title={'Related Posts'} />
                                <div className="cards">
                                    {
                                        blog_data.map((item, index) => (
                                            <Blog_card src={item.src} manage_item={item.manages} desc={item.blog_desc} date={item.blog_date} title={item.blog_title} toggle={(index) => toggle(index)} index={index} key={index} />
                                        ))
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

export default Related_posts