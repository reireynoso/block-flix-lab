import React from 'react'

const Header = () => {
    return(
        <div style={{backgroundColor: "black"}}>
            {/* left */}
            <div>
                <div>
                    Logo
                </div>

                <div>
                    DVDs
                </div>
            </div>

            {/* right */}
            <div>
                Cart
            </div>
        </div>
    )
}

export default Header