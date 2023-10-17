import React from "react";

type DragonProps = {
    width: number,
    height: number,
    class: string,
};

const HextechIcon = (props: DragonProps) => {
    const { width, height } = props;
    return (
        <svg className={props.class} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path className="shape" fill="#81D9F5" fillRule="evenodd" clipRule="evenodd" d="M13.4142 3V5.78423L20 12.2808L13.4142 18.7773L11.0572 21V19.2414L4 12.2808L11.0572 5.32019L13.4142 3ZM15.1231 10.1346L17 11.9822L12 16.9041L7.00003 11.9822L8.87694 10.1346L12 13.2089L15.1231 10.1346ZM14.0624 9.09049L12 11.1207L9.9376 9.09055L12 7.06034L14.0624 9.09049Z"></path>
        </svg>
    );
};

export default HextechIcon;