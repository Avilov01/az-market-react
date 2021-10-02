import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductCart } from '../redux/cartSlice';

export const CartItem = ({ imageUrl, name, price, id }) => {
	const dispatch = useDispatch();

	const onRemoveProductCart = () => {
		dispatch(removeProductCart({ id, price }));
	};

	return (
		<div className=' bg-white w-9/10 p-3 mx-2 mb-5 mt-2 group transition overflow-hidden ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 transform rounded-2xl flex justify-between items-center border border-opacity-60'>
			<img className=' h-20' src={imageUrl} alt='cart product' />
			<div className='flex flex-col justify-start'>
				<p className=' mr-5 whitespace-normal text-base leading-5 mb-1'>{name}</p>
				<b className='text-base'>{price} руб.</b>
			</div>
			{/* cart-btn-remove */}
			<div
				className=' shadow
						hover:shadow-md bg-gray-100 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-80 active:bg-opacity-40  active:shadow-inner transform cursor-pointer  opacity-50 hover:opacity-100 rounded-lg w-8 overflow-hidden transition duration-200 ease-in-out '>
				<img
					onClick={onRemoveProductCart}
					className=' transition ease-in-out duration-700 transform hover:rotate-90 opacity-70 h-full w-full p-2'
					src='/img/btn-remove.svg'
					alt='Remove'
				/>
			</div>
		</div>
	);
};
