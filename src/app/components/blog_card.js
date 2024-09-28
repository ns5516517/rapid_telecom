'use client'
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import goku from '../images/goku.jpg';
import '../sass/pages/card.scss';

const Blog_card = ({ src, desc, date, title, heart }) => {

    return (
        <div className="blog_item card_item wishlist_card_item">
            <div className="blog_image">
                <Image src={goku} alt='blog_1' title='...' priority={false}  />
            </div>
            <div className="blog_content"  >
                <div className="date">{new Date(date).toDateString()}</div>
                <h4>{title}</h4>
                <div className='detail' dangerouslySetInnerHTML={{__html: desc.slice(0, 150).concat('...')}}></div>
                <Link className='link' href='/blog_detail' prefetch >Read More <span><FontAwesomeIcon icon={freeSolidSvgIcons.faArrowRight} /></span></Link>
            </div>
            {heart &&
                <div className="heart">{heart}</div>
            }
        </div>
    )
}

export default Blog_card;