import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength50 = maxLength(50)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{7})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined




class CreateBus extends Component {

  state={
    value:undefined
  }


  renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>< h5 className="black-text text-darken-3">{label}</h5></label>
      <div>
        <input className="input-field" {...input}
         placeholder={label} type={type} ref={this.fileInput}
       />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  photo = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label >{label}</label>
      <div>
        <input {...input}
         placeholder={label} type={type} value={this.state.value}
       />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

     handleChange=(event)=> {
      const photo=event.target.files[0]
      this.setState=({
        value:photo
      })
    }    
    render() {
      const {submitting,handleSubmit,pristine,reset}=this.props
        
        return (
            <div  className="container">
              <h5 className="blue-text text-darken-3">Registro del Negocio</h5>
                 <form className="white" onSubmit={handleSubmit} encType="multipart/form-data">
      <Field
        name="nameNegocio"
        type="text"
        component={this.renderField}
        label="Nombre del Negocio"
        validate={[required, maxLength50, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="descripcion"
        type="text"
        component={this.renderField}
        label="Descripcion"
        validate={[maxLength50,minLength2]}
        warn={aol}
      />

      <Field
        name="phone"
        type="number"
        component={this.renderField}
        label="Telefono"
        validate={[required, phoneNumber]}
      />

      <Field
        name="clasificacion"
        type="text"
        component={this.renderField}
        label="Tipo de Negocio"
        validate={[required]}
      />  
        <Field
        name="horarioAtencion"
        type="text"
        component={this.renderField}
        label="Horarios de Atencion"
        validate={[required]}
      />

       <Field
        name="direccion"
        type="text"
        component={this.renderField}
        label="Direccion del Local"
        validate={[required]}
      />
        

        <Field
        name="otros"
        type="text"
        component={this.renderField}
        label="Otros Servicios"
        validate={[required]}
      />  
       
       <Field
        name="photo"
        type="file"
        component={this.photo}
        label="photo"
        validate={[required]}
      />
 
      <div>
        <button className="btn pink lighten-1 z-depth-0" type="submit" disabled={pristine || submitting}  >
          Submit
        </button>
        <button className="btn pink lighten-1 z-depth-0"  type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  
            </div>
        );
    }
}

  export default compose(
    connect(null,null),
    reduxForm({
      form: 'simple', // a unique identifier for this form   
    })
  )(CreateBus)