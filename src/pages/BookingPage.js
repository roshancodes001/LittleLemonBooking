import React from 'react'
import BookingForm from '../components/BookingForm'
import ConfirmedBooking from '../components/ConfirmedBooking'
import { useState, useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../components/bookingAPI'
import { useNavigate } from "react-router-dom";
const BookingPage = () => {

//////////////////////////////////////////////////////

  const [date, setDate] = useState(new Date())
 
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }
  
  const [submited, setSubmitted] = useState(false)
  const [data, setData] = useState('')

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      setData(formData)
      setSubmitted(true)
    }
  }


  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
  ////////////////////////////////

  return (
    <>
      {!submited 
        ? <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        : <ConfirmedBooking/>
      }
    </>
  )
}

export default BookingPage

