import React from 'react';

export const CartItem = () => {
	return (
		<div className=' bg-white w-9/10 p-2 mx-2 mb-5 mt-2 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex items-center border border-opacity-60'>
			<img className=' mr-5 h-20' src='/img/items/DB-SA302.jpeg' alt='DB-SA302' />
			<div className='mr-5'>
				<p className=' text-base leading-5 mb-1'>APOCALYPSE DB-SA302 D1/D2</p>
				<b className='text-base'>999 руб.</b>
			</div>
			{/* cart-btn-remove */}
			<div
				className=' shadow 
						hover:shadow-md bg-gray-100 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-80 active:bg-opacity-40  active:shadow-inner transform cursor-pointer  opacity-50 hover:opacity-100 rounded-lg w-8 overflow-hidden transition duration-200 ease-in-out '>
				<img
					className='transition ease-in-out duration-700 transform hover:rotate-90 opacity-70 h-full w-full p-2'
					src='/img/btn-remove.svg'
					alt='Remove'
				/>
			</div>
		</div>
	);
};
