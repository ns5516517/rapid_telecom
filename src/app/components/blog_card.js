'use client'
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../sass/pages/card.scss';

const Blog_card = ({ src, manage_item, desc, date, title, toggle, index, heart }) => {

    const router = useRouter()

    return (
        <div className="blog_item card_item wishlist_card_item">
            <div className="blog_image">
                <Image src={src} alt='blog_1' title='...' priority={false} loading='lazy' />
            </div>
            <div className="blog_content"  >
                <div className="date">{date}</div>
                <h4>{title}</h4>
                <p>{manage_item ? desc.concat('Anything else') : desc}</p>
                <Link className='link' href='/blog_detail' prefetch >Read More <span><FontAwesomeIcon icon={freeSolidSvgIcons.faArrowRight} /></span></Link>
                {/* <Link className='link' onClick={() => toggle(index)} >Read More <span><FontAwesomeIcon icon={freeSolidSvgIcons.faArrowRight} /></span></Link> */}
            </div>
            {heart &&
                <div className="heart">{heart}</div>
            }
        </div>
    )
}

export default Blog_card;