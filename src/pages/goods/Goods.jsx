import React, { Fragment } from 'react'
import './Goods.css'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import GoodsBlock from "../../components/goodsBlock/goodsBlock"

function Goods() {
  return (
  	<Fragment>
      <Header/>
      <GoodsBlock/>
      <Footer showFixedBlock />
	</Fragment>
  );
}

export default Goods;
