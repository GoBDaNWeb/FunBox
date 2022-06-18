import CardItem from './components/CardItem';
import './style/App.css';

function App() {
	const cards = [
		{
			id: 1,
			heading: 'с фуагра',
			portions: 10,
			gifts: 1,
			wight: '0,5',
			description: 'Печень утки разварная с артишоками.',
			disabled: false,
		},
		{
			id: 2,
			heading: 'с рыбой',
			portions: 40,
			gifts: 2,
			wight: '2',
			description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
			disabled: false,
		},
		{
			id: 3,
			heading: 'с курой',
			portions: 100,
			gifts: 5,
			wight: '5',
			disabled: true,
		},
	]

	return (
		<div className='App'>
			<div className='wrapper'>
				<h1 className='title'>Ты сегодня покормил кота?</h1>
				<div className='cards'>
					{
						cards.map(card => (
							<CardItem key={card.id} card={card}/>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default App;
