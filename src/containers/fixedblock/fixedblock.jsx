import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './fixedblock.css'
import { connect } from 'react-redux'
import { bitGetDeclNum } from '../../helpers/bitGetDeclNum'

class FixedBlock extends Component {
  state = {}

  render () {
    const { inCartItems } = this.props
    const count = Object.keys(inCartItems).length

    return (
      <footer>
        <div className={'to-cart-block' + (count ? ' have-some' : '')}>
          <div className="wrapper">
            {count
              ? (
                <span className="item-text">
									Вы выбрали <span className="count">{count}</span> товар{bitGetDeclNum(count, ['', 'а', 'ов'])}
                  <Link className="btn" to="/shopping_cart">
										ПЕРЕЙТИ В КОРЗИНУ
									</Link>
								</span>
              )
              : (<span className="item-text">Пожалуйста, отметьте галочками несколько товаров</span>)
            }
          </div>
        </div>
      </footer>
    )
  }
}

FixedBlock.propTypes = {
  inCartItems: PropTypes.object
}

FixedBlock.defaultProps = {
  inCartItems: {}
}

const mapStateToProps = (state) => ({ inCartItems: state.inCartItems })
export default connect(mapStateToProps)(FixedBlock)