'use client'
import Breadcrumb from '@/app/components/breadcrumb';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../../sass/dashboard/create_blog.scss';

const Page = () => {
    return (
        <>
            <div className="create_blog">
                <Breadcrumb name={'Create Blog'} />
                <div className="create_blog_view">
                    <Form>
                        <div className="inner_form">
                            <Form.Group className='form-group' controlId='createText'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type='text' placeholder='Ex. William Jones' />
                            </Form.Group>
                            <Form.Group className='form-group' controlId='createDesc'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as='textarea' placeholder='Ex. 70931Senger Forge' rows={10} />
                            </Form.Group>
                            <Form.Group className='form-group' controlId='chooseFile'>
                                <Form.Label>Upload file</Form.Label>
                                <Form.Control type='file' placeholder='No File Choosen' rows={10} />
                            </Form.Group>
                        </div>
                        <div className="btn_area">
                            <Button className='btn-primary' type='reset' >Cancel</Button>
                            <Button className='btn-primary' type='submit'>Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Page