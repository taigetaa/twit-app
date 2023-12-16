import React from 'react';
import PostListItem from '../post-list-item/post-list-item.component';
import './post-list.css';

const PostList = () => {
  return (
    <ul className="app-list list-group d-flex flex-column">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};

export default PostList;
