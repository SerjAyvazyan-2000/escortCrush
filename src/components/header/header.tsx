import './header.scss'

import {NavLink} from 'react-router-dom'

const Header = () => {
    return <header>
        <div className='header-cnt'>
            <div className='container'>
                <div className='header-top G-align-center'>
                    <button className='categories-burger  G-flex-column  mobile-block'>
                        <span></span>
                        <span></span>
                    </button>

                    <NavLink className='header-logo' to={'/'}>
                        <img src="/logo.svg" alt=""/>
                    </NavLink>

                    <div className='header-search-block G-align-center'>

                        <label className='header-search-label'>
                            <input name='search' placeholder='Search by name or keywords' type="text"/>
                        </label>

                        <div className='header-search-icon G-center'>
                            <i className='icon icon-search'></i>
                        </div>

                        <button className='header-search-nearby G-align-center'>
                            <i className='icon icon-map'></i>
                            <span>Find models nearby</span>
                        </button>

                    </div>


                    <div className='header-actions G-align-center'>
                        <button className='header-login G-align-center'>
                            <i className='icon icon-login'></i>
                            <span>Log in</span>
                        </button>

                        <button className='header-register G-align-center'>
                            <i className='icon icon-check'></i>
                            <span>Create profile</span>
                        </button>
                    </div>


                </div>

                <div className='header-bottom G-align-center'>
                    <button className='categories-burger G-flex-column desktop-block'>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className='header-nav'>
                        <ul className='G-align-center'>
                            <li>
                                <NavLink to="#">Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Escorts</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Elite</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">BDSM</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Erotic massage</NavLink>
                            </li>
                        </ul>

                    </nav>

                    <div className='header-tools G-align-center'>
                        <button className='header-location G-align-center'>
                            <i className='icon icon-geolocation'></i>
                            <span>City, State</span>
                        </button>

                        <button className='header-language G-align-center'>
                            <span>EN</span>
                            <i className='icon icon-arrowDown'></i>

                        </button>
                    </div>
                </div>

            </div>
            <div className='header-decor'></div>
        </div>


    </header>
};

export default Header;