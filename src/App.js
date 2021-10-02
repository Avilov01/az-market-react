import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';
import { addProducts } from './redux/productSlice';

const data = [
	{
		id: 1,
		name: 'Apocalypse AP-M61AE',
		brend: 'Deaf Bonce',
		series: 'Apocalypse',
		imageUrl: 'img/items/AP-M61AE.jpg',
		price: 5790,
	},
	{
		id: 2,
		name: 'Apocalypse AP-M81SE',
		brend: 'Deaf Bonce',
		series: 'Apocalypse',
		imageUrl: 'img/items/AP-M81SE.jpg',
		price: 5490,
	},
	{
		id: 3,
		name: 'Apocalypse AP-M81A',
		brend: 'Deaf Bonce',
		series: 'Apocalypse',
		quantity: 'пара',
		imageUrl: 'img/items/AP-M81A.jpg',
		price: 7390,
	},
	{
		id: 4,
		name: 'Apocalypse AP-M67AN',
		brend: 'Deaf Bonce',
		series: 'Apocalypse',
		quantity: 'пара',
		imageUrl: 'img/items/AP-M67AN.jpg',
		price: 14990,
	},
	{
		id: 5,
		name: 'Apocalypse AP-M60SQL',
		brend: 'Deaf Bonce',
		series: 'Apocalypse',
		quantity: 'пара',
		imageUrl: 'img/items/AP-M60SQL.jpg',
		price: 5790,
	},
	{
		id: 6,
		name: 'Avatar MTU-61LE',
		brend: 'Avatar',
		series: 'Tsunami',
		quantity: 'пара',
		imageUrl: 'img/items/MTU-61LE.jpg',
		price: 5790,
	},
	{
		id: 7,
		name: 'Avatar MTU-81LE',
		brend: 'Avatar',
		series: 'Tsunami',
		quantity: 'пара',
		imageUrl: 'img/items/MTU-81LE.jpg',
		price: 3290,
	},
	{
		id: 8,
		name: 'Avatar MTU-60LE',
		brend: 'Avatar',
		series: 'Tsunami',
		quantity: 'пара',
		imageUrl: 'img/items/MTU-60LE.jpg',
		price: 1890,
	},
	{
		id: 9,
		name: 'Hannibal MH-61 v2',
		brend: 'Deaf Bonce',
		series: 'Hannibal',
		quantity: 'пара',
		imageUrl: 'img/items/MH-61 v2.jpg',
		price: 3290,
	},
	{
		id: 10,
		name: 'Hannibal MH-50',
		brend: 'Deaf Bonce',
		series: 'Hannibal',
		quantity: 'пара',
		imageUrl: 'img/items/MH-50.jpg',
		price: 1990,
	},
	{
		id: 11,
		name: 'Hannibal MH-81 v2',
		brend: 'Deaf Bonce',
		series: 'Hannibal',
		quantity: 'пара',
		imageUrl: 'img/items/MH-81 v2.jpg',
		price: 4090,
	},
	{
		id: 12,
		name: 'Machete MM-80 V2',
		brend: 'Deaf Bonce',
		series: 'Machete',
		quantity: 'пара',
		imageUrl: 'img/items/MM-80 V2.jpg',
		price: 4490,
	},
	{
		id: 13,
		name: 'Machete MM-60 V2',
		brend: 'Deaf Bonce',
		series: 'Machete',
		quantity: 'пара',
		imageUrl: 'img/items/MM-60 V2.jpg',
		price: 4490,
	},
	{
		id: 14,
		name: 'Machete MM-60 NEO',
		brend: 'Deaf Bonce',
		series: 'Machete',
		quantity: 'пара',
		imageUrl: 'img/items/MM-60 NEO.jpg',
		price: 4090,
	},
	{
		id: 15,
		name: 'Avatar SVL-1547 D1/D2',
		brend: 'Avatar',
		series: 'Volcano',
		quantity: '',
		imageUrl: 'img/items/SVL-1547D2.jpg',
		price: 43990,
	},
	{
		id: 16,
		name: 'Avatar SVL-1847 D1/D2',
		brend: 'Avatar',
		series: 'Volcano',
		quantity: '',
		imageUrl: 'img/items/SVL-1847D2.jpg',
		price: 44990,
	},
	{
		id: 17,
		name: 'Avatar STU-1546 D2',
		brend: 'Avatar',
		series: 'Tsunami',
		quantity: '',
		imageUrl: 'img/items/STU-1546 D2.jpg',
		price: 27490,
	},
	{
		id: 18,
		name: 'Avatar STU-1246 D2',
		brend: 'Avatar',
		series: 'Tsunami',
		quantity: '',
		imageUrl: 'img/items/STU-1246 D2.jpg',
		price: 25290,
	},
	{
		id: 19,
		name: 'Black Hydra HGS-2521',
		brend: 'Black Hydra',
		series: 'Gamma',
		quantity: '',
		imageUrl: 'img/items/HGS-2521.jpg',
		price: 12990,
	},
	{
		id: 20,
		name: 'Black Hydra HBA-4.130',
		brend: 'Black Hydra',
		series: 'Beta',
		quantity: '',
		imageUrl: 'img/items/Black Hydra HBA-4.130.jpg',
		price: 84490,
	},
	{
		id: 21,
		name: 'Black Hydra HGA-4.100',
		brend: 'Black Hydra',
		series: 'Gamma',
		quantity: '',
		imageUrl: 'img/items/HGA-4.100.jpg',
		price: 39490,
	},
	{
		id: 22,
		name: 'Black Hydra HDA-4.90',
		brend: 'Black Hydra',
		series: 'Delta',
		quantity: '',
		imageUrl: 'img/items/HDA-4.90.jpg',
		price: 30990,
	},
	{
		id: 23,
		name: 'Avatar ABR-240.4',
		brend: 'Avatar',
		series: 'Buran',
		quantity: '',
		imageUrl: 'img/items/ABR-240.4.jpg',
		price: 4390,
	},
	{
		id: 24,
		name: 'Avatar ABR-360.4',
		brend: 'Avatar',
		series: 'Buran',
		quantity: '',
		imageUrl: 'img/items/ABR-360.4.jpg',
		price: 5490,
	},
	{
		id: 25,
		name: 'Avatar ABR-460.4',
		brend: 'Avatar',
		series: 'Buran',
		quantity: '',
		imageUrl: 'img/items/ABR-460.4.jpg',
		price: 7190,
	},
	{
		id: 26,
		name: 'Avatar ABR-200.2',
		brend: 'Avatar',
		series: 'Buran',
		quantity: '',
		imageUrl: 'img/items/ABR-200.2.jpg',
		price: 3490,
	},
	{
		id: 27,
		name: 'Avatar AST-1200.1D',
		brend: 'Avatar',
		series: 'Storm',
		quantity: '',
		imageUrl: 'img/items/AST-1200.1D.jpg',
		price: 8890,
	},
	{
		id: 28,
		name: 'Avatar AST-2100.1D',
		brend: 'Avatar',
		series: 'Storm',
		quantity: '',
		imageUrl: 'img/items/AST-2100.1D.jpg',
		price: 10490,
	},
];

function App() {
	const { products } = useSelector(state => state.products);
	const { totalPrice } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const [isCartOpened, setIsCartOpened] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		dispatch(addProducts(data));
	}, [dispatch]);

	const toggleCartOpened = () => {
		setIsCartOpened(!isCartOpened);
	};

	return (
		<div className='max-w-screen-xl m-auto mt-2 pt-3  min-h-screen h-full'>
			<Drawer opened={isCartOpened} onCloseCart={toggleCartOpened} totalPrice={totalPrice} />
			<Header onClickCart={toggleCartOpened} totalPrice={totalPrice} />
			<div className='w-11/12 rounded-3xl bg-white m-auto shadow mt-5 pb-16'>
				<div className='flex items-center justify-between mb-2 p-10'>
					<h1 className='text-4xl font-bold'>Все товары</h1>
					<div className='flex items-center border border-opacity-80 shadow-sm rounded-xl px-4'>
						<img className='h-6 mr-1 opacity-50' src='/img/search.svg' alt='search' />
						<input
							className='h-10 w-52 text-base outline-none'
							placeholder='Найти...'
							type='text'
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
						/>
					</div>
				</div>
				{/* Card */}

				<div className='flex justify-start flex-wrap px-10 gap-5'>
					{products &&
						products
							.filter(product =>
								product.name.toLowerCase().includes(searchValue.toLowerCase()),
							)

							.map(product => (
								<Card
									key={product.id}
									id={product.id}
									name={product.name}
									price={product.price}
									imageUrl={product.imageUrl}
								/>
							))}
				</div>
			</div>
		</div>
	);
}

export default App;
