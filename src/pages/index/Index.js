import React, { Fragment } from 'react';
import './Index.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NavBlock from "../../components/navBlock/navBlock";

function Index() {
  return (
  	<Fragment>
      <Header/>
      <NavBlock/>
      <Footer/>
	</Fragment>
  );
}

export default Index;
