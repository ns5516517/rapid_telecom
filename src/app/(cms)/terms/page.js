import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../sass/pages/blogs_slider.scss';
import '../../sass/pages/contact.scss';
import Title from '@/app/components/title';
const Page = () => {
    return (
        <>
            <section className="contact_us blogs_slider about_page">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div className="parent_contact_us parent_blogs_slider">
                                <Title title={'Terms and Conditions'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="terms cms ">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_terms ">
                                <div className=" terms_head" >
                                    <h3>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
                                </div>
                                <div className="terms_head" >
                                    <h2>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
                                </div>
                                <div className="terms_head" >
                                    <h1>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
                                </div>
                                <div className="terms_head" >
                                    <h4>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
                                </div>
                                <div className="terms_head" >
                                    <h5>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
                                </div>
                                <div className="terms_head" >
                                    <h6>Nullam interdum lorem ipsum sit dor aliquam lobortis dolor</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit quam non eleifend ornare. Nullam porta volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam lorem lacus, ac molestie sapien sagittis eget. Cras eget elementum ligula. Donec efficitur quam ut tortor pretium molestie. Fusce velit purus, cursus at risus non, laoreet tempus diam. Fusce vitae pretium lacus, ac malesuada nisi.</p>
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