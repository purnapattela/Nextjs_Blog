// controlled elements - are used to give control to the parent componets
/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ onAddItems }) => {
	const [des, setDes] = useState('');
	const [quant, setQuant] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!des) return alert('Enter the name of the {item} !!');

		const newData = {
			id: Date.now(),
			description: des,
			quantity: quant,
			packed: false,
		};
		onAddItems(newData);

		setDes('');
		setQuant(1);
	}
	return (
		<>
			<form className="add-form" onSubmit={(e) => handleSubmit(e)}>
				<h3>What do you need for your 😍 trip</h3>
				<select value={quant} onChange={(e) => setQuant(+e.target.value)}>
					{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="items..."
					value={des}
					onChange={(e) => {
						return setDes(e.target.value);
					}}
				/>
				<button>ADD</button>
			</form>
		</>
	);
};

export default Form;
