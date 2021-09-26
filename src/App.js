import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

function App() {
	return (
		<div className='max-w-screen-xl m-auto mt-2 pt-3  min-h-screen h-full'>
			<Drawer />
			<Header />
			<div className='w-11/12 rounded-3xl bg-white m-auto shadow mt-5 pb-16'>
				<div className='flex items-center justify-between mb-2 p-10'>
					<h1 className='text-4xl font-bold'>Все товары</h1>
					<div className='flex items-center border border-opacity-80 shadow-sm rounded-xl px-4'>
						<img className='h-6 mr-1 opacity-50' src='/img/search.svg' alt='search' />
						<input
							className='h-10 w-52 text-base outline-none'
							placeholder='Найти...'
							type='text'
						/>
					</div>
				</div>
				{/* Card */}

				<div className='flex justify-start flex-wrap px-10 gap-5'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
