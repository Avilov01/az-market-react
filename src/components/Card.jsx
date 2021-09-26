import React from 'react';

export const Card = () => {
	return (
		<div className='border border-opacity-70  p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform ease-in-out hover:border-opacity-50'>
			<img className='w-44 pb-2' src='/img/items/DB-SA302.jpeg' alt='' />
			<h5 className='mb-3 leading-5 text-sm'>APOCALYPSE DB-SA302 D1/D2</h5>
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
	);
};
