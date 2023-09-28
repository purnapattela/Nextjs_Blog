import './style.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackageList';
import Stats from './Stats';
import { useState } from 'react';

const Packing = () => {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		// console.log(...items, item);
		setItems((items) => [...items, item]);
	}
	function onDel(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClear(){
		const confirm = window.confirm("Are You Sure ??")
		confirm && setItems([])
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				del={onDel}
				handleToggleItem={handleToggleItem}
				clear = {handleClear}
			/>
			<Stats items={items} />
		</div>
	);
};

export default Packing;
