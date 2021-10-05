import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductCart } from '../redux/cartSlice';

export const Card = ({ name, imageUrl, price, id, isProductInCart }) => {
	const dispatch = useDispatch();

	const cartItem = { name, imageUrl, price, id };

	const onAddProductCart = () => {
		dispatch(addProductToCart(cartItem));
	};

	const onRemoveProductCart = () => {
		dispatch(removeProductCart({ id, price }));
	};

	return (
		<div className='border border-opacity-80 p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-275 transform ease-in-out hover:border-opacity-50'>
			<div className=' pl-3 overflow-hidden'>
				<img className=' w-44 pb-2' src={imageUrl} alt='product' />
			</div>
			<h5 className='mb-3 leading-5 text-sm'>{name}</h5>
			<div className='flex justify-between items-center'>
				<span className='  text-sm uppercase opacity-50'>Цена:</span>
				<b className='  text-sm'>{price} руб.</b>
			</div>
			<div className='flex justify-between mt-3 items-center'>
				<div>
					{isProductInCart(id) ? (
						<button
							onClick={onRemoveProductCart}
							className=' hover:bg-gray-300 w-24 bg-gray-200 text-base font-bold py-1.5 rounded-md'>
							в корзине
						</button>
					) : (
						<button
							onClick={onAddProductCart}
							className=' hover:bg-red-600 w-24 bg-red-500 text-white text-base font-bold py-1.5 rounded-md'>
							в корзину
						</button>
					)}
				</div>
				<div>
					<svg
						onClick={() => alert('Функционал в стадии доработки, повторите позже!')}
						className=' fill-current text-gray-400  hover:opacity-80 opacity-30 cursor-pointer h-7 hover:shadow-2xl'
						alt=''
						x='0px'
						y='0px'
						viewBox='0 0 16 16'>
						<path
							d='M8.612,2.347L8,2.997l-0.612-0.65c-1.69-1.795-4.43-1.795-6.12,0c-1.69,1.795-1.69,4.706,0,6.502l0.612,0.65L8,16
	l6.12-6.502l0.612-0.65c1.69-1.795,1.69-4.706,0-6.502C13.042,0.551,10.302,0.551,8.612,2.347z'
						/>
					</svg>

					{/* <img
						onClick={() => alert('Функционал в стадии доработки, повторите позже!')}
						className=' fill-current text-pink-400  hover:opacity-80 opacity-30 cursor-pointer h-8 hover:shadow-2xl'
						src='/img/liked.svg'
						alt=''
					/> */}
				</div>
			</div>
		</div>
	);
};
