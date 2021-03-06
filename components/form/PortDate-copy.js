import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { FormGroup, Label, Button } from 'react-bootstrap'

export default class PortDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateValue: new Date(props.initialDate),
      // dateValue: new Date(),
    }
    // console.log(moment(props.initialDate))
  }

  handleChange = (date) => {
    // debugger;
    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field

    this.setState({
      dateValue: date,
    })

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true)
  }

  render() {
    const {
      label,
      field,
      form: { touched, errors },
    } = this.props

    console.log(this.props)

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          <DatePicker
            selected={this.state.dateValue}
            onChange={this.handleChange}
            peekNextMounth
            showMonthDropdown
            showYearDropdown
            maxDate={moment()}
            dropdownMode="select"
          />
          {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
        </div>
      </FormGroup>
    )
  }
}
