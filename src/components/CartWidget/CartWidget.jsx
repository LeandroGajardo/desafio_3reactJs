import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = ({icon}) => {
    return (
        <span style={{fontSize:"25px",color:"yellow"}}>
            <FontAwesomeIcon icon={icon}/>
        </span>
    )
}

export default CartWidget
