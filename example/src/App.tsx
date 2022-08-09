import React from 'react';
import './App.css';
import Talbe from 'custom-component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Talbe
          headers={[{
            key: 'hello0',
            title: 'world0'
          }, {
            key: 'hello1',
            title: 'world1'
          }]}
        />
      </header>
    </div>
  );
}

export default App;