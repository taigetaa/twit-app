import React from 'react';
import AppHeader from './components/app-header/app-header.component.jsx';
import SearchPanel from './components/search-panel/search-panel.component.jsx';
import PostStatusFilter from './components/post-status-filter/post-status-filter.component.jsx';
import PostList from './components/post-list/post-list.component.jsx';
import PostAddForm from './components/post-add-form/post-add-form.component.jsx';
import './App.css';

const App = () => {
  const data = [
    { label: 'Hello', important: true, id: 1 },
    { label: 'Im learning React', important: false, id: 2 },
    { label: 'GL to me', important: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
