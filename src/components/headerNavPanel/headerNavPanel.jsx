import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'

import './headerNavPanel.css'
import { NAVIGATION } from "../../constants"

class HeaderNavPanel extends Component{
	render() {
		let menuKeys = [];
		let haveMenu = !!(NAVIGATION);
		if(haveMenu){
			menuKeys = Object.keys(NAVIGATION);
			haveMenu = menuKeys.length;
		}

		return (
			<div className="fixed-nav-panel">
				<NavLink className="index" to="/">MyReact</NavLink>
				<ul className="menu">
					{haveMenu && menuKeys.map((key) => (
						<li key={key}>
							<NavLink to={"/" + key}>
								{NAVIGATION[key].name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default HeaderNavPanel;