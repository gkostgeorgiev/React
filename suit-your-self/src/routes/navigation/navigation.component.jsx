import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as SuitLogo } from '../../assets/suitLogo.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link>
                    <div className="logo-container" to='/'>
                        <SuitLogo className="logo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;