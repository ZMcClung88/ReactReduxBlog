import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        {/* onChange={field.input.onChange} */}
        {/* onFocus={field.input.onFocus} */}
        {/* onBlur={field.input.onBlur} */}
        {/* ^^^ same as vvv */}
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }
  render() {
    return (
      <div>
        <form>
          <Field label="Title for posts" name="title" component={this.renderField} />
        </form>
        <form>
          <Field label="Categories" name="categories" component={this.renderField} />
        </form>
        <form>
          <Field label="Post Content" name="content" component={this.renderField} />
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> {title: "asdf", categories: "134312", content: "ererqew"}
  const errors = {};

  //validate the input from "values"
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux forms assumes form is invalid
  return errors;
}

export default reduxForm({
  // validate: validate,
  validate,
  form: 'PostsNewForm'
})(PostsNew);
