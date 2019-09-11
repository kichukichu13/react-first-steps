import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './InCartCheckbox.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCart from '../../actions/actionCart'

let wasInitItems = [];

class InCartCheckbox extends Component {
  constructor (props) {
    super(props)

    if(!wasInitItems.includes(props.id)){
      wasInitItems.push(props.id);
      if(props.inCart){
        props.actions.addIdNameToCart(props.id, props.name)
      }
    }
  }

  render () {
    const { id, name, inCartItems, actions } = this.props
    const inCartReal = inCartItems && !!inCartItems[id]

    return (
      <label className="container" htmlFor={id}>
        <input
          onChange={() => actions.addIdNameToCart(id, name)}
          type="checkbox" id={id}
          name={id}
          value={name}
          defaultChecked={inCartReal}
        />
        <span className="checkmark"/>
      </label>
    )
  }
}

InCartCheckbox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  inCart: PropTypes.bool,
}

InCartCheckbox.defaultProps = {
  name: '',
  inCart: false
}

const mapStateToProps = (state) => ({ inCartItems: state.inCartItems })
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actionCart, dispatch) })
export default connect(mapStateToProps, mapDispatchToProps)(InCartCheckbox)