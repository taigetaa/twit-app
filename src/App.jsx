import React, { Component } from 'react';
import AppHeader from './components/app-header/app-header.component.jsx';
import SearchPanel from './components/search-panel/search-panel.component.jsx';
import PostStatusFilter from './components/post-status-filter/post-status-filter.component.jsx';
import PostList from './components/post-list/post-list.component.jsx';
import PostAddForm from './components/post-add-form/post-add-form.component.jsx';
import './App.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Hello', important: true, like: false, id: 1 },
        { label: 'Im learning React', important: false, like: false, id: 2 },
        { label: 'GL to me', important: false, like: false, id: 3 },
      ],
      term: '',
      filter: 'all',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onTogglePosts = (arr, id, category) => {
    const index = arr.findIndex((elem) => elem.id === id);

    const old = arr[index];
    const newItem = { ...old, [category]: !old[category] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const newData = this.onTogglePosts(data, id, 'important');

      return {
        data: newData,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const newData = this.onTogglePosts(data, id, 'like');

      return {
        data: newData,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const liked = this.state.data.filter((item) => item.like).length;
    const allPosts = this.state.data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
