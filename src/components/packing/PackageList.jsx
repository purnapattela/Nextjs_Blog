/* eslint-disable react/prop-types */

import { useState } from 'react';

// const items = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Books", quantity: 2, packed: true },
//   { id: 3, description: "Socks", quantity: 12, packed: false },
// ];

const PackingList = ({ items, del, handleToggleItem,clear}) => {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;
	if (sortBy == 'input') sortedItems = items;
	else if (sortBy == 'description')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	else if (sortBy == 'packed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => {
					return (
						<List
							key={item.id}
							item={item}
							del={del}
							handleToggleItem={handleToggleItem}
						/>
					);
				})}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input Order</option>
					<option value="description">Sort by Alphabetically</option>
					<option value="packed">Sort by packed Status</option>
				</select>
				<button onClick={clear}>CLEAR</button>
			</div>
		</div>
	);
};

const List = ({ item, del, handleToggleItem }) => {
	return (
		<li style={item.packed ? { textDecoration: 'line-through' } : {}}>
			<span>
				<span>
					<input
						type="checkbox"
						value={item.packed}
						onChange={() => handleToggleItem(item.id)}
					/>
				</span>
				{' ' + item.quantity} {item.description}{' '}
				<button onClick={() => del(item.id)}>❌</button>
			</span>
		</li>
	);
};

export default PackingList;
