import { ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'>
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory('categories')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mens-clothing'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/womensclothing'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Women's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewerly'
                        onClick={() => context.setSearchByCategory('jewerly')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Jewely
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    este.fa.141@hotmail.es
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Sign In
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingBagIcon className='h-5 w-5 text-black' />
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;