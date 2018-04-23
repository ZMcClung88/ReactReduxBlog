import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Posts Index</div>;
  }
}

//another way to setup mapPropsToDispatch without having to create new fn.
export default connect(null, { fetchPosts })(PostsIndex);
