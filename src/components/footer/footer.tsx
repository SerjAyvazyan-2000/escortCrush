import './footer.scss'
import {NavLink} from "react-router-dom";


const Footer = () => {
    return <footer>
        <div className='footer-cnt'>
            <div className='footer-decor'></div>

            <div className='container'>
                <div className='footer-body G-justify-between'>

                    <div className='footer-left-column G-align-start'>

                        <div className='footer-logo-column'>
                            <NavLink to={'/'}>
                                <img src="/logo.svg" alt=""/>
                            </NavLink>
                            <p className='footer-clue desktop-block'>© 2025, EscortCrush is a project created for the convenient search of providers, erotic
                                massage
                                models, and escort models throughout the USA.</p>
                        </div>

                        <div className='footer-right-column G-flex-column mobile-block'>
                            <div className='footer-buttons G-align-center'>
                                <button className='footer-login'>
                                    <i className='icon icon-login mobile-block'></i>
                                   <span>Log in</span>
                                </button>

                                <button className='footer-register G-align-center'>
                                    <i className='icon icon-check'></i>
                                    <span>Create profile</span>
                                </button>
                            </div>



                        </div>

                        <nav className='footer-nav'>
                            <ul className='G-flex-column'>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>About the project</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Locations</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Advertising</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Pricing Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Contacts</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>Privacy Policy</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <p className='footer-clue mobile-block'>© 2025, EscortCrush is a project created for the convenient search of providers, erotic
                            massage
                            models, and escort models throughout the USA.</p>

                        <button className='back-top-btn mobile-block'>Back to top</button>

                    </div>

                    <div className='footer-right-column G-flex-column desktop-block'>
                        <div className='footer-buttons G-align-center'>
                            <button className='footer-login'>Log in</button>

                            <button className='footer-register G-align-center'>
                                <i className='icon icon-check'></i>
                                <span>Create profile</span>
                            </button>
                        </div>

                        <button className='back-top-btn'>Back to top</button>


                    </div>

                </div>
            </div>


        </div>

    </footer>
};

export default Footer;