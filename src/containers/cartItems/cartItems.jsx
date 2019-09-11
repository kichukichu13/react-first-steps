import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './cartItems.css'
import { connect } from 'react-redux'

import { bitGetDeclNum } from '../../helpers/bitGetDeclNum'

class CartItems extends Component {

  render () {
    const { inCartItems } = this.props
    const count = Object.keys(inCartItems).length
    let goodsText = ''

    if (count) {
      let key
      for (key in inCartItems) {
        goodsText += ', ' + inCartItems[key]
      }
      goodsText = goodsText.substr(2)
    }

    return (
      <div>
        {count ? `Вы выбрали ${count} товар${bitGetDeclNum(count, ['', 'а', 'ов'])}: ${goodsText}` : 'Вы не выбрали ни одного товара'}
      </div>
    )
  }
}

CartItems.propTypes = {
  items: PropTypes.array
}

CartItems.defaultProps = {
  items: []
}

const mapStateToProps = (state) => ({ inCartItems: state.inCartItems })
export default connect(mapStateToProps)(CartItems)
