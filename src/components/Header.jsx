import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/add-coffee'>Add Coffee</NavLink>
        </div>
    );
};

export default Header;
