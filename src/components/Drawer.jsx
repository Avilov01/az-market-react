import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';

export const Drawer = ({ opened, onCloseCart, totalPrice }) => {
	const { productsCart } = useSelector(state => state.cart);

	return (
		<div
			onClick={onCloseCart}
			className={`${
				opened ? ' hidden' : ''
			} left-0 top-0 w-full h-full bg-black bg-opacity-50 z-10 fixed`}>
			{/* Drawwer */}
			<motion.div
				initial={{ x: 500 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.5, duration: 0.8 }}
				className='fixed flex flex-col p-6 h-full w-112 bg-white right-0 shadow-xl'
				onClick={e => e.stopPropagation()}>
				<h3 className='flex items-center justify-between mb-6 mx-0.5 font-bold text-3xl'>
					Корзина{' '}
					<div className=' shadow hover:shadow-md bg-gray-100 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-80 active:bg-opacity-40  active:shadow-inner transform cursor-pointer  opacity-70 hover:opacity-100 rounded-lg w-10 overflow-hidden transition duration-300 ease-in-out '>
						<img
							onClick={onCloseCart}
							className='transition ease-in-out duration-700 transform hover:rotate-90 opacity-70 h-full w-full p-2'
							src='/img/btn-remove.svg'
							alt='Close'
						/>
					</div>
				</h3>
				{/* cart-items */}
				<div className=' flex-1 overflow-auto overflow-x-hidden'>
					{productsCart &&
						productsCart.map(product => (
							<CartItem
								id={product.id}
								name={product.name}
								price={product.price}
								imageUrl={product.imageUrl}
								key={product.id}
							/>
						))}
				</div>
				<div>
					<ul className='flex-1 mb-6'>
						<li className='flex'>
							<span className=' text-lg'>Итого: </span>
							<div className='flex-1 relative -top-1 border-dashed border-b mx-1'></div>
							<b>{totalPrice} руб.</b>
						</li>
					</ul>
					<button className='bg-red-600 hover:bg-red-500 rounded-3xl animate-bounce font-medium text-lg text-white h-14 w-full'>
						Оформить заказ
					</button>
				</div>
			</motion.div>
		</div>
	);
};
