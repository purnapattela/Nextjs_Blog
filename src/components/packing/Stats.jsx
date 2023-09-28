/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
	const newItems = items.length;
	const numpacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numpacked / newItems) * 100);
	return (
		<div className="stats">
			{percentage < 100 && percentage
				? `📦 You have ${newItems} items on your list, and you already paccked ${numpacked} i.e, ( ${percentage}% )`
				: 'Start adding the items for trip ✈️'}
			{percentage == 100 &&
				'if no-other items You are all-set for the trip 😁😎'}
		</div>
	);
};

export default Stats;
