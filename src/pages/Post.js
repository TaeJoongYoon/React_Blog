import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost, deletePost } from "../actions/index";

class Post extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.id).then(() => {
      this.context.router.history.push("/posts");
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger float-right"
        >
          DeletePost
        </button>
        <h1>{post.title}</h1>
        <h5>Categories : {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { post: state.posts.post };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
