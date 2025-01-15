import React from 'react'
import MegaMenu from './MegaMenu'
import '../../mobilemenu.css'
import SearchInput from './SearchInput'
function MobileHeader() {
  return (
    <>
    <header className='mobile-header'>
        <div className="top-header-section">
            <div className="mobile-container">
                <div className="top-header">
                    <div className="top-mo-left">                        
                        <div className="mega-menu">
                            <MegaMenu />
                        </div>
                        <div className="logo-mobile">
                            <img src="https://thebullysupply.com/wp-content/uploads/2024/10/footer-logoo.png" alt="" />
                        </div>
                        {/* <div className="mega-menu">
                            <MegaMenu />
                        </div> */}
                    </div>
                    <div className="top-mo-right">
                        <div className="search-icon">
                            <SearchInput />
                            {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                        </div>
                        <div className="bell-icon">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-nav-cta-links">
            <div className="mobile-container">
                <div className="secon-nav-cta-sell">
                    <nav class="nav justify-content-center">
                        <a class="nav-link" href="#">Bullies</a>
                        <a class="nav-link" href="#">Pups</a>
                        <a class="nav-link" href="#">Studs</a>
                        <a class="nav-link" href="#">Breeders</a>
                        <a class="nav-link" href="#">Breedings</a>
                    </nav>
                    <div className="sell">
                        <a className='nav-link' href="#">Sell</a>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    </>
  )
}

export default MobileHeader
