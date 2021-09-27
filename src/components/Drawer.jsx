import React, { useEffect } from 'react';
import { CartItem } from './CartItem';

export const Drawer = ({ opened, onCloseCart }) => {
	
	return (
		<div
			className={`${
				opened ? ' hidden' : ''
			} left-0 absolute top-0 w-full h-full bg-black bg-opacity-50 z-10`}>
			{/* Drawwer */}
			<div className='flex flex-col p-6 h-full absolute bg-white w-3/10 right-0 shadow-xl'>
				<h3 className='flex items-center justify-between mb-6 mx-0.5 font-bold text-3xl'>
					Корзина{' '}
					<div className=' shadow hover:shadow-md bg-gray-100 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-80 active:bg-opacity-40  active:shadow-inner transform cursor-pointer  opacity-70 hover:opacity-100 rounded-lg w-10 overflow-hidden transition duration-300 ease-in-out '>
						<img
							onClick={() => onCloseCart()}
							className='transition ease-in-out duration-700 transform hover:rotate-90 opacity-70 h-full w-full p-2'
							src='/img/btn-remove.svg'
							alt='Close'
						/>
					</div>
				</h3>
				{/* cart-items */}
				<div className=' flex-1 overflow-auto overflow-x-hidden'>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
				<div>
					<ul className='flex-1 mb-6'>
						<li className='flex'>
							<span className=' text-lg'>Итого: </span>
							<div className='flex-1 relative -top-1 border-dashed border-b mx-1'></div>
							<b> 19 245 руб.</b>
						</li>
					</ul>
					<button className='bg-red-600 hover:bg-red-500 rounded-3xl animate-bounce font-medium text-lg text-white h-14 w-full'>
						Оформить заказ
					</button>
				</div>
			</div>
		</div>
	);
};
