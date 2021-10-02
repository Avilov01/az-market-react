import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../redux/cartSlice';

export const Card = ({ name, imageUrl, price, id, addToCart }) => {
	const dispatch = useDispatch();

	const cartItem = { name, imageUrl, price, id };

	const onClickPlus = () => {
		dispatch(addProductToCart(cartItem));
	};

	return (
		<div className='border border-opacity-80 p-5 rounded-3xl w-64 hover:shadow-2xl hover:-translate-y-2 transition duration-275 transform ease-in-out hover:border-opacity-50'>
			<div className=' pl-3 overflow-hidden'>
				<img className=' w-44 pb-2' src={imageUrl} alt='product' />
			</div>
			<h5 className='mb-3 leading-5 text-sm'>{name}</h5>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col leading-5'>
					<span className=' text-sm uppercase opacity-50'>Цена:</span>
					<b className='text-sm'>{price} руб.</b>
				</div>
				<div className='flex gap-2'>
					<div>
						<img
							className='cursor-pointer h-9'
							src='/img/plus.svg'
							alt='plus'
							onClick={onClickPlus}
						/>
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
