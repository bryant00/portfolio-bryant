import React from 'react'
import { withFormik, Form, Field, ErrorMessage, connect } from 'formik'
import { Button, Alert } from 'reactstrap'
import PortInput from '../form/PortInput'
import PortDate from '../form/PortDate'

import moment from 'moment'

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        // value={values.title}
        type="text"
        name="title"
        label="Title"
        component={PortInput}
      />
      <Field type="text" name="company" label="Company" component={PortInput} />
      <Field
        type="text"
        name="location"
        label="Location"
        component={PortInput}
      />
      <Field
        type="text"
        name="position"
        label="Position"
        component={PortInput}
      />
      <Field
        type="textarea"
        name="description"
        label="Description"
        component={PortInput}
      />
      <Field
        type="text"
        name="projectUrl"
        label="Project Url"
        component={PortInput}
      />
      <Field
        type="text"
        name="githubUrl"
        label="Github Url"
        component={PortInput}
      />
      <Field
        type="text"
        name="imageName"
        label="Image Name"
        component={PortInput}
      />
      <Field
        name="startDate"
        label="Start Date"
        initialDate={values.startDate}
        component={PortDate}
      />
      <Field
        name="endDate"
        label="End Date"
        canBeDisabled={true}
        initialDate={values.endDate}
        component={PortDate}
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      {/* {error && <Alert color="danger">{error}</Alert>} */}
      <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  )
}

const PortfolioCreateForm = withFormik({
  mapPropsToValues({ portfolio }) {
    return {
      title: portfolio.title || '',
      company: portfolio.company || '',
      location: portfolio.location || '',
      position: portfolio.position || '',
      description: portfolio.description || '',
      projectUrl: portfolio.projectUrl || '',
      githubUrl: portfolio.githubUrl || '',
      imageName: portfolio.imageName || '',
      startDate: portfolio.startDate || moment(),
      endDate: portfolio.endDate || moment(),
    }
  },
  // Custom sync validation
  validate: (values) => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'BasicForm',
})(MyForm)

// const mapStateToProps = (state) => ({
//   portfolio: state.portfolio,
// })
export default PortfolioCreateForm
// export default connect(mapStateToProps)(PortfolioCreateForm)
