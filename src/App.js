import React from 'react';

import Routes from "./routes";

import Header from "./components/Hearder/index";
//import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
