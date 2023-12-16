import React from 'react';
import AppHeader from './components/app-header/app-header.component.jsx';
import SearchPanel from './components/search-panel/search-panel.component.jsx';
import PostStatusFilter from './components/post-status-filter/post-status-filter.component.jsx';
import PostList from './components/post-list/post-list.component.jsx';
import PostAddForm from './components/post-add-form/post-add-form.component.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
