import React from 'react'

const Header = () => {
    return(
        <div style={{backgroundColor: "black"}}>
            <div class="ui inverted segment">
                <div class="ui inverted secondary pointing menu">
                    {/* <div style={{display: "flex"}}> */}
                        <div className="left item" style={{justifyContent: "space-between"}}>
                            <div className="ui inverted button">
                                Block-Flix
                            </div>
                            <div className="ui inverted button">
                                View DVDs
                            </div>
                        </div>
                        <div className="right item">
                            <div className="ui inverted button">
                                Add New Photo
                            </div>
                        </div>
                    {/* </div> */}
                   
                </div>
            </div>
        </div>
    )
}

export default Header