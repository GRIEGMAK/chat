import React from 'react';

const Header = (props) => {
    const {headerName} = props
    return(
        <div>
            {headerName}
        </div>
    )
}

export default Header;