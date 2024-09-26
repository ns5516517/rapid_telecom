import Blog_card from '@/app/components/blog_card'
import Breadcrumb from '@/app/components/breadcrumb'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import blog_1 from '../../images/blog_3.png';
import blog_2 from '../../images/blog_2.png';
import blog_3 from '../../images/blog_1.png';
import blog_4 from '../../images/blog_4.png';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/dashboard/wishlist.scss';

const Page = () => {

    const wishlist_data = [
        { heart:<FontAwesomeIcon icon={faHeart} /> ,src: blog_1, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
        { heart:<FontAwesomeIcon icon={faHeart} /> ,src: blog_2, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
        { heart:<FontAwesomeIcon icon={faHeart} /> ,src: blog_3, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false },
        { heart:<FontAwesomeIcon icon={faHeart} /> ,src: blog_4, blog_date: 'November 18, 2021', blog_title: 'Lorem ipsum dolor sit amet consectetur.', blog_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque rem repellat libero aperiam molestiae magni.', manages: false }
    ];

    return (
        <>
            <div className="wishlist">
                <Breadcrumb name={' My Wishlist'} />
                <Row className='row-gap-3'>
                    {
                        wishlist_data.map((ele, i) => (
                            < Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12} key={i}>
                                <div className="wishlist_card">
                                    <Blog_card src={ele.src} date={ele.blog_date} title={ele.blog_title} heart={ele.heart} desc={ele.blog_desc} />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div >
        </>
    )
}

export default Page