import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const PortDate = ({ initialDate, label, field, form: { touched, errors } }) => {
  const [startDate, setStartDate] = useState(new Date(initialDate))
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div className="input-group">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          // endDate={endDate}
        />
        {touched[field.name] && errors[field.name] && (
          <div className="error">{errors[field.name]}</div>
        )}
      </div>
    </Form.Group>

    //  <DatePicker
    //   selected={endDate}
    //   onChange={date => setEndDate(date)}
    //   selectsEnd
    //   startDate={startDate}
    //   endDate={endDate}
    //   minDate={startDate}
    // />
  )
}
export default PortDate
