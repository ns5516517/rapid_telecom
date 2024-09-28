import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog_card from './blog_card';
import blog_2 from '../images/blog_2.png';
import blog_3 from '../images/blog_1.png';
import blog_4 from '../images/blog_4.png';
import '../sass/pages/related.scss';
import Title from './title';
import axios from 'axios';

const Related_posts = () => {
    const [related, setRelated] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://192.168.1.43:8000/blogs");
                if (res.status) {
                    const data = res.data.data.rows;
                    setRelated(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

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
                                        related.map((item, index) => (
                                            <Blog_card src={item.src} desc={item.description} date={item.created_at} title={item.title} key={item.id} />
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