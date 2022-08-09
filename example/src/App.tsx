import React from 'react';
import './App.css';
import Table from 'custom-component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table
          headers={[{
            key: 'hello0',
            title: 'world0',
            menu: [{
              value: '메뉴입니다.',
              onClick: () => {}
            }]
          }, {
            key: 'hello1',
            title: 'world1'
          }]}
          data={["fadsfs"]}
        />
      </header>
    </div>
  );
}

export default App;