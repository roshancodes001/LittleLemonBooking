import React from 'react'
import { CheckCircleIcon, CircleIcon  } from '@chakra-ui/icons'

const ConfirmedBooking = (props) => {

  console.log(props)
  return (
    <section id="confirmation">

      <div className='confirm-title'>
        <h2>Reservation Confirmed</h2>
        <CheckCircleIcon w={40} h={40} color='green' verticalAlign='top' />
      </div> 

      <div className='display-message'>
        <p>We look forward to see you !</p>
      </div>

    </section>
  )
}

export default ConfirmedBooking