'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dropdown, Form, Table } from 'react-bootstrap';
import { faEllipsisVertical, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import '../../../sass/dashboard/transactions.scss';
import Link from 'next/link';

const Page = () => {
  const data = [
    {
      title: "harok256140",
      blogId: "#56123",
      date: "02-12-2021",
      status: "Paid",
      action: <FontAwesomeIcon icon={faEllipsisVertical} />
    },
    {
      title: "harok256140",
      blogId: "#56123",
      date: "02-12-2021",
      status: "Paid",
      action: <FontAwesomeIcon icon={faEllipsisVertical} />
    },
    {
      title: "harok256140",
      blogId: "#56123",
      date: "02-12-2021",
      status: "Failed",
      action: <FontAwesomeIcon icon={faEllipsisVertical} />
    },
    {
      title: "harok256140",
      blogId: "#56123",
      date: "02-12-2021",
      status: "Paid",
      action: <FontAwesomeIcon icon={faEllipsisVertical} />
    },
    {
      title: "harok256140",
      blogId: "#56123",
      date: "02-12-2021",
      status: "Paid",
      action: <FontAwesomeIcon icon={faEllipsisVertical} />
    }
  ];
  return (
    <>
      <div className="transactions">
        <div className="upper_area">
          <div className="left">
            <h3>Blogs</h3>
          </div>
          <div className="right">
            <div className="filter">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FontAwesomeIcon icon={faFilter} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Form>
                    <div className="inner_form">
                      <Form.Group className='form_group'>
                        <Form.Label>Created On</Form.Label>
                        <div className="input_field">
                          <Form.Control type='date' placeholder='Enter start date' />
                          <Form.Control type='date' placeholder='Enter end date' />
                        </div>
                      </Form.Group>
                      <Form.Group className='form_group radios'>
                        <Form.Check type='radio' label='Active' name='date' id='active' />
                        <Form.Check type='radio' label='Expired' name='date' id='expired' />
                      </Form.Group>
                    </div>
                    <div className="btn_area">
                      <Button type='reset' className='btn-primary' >Reset All</Button>
                      <Button type='submit' className='btn-primary' >Submit</Button>
                    </div>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="lower_area">
          <div className="table_area">
            <Table responsive>
              <thead>
                <tr>
                  <th><span><FontAwesomeIcon icon={faSort} /></span>Title</th>
                  <th><span><FontAwesomeIcon icon={faSort} /></span>Blog id</th>
                  <th><span><FontAwesomeIcon icon={faSort} /></span>Date</th>
                  <th><span><FontAwesomeIcon icon={faSort} /></span>Status</th>
                  <th><span><FontAwesomeIcon icon={faSort} /></span>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((ele, i) => (
                    <tr key={i}>
                      <td>{ele.title}</td>
                      <td>{ele.blogId}</td>
                      <td>{ele.date}</td>
                      <td className={ele.status == 'Failed' ? 'diactivate' : ''}>{ele.status}</td>
                      <td className='action'>
                        <Dropdown>
                          <Dropdown.Toggle id="blog">
                            {ele.action}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ul>
                              <li><Link href={' '}>View Blog</Link></li>
                              <li><Link href={' '}>Edit Blog</Link></li>
                              <li><Link href={' '}>Delete Blog</Link></li>
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page