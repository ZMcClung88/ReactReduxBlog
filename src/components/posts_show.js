import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // <-- provided directly from react router
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      // <div>Posts Show!</div>
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { posts: posts[ownProps.match.params.id] }; // returns one specific post vs all posts
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);
