import React from "react";

const Icon = (props) => {
  const style = {
    transform: "rotate(" + props.rotate + "deg)",
    transition: "transform 0.15s ease-out",
  };
  const pathStyle = {
    fill:
      props.disabled && props.disabledColor
        ? props.disabledColor
        : props.fill
        ? props.fill
        : "inherit",
  };
  const gStyle = {
    stroke: props.stroke,
  };
  const fill =
    props.disabled && props.disabledColor
      ? props.disabledColor
      : props.fill
      ? props.fill
      : "inherit";
  switch (props.type) {
    case "home":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 20 17"
        >
          <path style={pathStyle} d="M8,17v-6h4v6h5V9h3L10,0L0,9h3v8H8z" />
        </svg>
      );
    case "recycleBin":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 512 512"
        >
          <g style={gStyle}>
            <polygon
              fill={fill}
              points="353.574,176.526 313.496,175.056 304.807,412.34 344.885,413.804"
            />
            <rect
              fill={fill}
              x="235.948"
              y="175.791"
              width="40.104"
              height="237.285"
            />
            <polygon
              fill={fill}
              points="207.186,412.334 198.497,175.049 158.419,176.52 167.109,413.804"
            />
            <path
              style={pathStyle}
              d="M17.379,76.867v40.104h41.789L92.32,493.706C93.229,504.059,101.899,512,112.292,512h286.74 c10.394,0,19.07-7.947,19.972-18.301l33.153-376.728h42.464V76.867H17.379z M380.665,471.896H130.654L99.426,116.971h312.474L380.665,471.896z"
            />
          </g>
          <g style={gStyle}>
            <path
              style={pathStyle}
              d="M321.504,0H190.496c-18.428,0-33.42,14.992-33.42,33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42C354.924,14.992,339.932,0,321.504,0z"
            />
          </g>
        </svg>
      );

    case "clear":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="-4.5 -4.5 24 24"
        >
          <path
            style={pathStyle}
            d="M7,8.4l-5.3,5.3C1.6,13.9,1.4,14,1.2,14c-0.1,0-0.1,0-0.1,0H1c-0.1,0-0.1,0-0.1,0 c-0.5-0.1-0.9-0.6-0.8-1.2c0,0,0-0.1,0-0.1c0-0.1,0.1-0.2,0.2-0.3c0,0,0-0.1,0.1-0.1L5.6,7L0.3,1.7c0,0-0.1-0.1-0.1-0.1 C-0.1,1.2,0,0.5,0.4,0.2C0.5,0.1,0.7,0,0.8,0c0.3,0,0.6,0,0.8,0.2c0,0,0.1,0,0.1,0.1L7,5.6l5.3-5.3c0,0,0.1-0.1,0.1-0.1 c0.4-0.3,0.9-0.3,1.3,0c0.4,0.3,0.5,0.9,0.1,1.4c0,0,0,0.1-0.1,0.1L8.4,7l5.3,5.3c0,0,0.1,0.1,0.1,0.1c0.3,0.4,0.3,1-0.1,1.3 c-0.1,0.1-0.3,0.2-0.5,0.3c-0.1,0-0.1,0-0.1,0H13c-0.1,0-0.1,0-0.1,0c-0.2,0-0.4-0.1-0.5-0.3L7,8.4z"
          />
        </svg>
      );
    case "add":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M11 11V6.007C11 5.45 11.444 5 12 5c.552 0 1 .45 1 1.007V11h4.993c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H13v4.993C13 18.55 12.556 19 12 19c-.552 0-1-.45-1-1.007V13H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1H11z"
          />
        </svg>
      );
    case "stop":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <g transform="rotate(45,12,12)">
            <path
              style={pathStyle}
              d="M11 11V6.007C11 5.45 11.444 5 12 5c.552 0 1 .45 1 1.007V11h4.993c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H13v4.993C13 18.55 12.556 19 12 19c-.552 0-1-.45-1-1.007V13H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1H11z"
            />
          </g>
        </svg>
      );
    case "pen":
      return (
        <svg
          className={props.className}
          style={style}
          width={props.width}
          onClick={props.onClick}
          height={props.height ? props.height : props.width}
          viewBox="0 0 18 18"
        >
          <path
            style={pathStyle}
            d="M0,14.3V18h3.8L14.8,6.9l-3.8-3.8L0,14.3z M17.7,4c0.4-0.4,0.4-1,0-1.4c0,0,0,0,0,0l-2.3-2.3 c-0.4-0.4-1-0.4-1.4,0c0,0,0,0,0,0l-1.8,1.8l3.8,3.8C15.9,5.9,17.7,4,17.7,4z"
          />
        </svg>
      );
    case "envelope":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 512 512"
        >
          <path
            style={pathStyle}
            d="M318.031,254.969L490.531,448H21.453l172.5-193.031L256,309.25L318.031,254.969z M487.688,64H24.297L256,266.75L487.688,64z   M342.125,233.906L512,424V85.25L342.125,233.906z M0,85.25V424l169.859-190.125L0,85.25z"
          />
        </svg>
      );
    case "magnify":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 451 451"
        >
          <path
            style={pathStyle}
            d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3 s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4 C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3 s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
          />
        </svg>
      );
    case "eye":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 22 15"
        >
          <path
            style={pathStyle}
            d="M11,0C6,0,1.7,3.1,0,7.5C1.7,11.9,6,15,11,15s9.3-3.1,11-7.5C20.3,3.1,16,0,11,0z M11,12.5 c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S13.8,12.5,11,12.5z M11,4.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,4.5,11,4.5z"
          />
        </svg>
      );
    case "filter":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 971.986 971.986"
        >
          <g>
            <path
              style={pathStyle}
              d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3
                    c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873
                    c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"
            />
          </g>
        </svg>
      );
    case "message":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 16 20"
        >
          <path
            style={pathStyle}
            d="M8,19.5c1.1,0,2-0.9,2-2H6C6,18.6,6.9,19.5,8,19.5z M14,13.5v-5c0-3.1-1.6-5.6-4.5-6.3V1.5 C9.5,0.7,8.8,0,8,0S6.5,0.7,6.5,1.5v0.7C3.6,2.9,2,5.4,2,8.5v5l-2,2v1h16v-1L14,13.5z"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 20 20"
        >
          <path
            style={pathStyle}
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,3A3,3,0,1,1,9,8,3,3,0,0,1,12,5Zm0,14.2a7.2,7.2,0,0,1-6-3.22c.03-1.99,4-3.08,6-3.08s5.97,1.09,6,3.08A7.2,7.2,0,0,1,12,19.2Z"
            transform="translate(-2 -2)"
          />
        </svg>
      );
    case "settings2":
      return (
        <svg
          viewBox="0 0 24 24"
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
        >
          <path d="M 21.175 13.175 C 21.228 12.786 21.254 12.393 21.252 12.001 C 21.255 11.607 21.225 11.213 21.162 10.825 L 23.771 8.851 C 24.002 8.665 24.067 8.346 23.926 8.089 L 21.458 3.937 C 21.308 3.679 20.988 3.563 20.7 3.662 L 17.628 4.863 C 16.991 4.383 16.291 3.987 15.546 3.688 L 15.084 0.512 C 15.036 0.216 14.775 -0.001 14.467 0 L 9.532 0 C 9.227 0 8.969 0.22 8.929 0.512 L 8.467 3.688 C 7.723 3.99 7.022 4.384 6.384 4.863 L 3.313 3.662 C 3.025 3.555 2.701 3.673 2.554 3.937 L 0.1 8.089 C -0.063 8.341 0.004 8.676 0.254 8.851 L 2.864 10.825 C 2.718 11.601 2.709 12.396 2.837 13.175 L 0.228 15.151 C -0.002 15.337 -0.067 15.655 0.075 15.913 L 2.542 20.063 C 2.692 20.323 3.012 20.437 3.3 20.338 L 6.372 19.139 C 7.007 19.617 7.708 20.013 8.454 20.312 L 8.916 23.488 C 8.966 23.78 9.226 23.997 9.532 24 L 14.467 24 C 14.773 24.004 15.035 23.784 15.071 23.488 L 15.533 20.312 C 16.28 20.015 16.981 19.619 17.615 19.139 L 20.687 20.338 C 20.975 20.445 21.299 20.327 21.444 20.063 L 23.912 15.913 C 24.07 15.658 24.004 15.329 23.759 15.151 Z M 11.999 16.5 C 8.438 16.5 6.213 12.751 7.992 9.75 C 9.774 6.75 14.226 6.75 16.005 9.75 C 16.412 10.435 16.626 11.211 16.626 12.001 C 16.617 14.481 14.551 16.492 11.999 16.5 Z" />
        </svg>
      );
    case "konton":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 19.83 17"
        >
          <g id="Group_262" data-name="Group 262" transform="translate(-2 -4)">
            <circle
              id="Ellipse_118"
              data-name="Ellipse 118"
              cx="4"
              cy="4"
              r="4"
              transform="translate(6 4)"
            />
            <path
              id="Path_110"
              data-name="Path 110"
              d="M10.67,13.02c-.22-.01-.44-.02-.67-.02a12.876,12.876,0,0,0-6.61,1.82A2.922,2.922,0,0,0,2,17.35V20h9.26A6.963,6.963,0,0,1,10,16,7.072,7.072,0,0,1,10.67,13.02Z"
            />
            <path
              id="Path_111"
              data-name="Path 111"
              d="M20.75,16a4.338,4.338,0,0,0-.06-.63l1.14-1.01-1-1.73-1.45.49a3.647,3.647,0,0,0-1.08-.63L18,11H16l-.3,1.49a3.647,3.647,0,0,0-1.08.63l-1.45-.49-1,1.73,1.14,1.01a4.338,4.338,0,0,0-.06.63,4.338,4.338,0,0,0,.06.63l-1.14,1.01,1,1.73,1.45-.49a3.647,3.647,0,0,0,1.08.63L16,21h2l.3-1.49a3.647,3.647,0,0,0,1.08-.63l1.45.49,1-1.73-1.14-1.01A4.338,4.338,0,0,0,20.75,16ZM17,18a2,2,0,1,1,2-2A2.006,2.006,0,0,1,17,18Z"
            />
          </g>
        </svg>
      );
    case "logoff":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 18 18"
        >
          <path
            style={pathStyle}
            d="M7.1,12.6L8.5,14l5-5l-5-5L7.1,5.4L9.7,8H0v2h9.7L7.1,12.6z M16,0H2C0.9,0,0,0.9,0,2v4h2V2h14v14H2 v-4H0v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V2C18,0.9,17.1,0,16,0z"
          />
        </svg>
      );
    case "check":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l -1.41 -1.41z"
          />
        </svg>
      );

    case "arrow":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M15.965 19c-.06-.004-.076-.004-.135-.014a1.003 1.003 0 0 1-.538-.278l-6-6c-.041-.045-.053-.055-.09-.103a1.001 1.001 0 0 1 0-1.209c.037-.048.049-.059.09-.103l6-6c.045-.041.055-.053.103-.09a1.003 1.003 0 0 1 1.034-.106c.312.148.53.457.565.8a1.003 1.003 0 0 1-.198.707c-.036.049-.048.059-.09.103L11.415 12l5.293 5.293.046.05c.039.047.05.058.083.11a1.002 1.002 0 0 1-.667 1.533c-.06.01-.075.01-.135.014h-.069z"
          />
        </svg>
      );
    case "rightArrow":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 268 268"
        >
          <path
            style={pathStyle}
            d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
          />
        </svg>
      );
    case "calender":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          />
        </svg>
      );
    case "copy":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 20 20"
        >
          <g fill="none" fillRule="evenodd" stroke="#FFF" strokeWidth="2">
            <path
              style={pathStyle}
              d="M14.238 14.28L5.182 4.656H2.406C1.634 4.657 1 5.304 1 6.111v10.635c0 .807.634 1.454 1.406 1.454h10.426c.772 0 1.406-.647 1.406-1.454v-2.467z"
            />
            <rect
              fill={props.fill2 ? props.fill2 : "#182d58"}
              width="13.238"
              height="13.543"
              x="4.884"
              y="1"
              rx="2"
            />
          </g>
        </svg>
      );
    case "crowns":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <g fill="#838c99" fillRule="evenodd" transform="translate(3 3)">
            <path
              style={pathStyle}
              d="M4.15 10.762l-1.098 1.015V15H0V0h3.052v8.31l.592-.703 2.925-3.173h3.665l-4.13 4.404L10.593 15H7.086L4.15 10.762zM18.958 7.08a8.954 8.954 0 0 0-1.099-.078c-1.154 0-1.911.361-2.27 1.084V15h-3.052V4.434h2.883l.084 1.26c.613-.97 1.461-1.456 2.546-1.456.337 0 .654.043.95.127l-.042 2.715z"
            />
          </g>
        </svg>
      );

    case "styck":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <g fill="#838c99" fillRule="evenodd" transform="translate(3 3)">
            <path
              style={pathStyle}
              d="M6.62 11.502c0-.387-.181-.692-.543-.915-.361-.223-.941-.423-1.74-.598C1.68 9.397.351 8.199.351 6.393c0-1.053.411-1.932 1.234-2.638.823-.705 1.898-1.058 3.227-1.058 1.418 0 2.552.355 3.403 1.064.85.709 1.275 1.63 1.275 2.763H6.506c0-.453-.138-.828-.413-1.124-.276-.296-.706-.444-1.291-.444-.503 0-.892.12-1.167.362a1.17 1.17 0 0 0-.413.921c0 .35.156.634.47.85.313.215.841.402 1.585.559.743.157 1.37.334 1.88.532 1.576.614 2.364 1.677 2.364 3.19 0 1.082-.437 1.958-1.311 2.627C7.335 14.666 6.206 15 4.822 15c-.936 0-1.767-.177-2.493-.532-.727-.354-1.296-.84-1.71-1.458A3.53 3.53 0 0 1 0 11.009h2.83c.027.563.223.994.588 1.294.365.3.854.45 1.466.45.572 0 1.004-.116 1.296-.346.293-.23.44-.532.44-.905zM15.975 0v2.917h1.91V5.24h-1.91v5.921c0 .439.08.753.238.943.158.19.46.285.908.285.33 0 .623-.025.878-.076v2.4a5.814 5.814 0 0 1-1.807.286c-2.093 0-3.16-1.122-3.201-3.366V5.24H11.36V2.917h1.632V0h2.984z"
            />
          </g>
        </svg>
      );
    case "startare":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 17 21"
        >
          <g fill="#EBEEF1" fillRule="nonzero">
            <path
              style={pathStyle}
              d="M10.11 20.798c3.202-.646 5.678-3.152 6.243-6.32.565-3.168-.895-6.354-3.683-8.034a.999.999 0 0 0-1.002-.033.967.967 0 0 0-.512.848v.186a.998.998 0 0 0 .49.837c2.189 1.374 3.193 4.005 2.465 6.458-.728 2.452-3.013 4.138-5.61 4.138-2.596 0-4.881-1.686-5.609-4.138-.728-2.453.276-5.084 2.465-6.458a.99.99 0 0 0 .487-.837V7.26a.967.967 0 0 0-.506-.843.999.999 0 0 0-.996.021C1.052 8.431-.31 12.46 1.11 15.996c1.42 3.536 5.214 5.56 9 4.802z"
            />
            <path
              style={pathStyle}
              d="M7.172 11.545c0 .722.594 1.307 1.328 1.307.734 0 1.328-.585 1.328-1.307v-7.58c0-.144.119-.261.266-.261h1.062c.215 0 .41-.127.492-.323a.517.517 0 0 0-.116-.57l-.4-.393L8.876.197a.536.536 0 0 0-.752 0l-2.256 2.22-.4.394a.517.517 0 0 0-.117.57.531.531 0 0 0 .493.324h1.062c.147 0 .266.117.266.26v7.58z"
            />
          </g>
        </svg>
      );
    case "arrCirkel":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 28 22"
          width={props.width}
          height={props.height ? props.height : props.width}
          style={style}
        >
          <defs>
            <path style={pathStyle} id="a" d="M0 .048h27.922v18.195H0z" />
          </defs>
          <g fill="#DADFE7" fillRule="evenodd">
            <g transform="translate(0 2.345)">
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <path
                style={pathStyle}
                d="M24.944 8.369c-.575 0-1.04-.473-1.04-1.055 0-.583.465-1.055 1.04-1.055s1.04.472 1.04 1.055c0 .582-.465 1.055-1.04 1.055m-7.36 1.775A1.236 1.236 0 0 1 16.357 8.9c0-.688.55-1.245 1.227-1.245.678 0 1.228.557 1.228 1.245 0 .687-.55 1.244-1.228 1.244m-7.251 0A1.236 1.236 0 0 1 9.105 8.9c0-.688.55-1.245 1.228-1.245.678 0 1.227.557 1.227 1.245 0 .687-.55 1.244-1.227 1.244m-7.037-1.78c-.572 0-1.036-.47-1.036-1.05 0-.58.464-1.051 1.036-1.051.573 0 1.037.47 1.037 1.05 0 .58-.464 1.05-1.037 1.05m22.417-4.438c-1.384 0-1.984 1.718-2.24 3.427-.392-.165-.806-.32-1.239-.465.116-1.355.284-6.313-2.02-6.313-1.927 0-2.192 3.437-2.244 5.35a29.034 29.034 0 0 0-2.096-.206c.11-1.415.17-5.67-1.878-5.67-2.074 0-2.08 4.33-2.062 5.676a28.99 28.99 0 0 0-1.94.191c.075-1.944-.16-5.402-2.09-5.402-2.37 0-2.29 5.17-2.26 6.382-.348.116-.684.24-1.006.37C4.49 5.565 4 3.881 2.635 3.881c-2.752 0-2.61 7.627-2.61 7.627l.01-.001A2.895 2.895 0 0 0 0 11.95c0 .985.502 1.917 1.396 2.747-.08-.767-.161-1.49-.102-2.278a14.281 14.281 0 0 1 .09-1.39c.054-.291.127-.57.224-.825.293-.763.81-1.308 1.687-1.308.732 0 1.223.496 1.548 1.239.109.248.199.523.273.817.055.241.1.484.139.727.037.244.067.488.09.736.134 1.525.07 2.95-.042 4.473.626.223 1.103.423 1.809.596.058-1.24.191-2.484.462-3.687.052-.21.11-.412.173-.609.443-1.364 1.178-2.413 2.392-2.413 1.733 0 2.347 2.16 2.528 4.32.018.216.032.432.042.645.001.842 0 1.667-.034 2.484a57.64 57.64 0 0 0 1.95.015c.037-1.487.163-2.994.49-4.442.052-.21.109-.412.172-.609.444-1.364 1.179-2.413 2.392-2.413 1.733 0 2.348 2.16 2.528 4.32.019.216.032.432.042.645.001.633.002 1.255-.013 1.872.77-.169 1.308-.369 1.99-.596-.027-2.007.024-4.035.504-6.022.095-.298.205-.578.331-.83.378-.757.906-1.261 1.64-1.261.98 0 1.513.633 1.79 1.478.055.17.1.347.136.53.264 1.207.182 2.388.085 3.585.764-.778 1.19-1.64 1.19-2.546 0-.123-.009-.245-.024-.366.067-1.124.35-7.66-2.165-7.66"
                mask="url(#b)"
              />
            </g>
            <path
              style={pathStyle}
              d="M2.545 5.733a1.03 1.03 0 0 0 1.019-1.042 1.03 1.03 0 0 0-1.019-1.042A1.03 1.03 0 0 0 1.527 4.69a1.03 1.03 0 0 0 1.018 1.042M14.127 1.824a.902.902 0 0 0 .891-.912.902.902 0 0 0-.89-.912.902.902 0 0 0-.892.912c0 .504.4.912.891.912M7.764 2.345a.902.902 0 0 0 .89-.912.902.902 0 0 0-.89-.912.902.902 0 0 0-.891.912c0 .504.399.912.89.912M20.236 2.345a.902.902 0 0 0 .891-.912.902.902 0 0 0-.89-.912.902.902 0 0 0-.892.912c0 .504.4.912.891.912M25.71 5.994a1.03 1.03 0 0 0 1.017-1.042 1.03 1.03 0 0 0-1.018-1.043 1.03 1.03 0 0 0-1.018 1.043 1.03 1.03 0 0 0 1.018 1.042"
            />
          </g>
        </svg>
      );
    case "arrKultur":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#CBD2DC"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(1 1)"
          >
            <path
              style={pathStyle}
              d="M18.24 8c0-4.418-4.083-8-9.12-8C4.083 0 0 3.582 0 8c0 3.331 2.322 6.18 5.624 7.381.753.289 1.59.217 2.287-.198a2.83 2.83 0 0 0 1.326-1.951 2.946 2.946 0 0 1 1.594-2.011 2.75 2.75 0 0 1 2.502.073"
            />
            <ellipse cx="4.44" cy="10.5" rx="1.44" ry="1.5" />
            <ellipse cx="5.44" cy="5.5" rx="1.44" ry="1.5" />
            <ellipse cx="10.2" cy="3.25" rx="1.2" ry="1.25" />
            <ellipse cx="14.2" cy="6.25" rx="1.2" ry="1.25" />
            <path
              style={pathStyle}
              d="M17.24 12.072l-4.165 1.735a.125.125 0 0 0-.075.116c0 .051.03.097.075.116l4.166 1.736a.924.924 0 0 0 .712 0l4.444-1.852-4.444-1.851a.917.917 0 0 0-.712 0zM14 17v1.5a3.721 3.721 0 0 0 2.88 1 3.721 3.721 0 0 0 2.88-1V17M22 14v5M22 21v1"
            />
          </g>
        </svg>
      );
    case "arrAnnan":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 22 22"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="10" cy="10" r="10" stroke="#DBE0E8" />
            <path
              fill="#C6D2E0"
              d="M6.033 12.244l-.27-.728H3.458l-.27.744c-.107.29-.197.486-.272.588-.074.101-.197.152-.367.152a.532.532 0 0 1-.383-.162A.502.502 0 0 1 2 12.47c0-.08.013-.161.039-.246.025-.084.068-.202.127-.352l1.45-3.768.15-.39a1.99 1.99 0 0 1 .185-.378.761.761 0 0 1 .259-.243A.78.78 0 0 1 4.606 7c.16 0 .294.031.4.093a.776.776 0 0 1 .26.24c.065.097.12.202.166.314.045.112.102.262.172.45l1.481 3.743c.116.285.174.492.174.622a.52.52 0 0 1-.164.37.534.534 0 0 1-.397.168.504.504 0 0 1-.232-.05.477.477 0 0 1-.162-.134 1.246 1.246 0 0 1-.141-.261c-.05-.118-.094-.221-.13-.31zm-2.273-1.61h1.693L4.6 8.238l-.84 2.394zm7.994-2.629H9.49V9.49h1.891c.176 0 .307.04.393.121a.42.42 0 0 1 .13.323.41.41 0 0 1-.132.32c-.088.08-.218.119-.39.119H9.49v1.912c0 .242-.053.422-.16.54a.532.532 0 0 1-.412.176.534.534 0 0 1-.416-.178c-.107-.119-.16-.298-.16-.538V7.819c0-.169.024-.306.073-.413a.462.462 0 0 1 .23-.234.948.948 0 0 1 .4-.073h2.708c.183 0 .319.042.408.125a.426.426 0 0 1 .133.326.43.43 0 0 1-.133.33c-.09.084-.225.125-.408.125zm2.499-.233l1.284 3.89 1.287-3.918c.067-.206.118-.349.151-.43a.57.57 0 0 1 .167-.217.48.48 0 0 1 .317-.097.547.547 0 0 1 .541.526c0 .058-.008.121-.023.188a1.738 1.738 0 0 1-.058.198l-.07.2-1.373 3.792a13.21 13.21 0 0 1-.147.413c-.049.13-.105.246-.17.345a.769.769 0 0 1-.257.243.758.758 0 0 1-.392.095.771.771 0 0 1-.393-.093.754.754 0 0 1-.259-.245 1.827 1.827 0 0 1-.172-.347c-.049-.129-.098-.266-.147-.411l-1.35-3.76a7.292 7.292 0 0 0-.071-.202 1.593 1.593 0 0 1-.062-.214.933.933 0 0 1-.025-.194c0-.134.053-.257.158-.368A.527.527 0 0 1 13.588 7c.196 0 .334.061.415.184.082.123.165.319.25.588z"
            />
          </g>
        </svg>
      );
    case "arrMigration":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 21 21"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="9.5" cy="9.5" r="9.5" stroke="#DBE0E8" />
            <path
              fill="#C6D2E0"
              d="M11.902 12.974l-.463-1.246H7.495L7.032 13c-.181.497-.336.832-.464 1.006-.128.174-.337.26-.628.26a.911.911 0 0 1-.655-.277.859.859 0 0 1-.285-.63c0-.135.022-.275.066-.42.044-.144.117-.345.219-.603L7.766 5.89l.255-.667c.1-.26.205-.476.318-.647.112-.172.26-.31.443-.417.183-.106.41-.159.678-.159.274 0 .502.053.685.16.183.105.331.242.444.409.112.167.207.346.284.538.077.192.176.449.295.77l2.534 6.406c.199.488.298.842.298 1.064 0 .23-.094.441-.281.633a.914.914 0 0 1-.679.288.862.862 0 0 1-.397-.085.817.817 0 0 1-.278-.23 2.133 2.133 0 0 1-.241-.447c-.086-.201-.16-.378-.222-.532zm-3.891-2.756h2.899L9.447 6.12l-1.436 4.098z"
            />
          </g>
        </svg>
      );
    case "arrUndefined":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 21 21"
        >
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="9.5" cy="9.5" r="9.5" stroke="#DBE0E8" />
            <path fill="#C6D2E0" d="" />
          </g>
        </svg>
      );
    case "subDirectoryRight":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <g transform="translate(24,0) scale(-1,1)">
            <path
              style={pathStyle}
              d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"
            />
          </g>
        </svg>
      );
    case "subDirectoryLeft":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"
          />
        </svg>
      );
    case "menuDots":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 5 23"
        >
          <g fillRule="evenodd">
            <circle fill={fill} cx="2.5" cy="2.5" r="2.5" />
            <circle fill={fill} cx="2.5" cy="11.5" r="2.5" />
            <circle fill={fill} cx="2.5" cy="20.5" r="2.5" />
          </g>
        </svg>
      );
    case "menuBars":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      );
    case "arrType":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
          />
        </svg>
      );
    case "avd":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7a2.5 2.5 0 0 0 0 5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
          />
        </svg>
      );
    case "samv":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
          />
        </svg>
      );
    case "led":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
          />
        </svg>
      );
    case "info":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 24 24"
        >
          <path
            style={pathStyle}
            d="M11,17 L13,17 L13,11 L11,11 L11,17 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M11,9 L13,9 L13,7 L11,7 L11,9 Z"
            id="path-1"
          ></path>
        </svg>
      );
    case "oblArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 46 46"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              style={pathStyle}
              d="M45 22.622c.03 12.225-9.776 22.2-22 22.378A21.674 21.674 0 0 1 1 23.384C.966 11.157 10.774 1.177 23 1a21.676 21.676 0 0 1 22 21.622zM23 27.01v-14"
            />
            <path
              style={pathStyle}
              d="M22.982 31.01a.49.49 0 0 0-.482.51c.01.273.233.49.506.49a.492.492 0 0 0 .482-.51.506.506 0 0 0-.488-.49h-.01"
            />
          </g>
        </svg>
      );
    case "aboutArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 48 46"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              style={pathStyle}
              d="M21.898 39.428c-2.43-2.884-8.844-5.7-18.93-6.026a2 2 0 0 1-1.968-2V3.022a2 2 0 0 1 2.036-2C16.116 1.458 23 6.088 23 9.6c0-3.502 7.728-8.108 19.956-8.576a2 2 0 0 1 2.044 2v25.962M23 9.602v22.384M18 10.986A49.528 49.528 0 0 0 6.972 8.422M29 19.986a49.522 49.522 0 0 1 11.03-2.564M18 19.986a49.528 49.528 0 0 0-11.028-2.564M18 27.986A49.886 49.886 0 0 0 6.87 25.4M29 10.986A49.788 49.788 0 0 1 40.134 8.4"
            />
            <path
              style={pathStyle}
              d="M47 44.986v-2.2a5.776 5.776 0 0 0-5.494-5.8H37v-9.5a2.5 2.5 0 1 0-5 0v14.5l-3.042-4.278a2.1 2.1 0 1 0-3.716 1.956l2.8 5.322"
            />
          </g>
        </svg>
      );
    case "deltArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              stroke="#838C99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M42.8 36.666v4.972a2 2 0 0 1-1.268 1.86l-6.03 2.374a2 2 0 0 1-1.4 0l-6.03-2.374a2 2 0 0 1-1.268-1.86v-4.972"
            />
            <path
              stroke="#838C99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M34.416 30.16L22.8 35l11.616 4.84a1 1 0 0 0 .768 0l10.508-4.378a.5.5 0 0 0 0-.924L35.184 30.16a1 1 0 0 0-.768 0zM22.8 35v7M20 29v-2c0-5.523-4.477-10-10-10S0 21.477 0 27v7h5l1 12h8l1-12h2"
            />
            <circle
              cx="10"
              cy="7"
              r="7"
              stroke="#838C99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <circle
              cx="27"
              cy="8"
              r="6"
              stroke="#838C99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              stroke="#838C99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M36.4 23.97a10 10 0 0 0-14.524-5.638"
            />
          </g>
        </svg>
      );
    case "kulturArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 50 50"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              style={pathStyle}
              d="M26.597 17.815v8.426l-6.387 1.953-6.387-1.953v-8.426"
            />
            <path
              style={pathStyle}
              d="M32.984 15.42L20.21 10.628l-12.775 4.79 12.775 4.79zM7.435 15.42v6.386M47.93 11.815c-2.785 4.205-8.902 3.012-11.284 6.73a5.874 5.874 0 1 0 9.896 6.332 13.839 13.839 0 0 0 1.388-13.062z"
            />
            <path
              style={pathStyle}
              d="M24.604 48.266a4.337 4.337 0 0 1-1.118-6.276l13.266-16.954a5.902 5.902 0 0 0 3.943 2.48l-9.923 19.136a4.339 4.339 0 0 1-6.168 1.614zM17.016 47.355H4.242a3.194 3.194 0 0 1-3.194-3.194V4.241a3.194 3.194 0 0 1 3.194-3.193h33.532a3.194 3.194 0 0 1 3.194 3.194v4.79"
            />
          </g>
        </svg>
      );
    case "datumArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="34" cy="34.002" r="12" />
            <path
              style={pathStyle}
              d="M38 34.002h-4v-6M18 36H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v13M10 .002v10M30 .002v10M0 14.002h40"
            />
          </g>
        </svg>
      );
    case "exclamation":
      return (
        <span
          className="exclemation"
          style={{
            padding: "1px 6px",
            borderRadius: "50%",
            border: "1px solid " + props.fill,
            color: props.fill,
            display: "inline-block",
            fontSize: "12px",
            width: props.width,
            height: props.height,
          }}
        >
          !
        </span>
      );
    case "ekonomiArr":
      return (
        <svg
          style={style}
          width={props.width}
          height={props.height ? props.height : props.width}
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#818A97"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              style={pathStyle}
              d="M20 20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v10M.008 7l7-7M36.008 7l-7-7M.008 13l7 7"
            />
            <path
              style={pathStyle}
              d="M22 6h-6.308a1.686 1.686 0 0 0-.4 3.32l5.448 1.36a1.686 1.686 0 0 1-.4 3.32H14M18.008 6V4M18.008 16v-2M28.008 30h2M34.008 30h2M40.008 30h2M28.008 34h2M34.008 34h2M40.008 34h2M28.008 38h2M34.008 38h2M40.008 38h2M28.008 42h2M34.008 42h2M40.008 42h2"
            />
            <rect width="22" height="30" x="24.008" y="16" rx="2" />
            <path style={pathStyle} d="M24.008 26h22M2.008 24h18M4.008 28h16" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};
export default Icon;
