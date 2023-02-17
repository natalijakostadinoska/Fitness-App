import { FunctionComponent } from 'react';

// prettier-ignore
const svgMap = {
    envelope: 
    <svg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.55 9.22998H13.88" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.71997 6.22998H14.72" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    key : 
    <svg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.79 14.93C17.73 16.98 14.78 17.61 12.19 16.8L7.48002 21.5C7.14002 21.85 6.47002 22.06 5.99002 21.99L3.81002 21.69C3.09002 21.59 2.42002 20.91 2.31002 20.19L2.01002 18.01C1.94002 17.53 2.17002 16.86 2.50002 16.52L7.20002 11.82C6.40002 9.22001 7.02002 6.27001 9.08002 4.22001C12.03 1.27001 16.82 1.27001 19.78 4.22001C22.74 7.17001 22.74 11.98 19.79 14.93Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.89001 17.49L9.19001 19.79" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    home:
    <svg height="100%" width="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.75 19.25H19.25" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5813 19.25L2.62505 8.72374C2.62505 8.18999 2.8788 7.68254 3.2988 7.35004L9.4238 2.58128C10.0538 2.09128 10.9375 2.09128 11.5763 2.58128L17.7013 7.34128C18.1301 7.67378 18.375 8.18124 18.375 8.72374V19.25" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M11.375 14.875H9.625C8.89875 14.875 8.3125 15.4613 8.3125 16.1875V19.25H12.6875V16.1875C12.6875 15.4613 12.1012 14.875 11.375 14.875Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M8.3125 12.0312H6.5625C6.08125 12.0312 5.6875 11.6375 5.6875 11.1562V9.84375C5.6875 9.3625 6.08125 8.96875 6.5625 8.96875H8.3125C8.79375 8.96875 9.1875 9.3625 9.1875 9.84375V11.1562C9.1875 11.6375 8.79375 12.0312 8.3125 12.0312Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M14.4375 12.0312H12.6875C12.2062 12.0312 11.8125 11.6375 11.8125 11.1562V9.84375C11.8125 9.3625 12.2062 8.96875 12.6875 8.96875H14.4375C14.9188 8.96875 15.3125 9.3625 15.3125 9.84375V11.1562C15.3125 11.6375 14.9188 12.0312 14.4375 12.0312Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M16.625 6.125L16.5988 3.5H12.7488" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    weight:
    <svg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1801 18C19.5801 18 20.1801 16.65 20.1801 15V9C20.1801 7.35 19.5801 6 17.1801 6C14.7801 6 14.1801 7.35 14.1801 9V15C14.1801 16.65 14.7801 18 17.1801 18Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.81995 18C4.41995 18 3.81995 16.65 3.81995 15V9C3.81995 7.35 4.41995 6 6.81995 6C9.21995 6 9.81995 7.35 9.81995 9V15C9.81995 16.65 9.21995 18 6.81995 18Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.81995 12H14.1799" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.5 14.5V9.5" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5 14.5V9.5" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    activity:
    <svg height="100%" width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.79285 7.03H13.9491" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.0509 7.03L5.64465 7.62375L7.4259 5.8425" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.79285 12.5717H13.9491" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.0509 12.5717L5.64465 13.1654L7.4259 11.3842" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.12504 17.4167H11.875C15.8334 17.4167 17.4167 15.8333 17.4167 11.875V7.12499C17.4167 3.16666 15.8334 1.58333 11.875 1.58333H7.12504C3.16671 1.58333 1.58337 3.16666 1.58337 7.12499V11.875C1.58337 15.8333 3.16671 17.4167 7.12504 17.4167Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    
    edit:
    <svg height="100%" width="100%" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.70837 1.58333H7.12504C3.16671 1.58333 1.58337 3.16666 1.58337 7.125V11.875C1.58337 15.8333 3.16671 17.4167 7.12504 17.4167H11.875C15.8334 17.4167 17.4167 15.8333 17.4167 11.875V10.2917" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6984 2.39084L6.46003 8.62917C6.22253 8.86667 5.98503 9.33375 5.93753 9.67417L5.59711 12.0571C5.47044 12.92 6.08003 13.5217 6.94294 13.4029L9.32586 13.0625C9.65836 13.015 10.1254 12.7775 10.3709 12.54L16.6092 6.30167C17.6859 5.225 18.1925 3.97417 16.6092 2.39084C15.0259 0.807502 13.775 1.31417 12.6984 2.39084Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8037 3.28542C12.3341 5.1775 13.8145 6.65792 15.7145 7.19625" stroke="inherit" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    back:
    <svg height="100%" width="100%" viewBox="0 0 26 26" stroke="inherit" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.4606 12H12.9142L17.4571 7.45711L16.0429 6.04289L9.79289 12.2929L9.08579 13L9.79289 13.7071L16.0429 19.9571L17.4571 18.5429L12.9142 14H25.4606C24.9511 20.436 19.567 25.5 13 25.5C6.09644 25.5 0.5 19.9036 0.5 13C0.5 6.09644 6.09644 0.5 13 0.5C19.567 0.5 24.9511 5.564 25.4606 12Z" fill="inherit" stroke='inherit'/>
    </svg>,





    

} as const;

export type IconName = keyof typeof svgMap;

type IconProps = {
  name: IconName;
  className?: string;
  color?: string;
};

export const Icon = ({ name, className, color }: IconProps) => {
  return (
    <span
      className={`${color ?? 'stroke-black'} ${
        color ?? 'fill-black'
      } ${className}`}
    >
      {svgMap[name]}
    </span>
  );
};
