import React from "react";
import PropTypes from "prop-types";
type DragonProps = {
    width: number,
    height: number,
    className: string,
};

const MountainIcon = (props: DragonProps) => {
    const { width, height, className } = props;
    return(<svg className={className} width={width} height={height} viewBox="0 0 14 18" xmlns="https://www.w3.org/2000/svg"><path  fill="#A8805D" d="M3,4.5 L6,16 L5,17 L1,12.0302388 L1,7.07612197 L3,4.5 Z M6.50012207,13 L4.5,3 L6,1 L8,1 L9.5,3 L7.5,13 L6.50012207,13 Z M11,4.5 L13,7.07612197 L13,12.0302388 L9,17 L8,16 L11,4.5 Z"></path></svg>)
}


export default MountainIcon;