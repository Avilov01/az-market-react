function App() {
	return (
		<div className='max-w-screen-xl m-auto mt-5 pt-8  min-h-screen '>
			<header className='flex justify-between px-5 py-7 w-11/12 m-auto shadow rounded-3xl bg-white'>
				<div className='flex items-center'>
					<img className='h-12 mr-4' src='/img/logo.png' alt='logo' />
					<div className='items-center'>
						<h3 className='m-0 font-bold text-xl leading-5'>AZmarket</h3>
						<p className='m-0 text-gray-600 leading-5'>Магазин автозвука</p>
					</div>
				</div>

				<ul className='flex items-center gap-4'>
					<li className='flex'>
						<img className='h-6' src='/img/cart.svg' alt='cart' />
						<span className='pl-2'>1205 руб.</span>
					</li>
					<li>
						<img className='h-6' src='/img/user.svg' alt='user' />
					</li>
				</ul>
			</header>
			<div className='p-5 w-11/12 rounded-3xl bg-white m-auto shadow mt-5 pb-16'>
				<h1 className='text-4xl font-bold mb-5'>Все товары</h1>

				<div className='flex justify-center'>
					<div className='card border-t-2 border-opacity-30 shadow-md p-5 rounded-3xl w-64 mr-8 ml-4'>
						<img className='w-48' src='/img/items/DB-SA302.jpeg' alt='' />
						<h5 className='mb-2 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>12 999 руб.</b>
							</div>
							<button>
								<img className='h-7' src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card border-t-2 border-opacity-30 shadow-md p-5 rounded-3xl w-64 mr-8'>
						<img className='w-48' src='/img/items/SVL-1547.jpeg' alt='' />
						<h5 className='mb-2 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>12 999 руб.</b>
							</div>
							<button>
								<img className='h-7' src='/img/added.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card border-t-2 border-opacity-30 shadow-md p-5 rounded-3xl w-64 mr-8'>
						<img className='w-48' src='/img/items/MF-15R.jpeg' alt='' />
						<h5 className='mb-2 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>12 999 руб.</b>
							</div>
							<button>
								<img className='h-7' src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card border-t-2 border-opacity-30 shadow-md p-5 rounded-3xl w-64 mr-8'>
						<img className='w-48' src='/img/items/DB-SA2712.jpeg' alt='' />
						<h5 className='mb-2 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>12 999 руб.</b>
							</div>
							<button>
								<img className='h-7' src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default App;
