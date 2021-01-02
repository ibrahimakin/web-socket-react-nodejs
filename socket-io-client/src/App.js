import React from 'react';
import ClientComponent from './ClientComponent';
import logo from './images/i_logo.png';
import './App.css';

function App () {
  const [loadClient, setLoadClient] = React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Load or unload the client */}
        <button onClick={() => { setLoadClient(prevState => !prevState); }}>
          {loadClient ? 'Stop Client' : 'Start Client'}
        </button>
        {/* Socket IO Client */}
        {loadClient && <ClientComponent />}
      </header>
    </div>
  );
}

export default App;
