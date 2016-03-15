import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

/**
 * Import actions here
 */

class /* Component Name */ extends Component {
  /* contextTypes is necessary for redux-router to recognize the current route */
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(postData) {
    this.props./* actionName */(postData)
    .then(() => {
      /* Action has been completed, reroute to home */
      this.context.router.push('/')
    })
  }

  render() {
    /* This plucks the 'entry' object and handleSubmit from this.props */
    const {fields:{entry}, handleSubmit} = this.props

    /**
     * * Bind the onsubmit callback to the current context
     * * Spread the 'entry' object (see above) as attrs of the input
     * * Create an empty div that will populate with any errors
     */
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <input type="text" {...entry}/>
        <div>{entry.touched ? entry.error : ''}</div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  /**
   * the values object has properties for each field's values
   * These can be checked in order to update the errors object
   */
  if(!values.entry) errors.entry = 'Enter something'
  /* Whatever is returned by the validate func is parsed as an error */
  return errors
}

export default reduxForm({
  form: /* Component Name */,
  fields: ['entry'], // array of fields that redux-form has to make available
  validate
}, /* (state) => { as in connect() } or null */,
{/* actions */})(/* Component Name */)
