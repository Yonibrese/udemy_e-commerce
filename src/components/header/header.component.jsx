import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// imports from the reselect library
import { createStructuredSelector } from 'reselect';

//import the custom selectors that we created
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header"> 
        <Link  className="logo-container" to='/'>
            <Logo className="logo" />
        </Link> 
        <div className="options">
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/shop'>Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={()=> auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">Sign in</Link>
            }
            <CartIcon />
        </div> 
        {
            hidden ? null : <CartDropdown /> 
        }      
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);