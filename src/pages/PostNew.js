import React, { Component } from 'react';
import PropTypes from "prop-types";
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createPost } from '../actions/index';
import { renderField, renderTextArea } from '../constants/renderField';
import { required, minLength2 } from '../constants/validate';
import '../styles/style.css';


class PostNew extends Component {
  static contextTypes ={
    router: PropTypes.object
  };
 
  onSubmit = (props) => {
    this.props.createPost(props)
              .then(() => {
                this.context.router.history.push('/posts');
              });
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create A New Post!</h3>
          <Field
            label="Title"
            name="title"
            component={renderField}
            type="text"
            validate={[required,minLength2]}/>
          <Field
            label="Categories"
            name="categories"
            component={renderField}
            type="text"
            validate={required}/>
          <Field
            label="Content"
            name="content"
            component={renderTextArea}
            validate={[required,minLength2]}/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createPost }, dispatch);
}

PostNew = connect(
  null,
  mapDispatchToProps
)(PostNew);

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);