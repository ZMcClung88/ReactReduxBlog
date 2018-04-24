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
          <Field label="Tags" name="tags" component={this.renderField} />
        </form>
        <form>
          <Field label="Post Content" name="content" component={this.renderField} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
