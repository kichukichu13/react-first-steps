import React, { Fragment } from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Main from "./components/main/main.jsx";

function App() {
  return (
  	<Fragment>
      <Header/>
      <Main/>
      <Footer/>
	</Fragment>
  );
}

export default App;
