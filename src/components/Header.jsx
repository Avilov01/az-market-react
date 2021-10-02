import React from 'react';

export const Header = ({ onClickCart, totalPrice }) => {

	return (
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
					<img
						className='h-6 opacity-70 cursor-pointer'
						src='/img/cart.svg'
						alt='cart'
						onClick={() => onClickCart()}
					/>
					<span className='pl-2'>{totalPrice} руб.</span>
				</li>
				<li>
					<img className='h-6 opacity-70' src='/img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	);
};
