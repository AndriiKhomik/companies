import React from "react";
import { Link } from "@mui/material";
import { StyledLink } from "./Styled";

const Logo = () => {
  return (
    <StyledLink as={Link} href="/">
      <svg
        width="119"
        height="24"
        viewBox="0 0 119 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.74329 3.49914L6.14895 2.89087V7.69618H0.623783V10.7679H6.14895V17.246C6.14895 18.5233 5.94102 19.4357 5.55485 19.9832C5.16868 20.5306 4.48546 20.8043 3.53489 20.8043C2.88138 20.8043 2.28728 20.7435 1.78229 20.5914C1.2773 20.4394 0.891129 20.3177 0.594077 20.1961L-2.67029e-05 23.1157C0.415847 23.2982 0.95054 23.4807 1.63376 23.6936C2.31698 23.8761 3.08932 23.9673 4.01018 23.9673C5.10927 23.9673 6.03013 23.8153 6.77276 23.5111C7.51539 23.207 8.1095 22.7508 8.55508 22.1729C9.00066 21.5951 9.29771 20.8956 9.47594 20.0744C9.65417 19.2837 9.74329 18.3409 9.74329 17.2764V3.49914Z"
          fill="#003FFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.8937 13.3738L42.8939 13.3737L42.8939 13.3736C43.2053 13.0416 43.5329 12.6923 43.8606 12.3174C44.3655 11.77 44.8705 11.2225 45.3755 10.6447C45.8805 10.0972 46.3558 9.54979 46.8014 9.03276C47.2469 8.51574 47.6034 8.08995 47.9302 7.69458H52.178C51.1977 8.81987 50.1581 10.006 49.059 11.2225C47.9744 12.423 46.8608 13.5939 45.7755 14.7352L45.7751 14.7355L45.732 14.7809C46.3261 15.2979 46.9499 15.9062 47.6034 16.6057C48.2569 17.3356 48.8807 18.0959 49.5045 18.9171C50.1284 19.7383 50.6928 20.529 51.2274 21.3502C51.7621 22.1713 52.2077 22.9013 52.5642 23.6008H48.4055C48.0965 23.0473 47.743 22.4938 47.3642 21.9007L47.1875 21.6239C46.7123 20.9244 46.2073 20.2553 45.6726 19.6166L45.6725 19.6165C45.1378 18.9779 44.6032 18.3392 44.0388 17.7614C43.4744 17.1835 42.9397 16.6969 42.405 16.3016V23.6008H38.8107V0.608268L42.405 0V13.8989C42.5614 13.7281 42.7251 13.5535 42.8936 13.3739L42.8937 13.3738ZM24.7345 7.6348C23.6355 7.81728 22.7146 7.99976 22.0314 8.21266V23.6018H25.6257V10.7674C25.7132 10.7562 25.8169 10.7408 25.9381 10.7229L25.9383 10.7229L25.9384 10.7229L25.9386 10.7229L25.9387 10.7228C26.1465 10.6921 26.4061 10.6537 26.7248 10.6153C27.2298 10.5545 27.7051 10.5241 28.1506 10.5241C28.7745 10.5241 29.2794 10.6153 29.725 10.7674C30.1409 10.9499 30.4677 11.2236 30.735 11.5885C30.9726 11.9839 31.1509 12.4705 31.2697 13.0484C31.3588 13.6566 31.4182 14.3866 31.4182 15.2381V23.6018H35.0126V14.6603C35.0126 13.5958 34.9234 12.5922 34.7155 11.6798C34.5076 10.7978 34.1511 10.007 33.6461 9.36836C33.1411 8.72968 32.4579 8.24307 31.5965 7.87811C30.735 7.54356 29.6953 7.36108 28.418 7.36108C27.0813 7.36108 25.8336 7.45232 24.7345 7.6348ZM13.8585 7.69434H17.4529V23.6005H13.8585V7.69434ZM61.1557 20.5936C60.7101 20.8369 60.0269 20.9586 59.0763 20.9586C58.1257 20.9586 57.294 20.8673 56.5514 20.6544C55.779 20.4415 55.1552 20.2287 54.6205 20.0158L53.9967 23.0875C54.3235 23.2396 54.9176 23.4221 55.7493 23.6654C56.5811 23.8783 57.6801 23.9999 59.0466 23.9999C61.0962 23.9999 62.6706 23.6045 63.7697 22.8138C64.8688 22.0535 65.4035 20.8977 65.4035 19.3771C65.4035 18.6776 65.3144 18.0693 65.1362 17.5523C64.9579 17.0352 64.6906 16.5791 64.3044 16.1837C63.9182 15.7883 63.4133 15.4538 62.8192 15.1192C62.225 14.8151 61.5121 14.5109 60.6507 14.1764C60.1457 13.9939 59.7001 13.8114 59.3436 13.629C58.9872 13.4769 58.6901 13.2944 58.4822 13.1119C58.2743 12.9599 58.096 12.7774 58.0366 12.5645C57.9475 12.3516 57.8881 12.1387 57.8881 11.865C57.8881 11.348 58.1257 10.9526 58.5713 10.6789C59.0169 10.4356 59.611 10.3139 60.3536 10.3139C61.1557 10.3139 61.8686 10.3747 62.4924 10.5268C63.1162 10.7093 63.6212 10.8613 64.0074 11.0438L64.6609 8.06331C64.245 7.91125 63.6212 7.72877 62.7894 7.54629C61.9577 7.39422 61.0962 7.30298 60.1754 7.30298C58.3634 7.30298 56.9375 7.72877 55.8978 8.54993C54.8582 9.4015 54.3235 10.5572 54.3235 12.017C54.3235 12.7774 54.4423 13.4161 54.6799 13.9027C54.8879 14.4197 55.2146 14.8759 55.6008 15.2409C55.987 15.6058 56.4622 15.91 57.0266 16.1837C57.5613 16.4574 58.1554 16.7311 58.8089 16.9744C59.8783 17.3698 60.6507 17.7652 61.126 18.0997C61.5715 18.4343 61.8092 18.8905 61.8092 19.4075C61.8092 19.9853 61.6012 20.3807 61.1557 20.5936ZM77.571 15.2381C77.571 13.5654 77.3631 12.3793 76.9769 11.619C76.5611 10.889 75.7887 10.5241 74.6896 10.5241C74.3035 10.5241 73.8579 10.5545 73.3826 10.6153C73.1042 10.6509 72.8665 10.6866 72.6697 10.7161C72.5305 10.737 72.4116 10.7548 72.3132 10.7674V23.6018H68.7189V8.21266C69.4021 7.99976 70.323 7.81728 71.4518 7.6348C72.5508 7.45232 73.7391 7.36108 74.9867 7.36108C76.0561 7.36108 76.9472 7.51315 77.6304 7.78687C78.3137 8.06059 78.8781 8.45596 79.3236 8.91216C79.5316 8.7601 79.8286 8.57762 80.1554 8.39514C80.4036 8.25653 80.6861 8.13546 80.9898 8.00529L80.9906 8.00495C81.0865 7.96386 81.1845 7.92186 81.2842 7.87811C81.7001 7.72604 82.1456 7.60439 82.6209 7.51315C83.0665 7.42191 83.5418 7.36108 84.0171 7.36108C85.235 7.36108 86.2152 7.54356 87.0173 7.87811C87.7896 8.24307 88.4134 8.72968 88.859 9.36836C89.3046 10.007 89.6016 10.7978 89.7799 11.6798C89.9284 12.5922 90.0175 13.5958 90.0175 14.6603V23.6018H86.4232V15.2381C86.4232 13.5654 86.2152 12.3793 85.8291 11.619C85.4429 10.889 84.6706 10.5241 83.5418 10.5241C82.9774 10.5241 82.413 10.6153 81.908 10.7978C81.403 11.0107 81.0168 11.1932 80.7495 11.3756C80.898 11.8927 81.0168 12.4097 81.0762 12.9876C81.1357 13.5654 81.1654 14.1737 81.1654 14.8124V23.6018H77.571V15.2381ZM101.804 20.8369C101.24 20.9586 100.378 21.0194 99.2793 21.0194C98.3585 21.0194 97.6455 20.8369 97.1108 20.5024C96.5762 20.1678 96.3088 19.59 96.3088 18.708C96.3088 18.2518 96.3979 17.8868 96.6059 17.5827C96.8138 17.309 97.0811 17.0657 97.4079 16.9136C97.7347 16.7615 98.0911 16.6399 98.507 16.579C98.8932 16.5182 99.309 16.4878 99.6952 16.4878C100.141 16.4878 100.557 16.5182 100.943 16.579C101.329 16.6399 101.596 16.7007 101.804 16.7615V20.8369ZM101.983 7.75918C101.18 7.45504 100.17 7.30298 98.9823 7.30298C98.002 7.30298 97.0514 7.39422 96.19 7.54629C95.3285 7.69835 94.6453 7.88083 94.1997 8.0329L94.6453 11.0134C95.0909 10.8613 95.6553 10.7093 96.3385 10.5876C97.0217 10.466 97.7941 10.4051 98.6258 10.4051C99.2496 10.4051 99.7546 10.4964 100.17 10.6484C100.557 10.8005 100.883 11.0438 101.151 11.3175C101.388 11.6217 101.567 11.9562 101.656 12.3516C101.745 12.747 101.804 13.1423 101.804 13.5681V14.1764C101.299 14.0547 100.854 13.9635 100.408 13.9027L100.319 13.8966C99.907 13.8683 99.5208 13.8418 99.1605 13.8418C98.2991 13.8418 97.497 13.9331 96.7247 14.0852C95.9226 14.2676 95.2394 14.5414 94.6453 14.9367C94.0512 15.3321 93.5759 15.8491 93.2492 16.4878C92.8927 17.1265 92.7145 17.8868 92.7145 18.7992C92.7145 19.742 92.863 20.5632 93.1898 21.2019C93.4868 21.8406 93.9027 22.388 94.4671 22.7834C95.0018 23.1787 95.6553 23.4829 96.4276 23.6654C97.2 23.8478 98.0614 23.9391 98.9823 23.9391C100.378 23.9391 101.656 23.8478 102.785 23.6958C103.884 23.5133 104.715 23.3612 105.28 23.2396V13.5985C105.28 12.6557 105.191 11.8042 104.983 11.0134C104.775 10.2531 104.418 9.58398 103.943 9.03654C103.438 8.4891 102.785 8.06331 101.983 7.75918Z"
          fill="#2E2F31"
        />
        <path
          d="M108.886 3.49914L112.48 2.89087V7.69618H118.005V10.7679H112.48V17.246C112.48 18.5233 112.688 19.4357 113.074 19.9832C113.46 20.5306 114.144 20.8043 115.094 20.8043C115.748 20.8043 116.342 20.7435 116.847 20.5914C117.352 20.4394 117.738 20.3177 118.035 20.1961L118.629 23.1157C118.213 23.2982 117.679 23.4807 116.995 23.6936C116.312 23.8761 115.54 23.9673 114.619 23.9673C113.52 23.9673 112.599 23.8153 111.856 23.5111C111.114 23.207 110.52 22.7508 110.074 22.1729C109.628 21.5951 109.331 20.8956 109.153 20.0744C108.975 19.2837 108.886 18.3409 108.886 17.2764V3.49914Z"
          fill="#003FFF"
        />
      </svg>
    </StyledLink>
  );
};

export default Logo;