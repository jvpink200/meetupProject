import React from 'react';
import ToDo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo title="title1" bio="something here 1" />
      <ToDo title="title2" bio="something here 2" />
      <ToDo title="title3" />
    </div>
  );
}

export default App;
