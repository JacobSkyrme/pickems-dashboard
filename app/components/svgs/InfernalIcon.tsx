import React from "react";
import PropTypes from "prop-types";

const InfernalIcon = (props) => {
    const { width, height } = props

    return(<svg className={props.class}  width={width} height={height} viewBox="0 0 14 18" xmlns="https://www.w3.org/2000/svg"><path class="shape" fill="#F26C23" d="M6.185725,0 C6.185725,0 6.68325,2.9099 6.23805,3.343375 C5.79285,3.77685 2.274125,7.10675 2.274125,7.10675 L1.1004,5.78095 L0,9.82625 C0,9.82625 1.6954,11.38935 2.48955,14.728 L7,17 L13.4652,12.0666 L14,9.041025 L12.7162,7.765625 C12.7162,7.765625 12.951225,9.4052 12.354825,9.4052 C11.75825,9.4052 10.6764,6.8957 9.88715,6.8957 C9.098075,6.8957 8.401575,7.10115 6.9097,7.4508 C5.718475,7.7301 5.26015,9.698675 5.12365,10.48075 C5.090225,10.6729 5.171425,10.8668 5.33435,10.97985 L6.9097,12.347825 C6.9097,12.347825 8.385125,11.378325 8.385125,10.723825 C8.385125,10.221575 7.146825,10.252025 7.146825,9.30265 C7.146825,8.75 7.6391,8.52985 8.262625,8.52985 C9.99355,8.52985 10.6708,10.5721 10.6708,10.5721 C9.404675,13.03785 6.9951,14.595 6.9951,14.595 C6.9951,14.595 3.436475,12.154625 3.436475,10.63195 C3.436475,6.427225 8.33595,5.31125 8.33595,5.31125 L8.98555,3.1598 L6.185725,0 Z"></path></svg>)
}
InfernalIcon.propTypes = {
    width: PropTypes.number.isRequired, // Specify the data type and mark it as required
    height: PropTypes.number.isRequired, // Specify the data type and mark it as required
    class: PropTypes.string
}


export default InfernalIcon;