import React, { Fragment } from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import Fixedblock from "./containers/fixedblock/fixedblock.jsx";
import Main from "./components/main/main.jsx";

function App() {
  return (
  	<Fragment>
      <Header/>
      <Main/>
      <Fixedblock/>
	</Fragment>
  );
}

export default App;
