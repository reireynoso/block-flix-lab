import React from 'react'
import FilterAndSortComponent from './FilterAndSortComponent'

const Header = () => {
    return(
        <div className="header">
            {/* left */}
            <div className="left-menu">
                <div style={{display: "flex"}}>
                    <div>
                        <i class="material-icons">
                            video_library
                        </i>
                    </div>
                    <div>
                        E-Commerce Lab
                    </div>
                </div>

                <div>
                    <FilterAndSortComponent/>
                </div>
            </div>

            {/* right */}
            <div className="right-menu">
                <div>
                    <div style={{display: "flex"}}>
                        <div>
                            <i class="material-icons">
                            shopping_cart
                            </i>
                        </div>
                        <div>
                            Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header