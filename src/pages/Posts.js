import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from 'lodash';
import { fetchPosts } from "../actions/index";

class Posts extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <Link to={`${this.props.match.url}/${post.id}`}>
          <li className="list-group-item" key={post.id}>
            <span className="float-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        </Link>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Posts List</h2>
        <br />
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Posts);
