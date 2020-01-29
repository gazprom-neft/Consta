import React from 'react';

import { Icon } from '../../../index';

const SVG_XS = (
  <path d="M10.4606 6.588C10.4846 6.396 10.5026 6.204 10.5026 6C10.5026 5.796 10.4846 5.604 10.4606 5.412L11.7266 4.422C11.8406 4.332 11.8706 4.17 11.7986 4.038L10.5986 1.962C10.5266 1.83 10.3646 1.782 10.2326 1.83L8.73864 2.43C8.42664 2.19 8.09064 1.992 7.72464 1.842L7.49664 0.252C7.47864 0.108 7.35264 0 7.20264 0H4.80264C4.65264 0 4.52664 0.108 4.50864 0.252L4.28064 1.842C3.91464 1.992 3.57864 2.196 3.26664 2.43L1.77264 1.83C1.63464 1.776 1.47864 1.83 1.40664 1.962L0.206638 4.038C0.128638 4.17 0.164638 4.332 0.278638 4.422L1.54464 5.412C1.52064 5.604 1.50264 5.802 1.50264 6C1.50264 6.198 1.52064 6.396 1.54464 6.588L0.278638 7.578C0.164638 7.668 0.134638 7.83 0.206638 7.962L1.40664 10.038C1.47864 10.17 1.64064 10.218 1.77264 10.17L3.26664 9.57C3.57864 9.81 3.91464 10.008 4.28064 10.158L4.50864 11.748C4.52664 11.892 4.65264 12 4.80264 12H7.20264C7.35264 12 7.47864 11.892 7.49664 11.748L7.72464 10.158C8.09064 10.008 8.42664 9.804 8.73864 9.57L10.2326 10.17C10.3706 10.224 10.5266 10.17 10.5986 10.038L11.7986 7.962C11.8706 7.83 11.8406 7.668 11.7266 7.578L10.4606 6.588ZM6.00264 8.1C4.84464 8.1 3.90264 7.158 3.90264 6C3.90264 4.842 4.84464 3.9 6.00264 3.9C7.16064 3.9 8.10264 4.842 8.10264 6C8.10264 7.158 7.16064 8.1 6.00264 8.1Z" />
);

const SVG_S = (
  <path d="M12.9533 8.65337C12.98 8.44004 13 8.22671 13 8.00004C13 7.77337 12.98 7.56004 12.9533 7.34671L14.36 6.24671C14.4867 6.14671 14.52 5.96671 14.44 5.82004L13.1067 3.51337C13.0267 3.36671 12.8467 3.31337 12.7 3.36671L11.04 4.03337C10.6933 3.76671 10.32 3.54671 9.91335 3.38004L9.66002 1.61337C9.64002 1.45337 9.50002 1.33337 9.33335 1.33337H6.66668C6.50002 1.33337 6.36002 1.45337 6.34002 1.61337L6.08668 3.38004C5.68002 3.54671 5.30668 3.77337 4.96002 4.03337L3.30001 3.36671C3.14668 3.30671 2.97335 3.36671 2.89335 3.51337L1.56001 5.82004C1.47335 5.96671 1.51335 6.14671 1.64002 6.24671L3.04668 7.34671C3.02002 7.56004 3.00002 7.78004 3.00002 8.00004C3.00002 8.22004 3.02002 8.44004 3.04668 8.65337L1.64002 9.75337C1.51335 9.85337 1.48001 10.0334 1.56001 10.18L2.89335 12.4867C2.97335 12.6334 3.15335 12.6867 3.30001 12.6334L4.96002 11.9667C5.30668 12.2334 5.68002 12.4534 6.08668 12.62L6.34002 14.3867C6.36002 14.5467 6.50002 14.6667 6.66668 14.6667H9.33335C9.50002 14.6667 9.64002 14.5467 9.66002 14.3867L9.91335 12.62C10.32 12.4534 10.6933 12.2267 11.04 11.9667L12.7 12.6334C12.8533 12.6934 13.0267 12.6334 13.1067 12.4867L14.44 10.18C14.52 10.0334 14.4867 9.85337 14.36 9.75337L12.9533 8.65337ZM8.00002 10.3334C6.71335 10.3334 5.66668 9.28671 5.66668 8.00004C5.66668 6.71337 6.71335 5.66671 8.00002 5.66671C9.28668 5.66671 10.3333 6.71337 10.3333 8.00004C10.3333 9.28671 9.28668 10.3334 8.00002 10.3334Z" />
);

const SVG_M = (
  <path d="M19.4301 12.98C19.4701 12.66 19.5001 12.34 19.5001 12C19.5001 11.66 19.4701 11.34 19.4301 11.02L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5401 5.05 19.2701 4.97 19.0501 5.05L16.5601 6.05C16.0401 5.65 15.4801 5.32 14.8701 5.07L14.4901 2.42C14.4601 2.18 14.2501 2 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.51008 2.42L9.13008 5.07C8.52008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.72008 4.96 4.46008 5.05 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11.02C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.66 4.57008 12.98L2.46008 14.63C2.27008 14.78 2.22008 15.05 2.34008 15.27L4.34008 18.73C4.46008 18.95 4.73008 19.03 4.95008 18.95L7.44008 17.95C7.96008 18.35 8.52008 18.68 9.13008 18.93L9.51008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.4901 21.58L14.8701 18.93C15.4801 18.68 16.0401 18.34 16.5601 17.95L19.0501 18.95C19.2801 19.04 19.5401 18.95 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.98ZM12.0001 15.5C10.0701 15.5 8.50008 13.93 8.50008 12C8.50008 10.07 10.0701 8.5 12.0001 8.5C13.9301 8.5 15.5001 10.07 15.5001 12C15.5001 13.93 13.9301 15.5 12.0001 15.5Z" />
);

const Settings = props => {
  let svg;

  if (props.size === 'xs') svg = SVG_XS;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Settings;