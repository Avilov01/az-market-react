function App() {
	return (
		<div className='max-w-screen-xl m-auto mt-2 pt-3  min-h-screen h-full'>
			{/* Overlay */}
			<div className='left-0 absolute top-0 w-full h-full bg-black bg-opacity-40 z-10'>
				{/* Drawwer */}
				<div className='flex flex-col p-6 h-full absolute w-100 bg-white right-0 shadow-2xl opacity-100'>
					<h3 className='flex items-center justify-between mb-6 mx-0.5 font-bold text-3xl'>
						Корзина{' '}
						<span className=' transform cursor-pointer border-gray-300 opacity-40 rounded-lg border h-8 transition hover:opacity-100 duration-300 ease-in-out hover:shadow '>
							<img
								className='transition ease-in-out duration-1000 transform hover:rotate-180 opacity-70 h-8 w-8 p-2'
								src='/img/btn-remove.svg'
								alt='Remove'
							/>
						</span>
					</h3>
					{/* cart-items */}
					<div className='flex-1 overflow-auto overflow-x-hidden'>
						<div className=' mb-5 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex items-center border border-opacity-60 p-3'>
							<img className=' mr-5 h-20' src='/img/items/DB-SA302.jpeg' alt='DB-SA302' />
							<div className='mr-5'>
								<p className=' text-base leading-5 mb-1'>APOCALYPSE DB-SA302 D1/D2</p>
								<b className='text-base'>999 руб.</b>
							</div>
							{/* cart-btn-remove */}
							<div className=' transform hover:tra cursor-pointer border-gray-300 opacity-40 rounded-lg border w-8 overflow-hidden transition hover:opacity-100 duration-300 ease-in-out hover:shadow '>
								<img
									className='transition ease-in-out duration-1000 transform hover:rotate-180 opacity-70 h-full w-full p-2'
									src='/img/btn-remove.svg'
									alt='Remove'
								/>
							</div>
						</div>
						<div className=' mb-5 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex items-center border border-opacity-60 p-3'>
							<img className=' mr-5 h-20' src='/img/items/DB-SA302.jpeg' alt='DB-SA302' />
							<div className='mr-5'>
								<p className=' text-base leading-5 mb-1'>APOCALYPSE DB-SA302 D1/D2</p>
								<b className='text-base'>999 руб.</b>
							</div>
							{/* cart-btn-remove */}
							<div className=' transform hover:tra cursor-pointer border-gray-300 opacity-40 rounded-lg border w-8 overflow-hidden transition hover:opacity-100 duration-300 ease-in-out hover:shadow '>
								<img
									className='transition ease-in-out duration-1000 transform hover:rotate-180 opacity-70 h-full w-full p-2'
									src='/img/btn-remove.svg'
									alt='Remove'
								/>
							</div>
						</div>
						<div className=' mb-5 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex items-center border border-opacity-60 p-3'>
							<img className=' mr-5 h-20' src='/img/items/DB-SA302.jpeg' alt='DB-SA302' />
							<div className='mr-5'>
								<p className=' text-base leading-5 mb-1'>APOCALYPSE DB-SA302 D1/D2</p>
								<b className='text-base'>999 руб.</b>
							</div>
							{/* cart-btn-remove */}
							<div className=' transform hover:tra cursor-pointer border-gray-300 opacity-40 rounded-lg border w-8 overflow-hidden transition hover:opacity-100 duration-300 ease-in-out hover:shadow '>
								<img
									className='transition ease-in-out duration-1000 transform hover:rotate-180 opacity-70 h-full w-full p-2'
									src='/img/btn-remove.svg'
									alt='Remove'
								/>
							</div>
						</div>
						
						
						
						
					
						<div className='mb-5 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex items-center border border-opacity-60 p-3'>
							<img className=' mr-5 h-20' src='/img/items/DB-SA302.jpeg' alt='DB-SA302' />
							<div className='mr-5'>
								<p className=' text-base leading-5 mb-1'>APOCALYPSE DB-SA302 D1/D2</p>
								<b className='text-base'>999 руб.</b>
							</div>
							{/* cart-btn-remove */}
							<span className=' transform cursor-pointer border-gray-300 opacity-40 rounded-lg border w-8 transition hover:opacity-100 duration-300 ease-in-out hover:shadow '>
								<img
									className='transition ease-in-out duration-1000 transform hover:rotate-180 opacity-70 h-full w-full p-2'
									src='/img/btn-remove.svg'
									alt='Remove'
								/>
							</span>
						</div>
					</div>
					<div>
						<ul className='flex-1 mb-6'>
							<li className='flex'>
								<span className=' text-lg'>Итого: </span>
								<div className='flex-1 relative -top-1 border-dashed border-b mx-1'></div>
								<b> 19 245 руб.</b>
							</li>
						</ul>
						<button className='bg-red-500 rounded-3xl animate-bounce font-medium text-lg text-white h-14 w-full'>
							Оформить заказ
						</button>
					</div>
				</div>
			</div>

			{/* Header */}
			<header className='flex justify-between px-8 py-5 w-11/12 m-auto shadow rounded-3xl bg-white'>
				<div className='flex items-center'>
					<img className='h-12 mr-4' src='/img/logo.png' alt='logo' />
					<div className='items-center'>
						<h3 className='m-0 font-bold text-xl leading-5'>AZmarket</h3>
						<p className='m-0 text-gray-600 leading-5'>Магазин автозвука</p>
					</div>
				</div>

				<ul className='flex items-center gap-4'>
					<li className='flex'>
						<img className='h-6 opacity-70' src='/img/cart.svg' alt='cart' />
						<span className='pl-2'>1 руб.</span>
					</li>
					<li>
						<img className='h-6 opacity-70' src='/img/user.svg' alt='user' />
					</li>
				</ul>
			</header>
			{/* Content */}
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
				<div className='flex justify-center flex-wrap gap-5'>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/DB-SA302.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2 </h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>1 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='cursor-pointer h-9' src='/img/plus.svg' alt='plus' />
								</div>
								<div>
									<img
										className='cursor-pointer h-9 hover:shadow-2xl'
										src='/img/unliked.svg'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/SVL-1547.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className='text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>2 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/added.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/unliked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/MF-15R.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>3 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/plus.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/liked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/DB-SA2712.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>4 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/added.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/liked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/DB-SA2712.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>4 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/added.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/liked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/MF-15R.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>3 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/plus.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/liked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/SVL-1547.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className='text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>2 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/added.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/unliked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
						<img className='w-44 pb-2' src='/img/items/DB-SA302.jpeg' alt='' />
						<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2 </h5>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col leading-5'>
								<span className=' text-sm uppercase opacity-50'>Цена:</span>
								<b className='text-sm'>1 руб.</b>
							</div>
							<div className='flex gap-2'>
								<div>
									<img className='h-9' src='/img/plus.svg' alt='plus' />
								</div>
								<div>
									<img className='h-9' src='/img/unliked.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
