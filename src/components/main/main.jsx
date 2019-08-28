import React from 'react';
import PropTypes from 'prop-types';

import './main.css';
import Title from "../title/title";

const Main = () => (
	<main>
		<div className="wrapper">
			<Title title="Список товаров"/>
			<table className="items-table">
				<thead>
				<tr className="item-row">
					<th className="item-column num">#</th>
					<th className="item-column name">Название</th>
					<th className="item-column rating">Рейтинг</th>
					<th className="item-column trend">Тренд</th>
					<th className="item-column price">Ценовой сегмент</th>
					<th className="item-column reviews">Отзывы покупателей</th>
					<th className="item-column cart">В корзину</th>
				</tr>
				</thead>
				<tbody>
				<tr className="item-row">
					<td className="item-column num">1</td>
					<td className="item-column name">Супер товар</td>
					<td className="item-column rating">2.87</td>
					<td className="item-column trend">-</td>
					<td className="item-column price"><span>РРРР</span></td>
					<td className="item-column reviews"><i class="review-icon"></i>5</td>
					<td className="item-column cart"><input type="checkbox"/></td>
				</tr>
				<tr className="item-row">
					<td className="item-column num">2</td>
					<td className="item-column name">Тоже хороший товар</td>
					<td className="item-column rating">1.94</td>
					<td className="item-column trend">-</td>
					<td className="item-column price"><span>РРРР</span></td>
					<td className="item-column reviews"><i className="review-icon"></i>5</td>
					<td className="item-column cart"><input type="checkbox"/></td>
				</tr>
				<tr className="item-row">
					<td className="item-column num">3</td>
					<td className="item-column name">Неплохой товар</td>
					<td className="item-column rating">2.87</td>
					<td className="item-column trend">-</td>
					<td className="item-column price"><span>РРР</span></td>
					<td className="item-column reviews"><i className="review-icon"></i>5</td>
					<td className="item-column cart"><input type="checkbox"/></td>
				</tr>
				</tbody>
			</table>
		</div>
	</main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
