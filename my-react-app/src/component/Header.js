import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="Navbar">
                <div className="Nav">
                    <div className="Nav-1">
                        <div className="Nav-1-1">
                            <a href="#"><img src="https://i.ibb.co/G371csj/SubFile.png" alt="SubFile" border="0" /></a>
                            <h6>Explore<span>Plus+</span></h6>
                        </div>
                    </div>
                    <div className="Nav-2">
                        <div className="search-input">
                            <button className="	fa fa-search"></button>
                            <input type="text " placeholder="Search for products,brands and more" />
                        </div>
                    </div>
                    <div className="Nav-3">
                        <div>
                            <div className="links">
                                <a href="#" class="fa fa-university icon-margin visible"></a>
                                <a href="#"> Seller</a>
                            </div>

                        </div>
                        <div>
                            <div className="links">
                                <a href="#" className="fa fa-user-o icon-margin visible"></a>
                                <a href="#">Seller</a>
                            </div>
                        </div>
                        <div>
                            <div className="links">
                                <a href="#" class="fa fa-shopping-cart icon-margin visible"></a>
                                <a href="#">Cart</a>
                            </div>
                        </div>
                        <div>
                            <div className="links">
                                <a href="#" className="fa fa-ellipsis-v"></a>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;