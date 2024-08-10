import * as React from 'react';
import Svg, { Path, Rect, G, Defs } from 'react-native-svg';

export function OptionIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#DCF5FF'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M12 13a1 1 0 100-2 1 1 0 000 2zM19 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z' />
      </G>
    </Svg>
  );
}

export function GoBack(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#DCF5FF'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M19 12H5M12 19l-7-7 7-7' />
      </G>
    </Svg>
  );
}

export function Brush(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#BCDCFA'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M8.305 10.908l7.398-7.388a2.613 2.613 0 113.694 3.694l-7.389 7.407M6.48 13.695a2.756 2.756 0 00-2.75 2.768c0 1.22-2.29 1.394-1.832 1.852.99 1.008 2.282 1.852 3.666 1.852 2.017 0 3.667-1.65 3.667-3.704a2.76 2.76 0 00-2.75-2.768v0z' />
      </G>
    </Svg>
  );
}

export function ZoomIn(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#BCDCFA'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M10.083 17.417a7.333 7.333 0 100-14.667 7.333 7.333 0 000 14.667zM19.25 19.25l-3.988-3.987M10.083 7.333v5.5M7.333 10.083h5.5' />
      </G>
    </Svg>
  );
}

export function ZoomOut(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G
        stroke='#BCDCFA'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M10.083 17.417a7.333 7.333 0 100-14.667 7.333 7.333 0 000 14.667zM19.25 19.25l-3.988-3.987M7.333 10.083h5.5' />
      </G>
    </Svg>
  );
}

export function CheckCircle(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G fillRule='evenodd' clipRule='evenodd'>
        <Path
          d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z'
          stroke='#BCDCFA'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M5.333 12a6.667 6.667 0 1113.334 0 6.667 6.667 0 01-13.334 0z'
          fill='#BCDCFA'
        />
      </G>
    </Svg>
  );
}

export function NullCircle(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
        stroke='#BCDCFA'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}

export function LeftArrow(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.529a.667.667 0 01-.942.942l-4-4a.667.667 0 010-.942l4-4c.26-.26.682-.26.942 0z"
        fill="#F8FAFC"
      />
    </Svg>
  )
}
