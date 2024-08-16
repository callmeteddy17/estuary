import React from 'react';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <PostList />
      </div>
    </div>
  );
};

export default App;
