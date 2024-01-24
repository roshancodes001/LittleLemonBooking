import React from 'react'
import { useState } from "react"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const BookingForm = (props) => {

  let formData_ = ''

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    formData_ = payload

    props.submitForm(payload)
  }


  return (
    <section id="form">
      <h2>Reserve a table</h2>
      <Form onSubmit={submitForm}>
        
        <Row className="mb-3">
          <Form.Group as={Col} lg={4}>
            <Form.Label htmlFor="res-firstName">First name</Form.Label>
            <Form.Control type="text" id="res-first-name" placeholder="First name" name='firstName' required />
          </Form.Group>

          <Form.Group as={Col} lg={4}>
            <Form.Label htmlFor="res-lastName">Last name</Form.Label>
            <Form.Control type="text" id="res-last-name" placeholder="Last name" name='lastName' required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label htmlFor="res-email">Email</Form.Label>
            <Form.Control type="email" id="res-date" name='email' placeholder="Email" required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} sm={6}>
            <Form.Label htmlFor="res-date">Date</Form.Label>
            <Form.Control type="date" id="res-date" name='date' required />
          </Form.Group>

          <Form.Group as={Col} sm={6}>
            <Form.Label htmlFor="res-time">Time</Form.Label>
            <Form.Select id="res-time" name='time'>
              {props.availableTimes.map((times) =>
                <option key={times}>{times}</option>
              )}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} sm={6}>
            <Form.Label htmlFor="guests">Number of guests</Form.Label>
            <Form.Control type="number" placeholder="1" min="1" max="10" id="guests" name='guests' defaultValue={1} />
          </Form.Group>

          <Form.Group as={Col} sm={6}>
            <Form.Label htmlFor="occasion">Occasion</Form.Label>
            <Form.Select id="occasion" name='occasion'>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Form.Select>
          </Form.Group>
        </Row>
        
        <Button type="submit">Submit</Button>
      </Form>
      
    </section>
  )
}

export default BookingForm
