import styled from 'styled-components'
import Logo from "../images/logo/logo.svg"


import React from 'react'

const StyledLogo = () => {
  return (
    <StyledDiv>
        <img src={Logo} alt="Logo" />
        <svg width="73" height="13" viewBox="0 0 73 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.894531 12.8001L0.894531 0.435303L6.69293 0.435303C7.66573 0.435303 8.45933 0.620903 9.07373 0.992104C9.70093 1.3633 10.1681 1.8689 10.4753 2.5089C10.7825 3.1489 10.9361 3.8785 10.9361 4.6977C10.9361 5.5297 10.7569 6.2657 10.3985 6.9057C10.0529 7.5457 9.55373 8.0449 8.90093 8.4033C8.26093 8.7489 7.49933 8.9217 6.61613 8.9217H3.48653L3.48653 12.8001H0.894531ZM3.48653 6.8673H6.07853C6.82093 6.8673 7.37773 6.6753 7.74893 6.2913C8.13293 5.8945 8.32493 5.3633 8.32493 4.6977C8.32493 3.9809 8.14573 3.4369 7.78733 3.0657C7.42893 2.6817 6.89133 2.4897 6.17453 2.4897L3.48653 2.4897L3.48653 6.8673Z" />
<path d="M17.1119 12.9921C15.5375 12.9921 14.2895 12.6017 13.3679 11.8209C12.4463 11.0273 11.9855 9.8305 11.9855 8.2305C11.9855 6.7841 12.3695 5.6385 13.1375 4.7937C13.9183 3.9361 15.0767 3.5073 16.6127 3.5073C18.0207 3.5073 19.0959 3.8785 19.8383 4.6209C20.5935 5.3505 20.9711 6.3105 20.9711 7.5009V9.1521L14.3855 9.1521C14.5263 9.8817 14.8591 10.3809 15.3839 10.6497C15.9215 10.9185 16.6767 11.0529 17.6495 11.0529C18.1359 11.0529 18.6287 11.0081 19.1279 10.9185C19.6399 10.8289 20.0751 10.7137 20.4335 10.5729V12.4161C20.0111 12.6081 19.5183 12.7489 18.9551 12.8385C18.3919 12.9409 17.7775 12.9921 17.1119 12.9921ZM14.3855 7.5585H18.7055V7.0593C18.7055 6.5345 18.5519 6.1249 18.2447 5.8305C17.9375 5.5233 17.4191 5.3697 16.6895 5.3697C15.8319 5.3697 15.2303 5.5425 14.8847 5.8881C14.5519 6.2337 14.3855 6.7905 14.3855 7.5585Z" />
<path d="M26.3854 12.9921C25.3358 12.9921 24.555 12.7169 24.043 12.1665C23.5438 11.6161 23.2942 10.8673 23.2942 9.9201V5.6961H22.0078V3.6993H23.2942V1.7409L25.8862 0.972903V3.6993H28.1902L28.0366 5.6961H25.8862V9.7473C25.8862 10.2465 26.0014 10.5921 26.2318 10.7841C26.4622 10.9633 26.8206 11.0529 27.307 11.0529C27.6654 11.0529 28.0366 10.9889 28.4206 10.8609V12.6465C28.139 12.7617 27.8318 12.8449 27.499 12.8961C27.1662 12.9601 26.795 12.9921 26.3854 12.9921Z" />
<path d="M32.9572 12.9921C32.2788 12.9921 31.6324 12.9409 31.018 12.8385C30.4036 12.7489 29.9108 12.6337 29.5396 12.4929V10.3425C29.9876 10.5217 30.4932 10.6625 31.0564 10.7649C31.6196 10.8545 32.138 10.8993 32.6116 10.8993C33.2516 10.8993 33.6996 10.8609 33.9556 10.7841C34.2244 10.7073 34.3588 10.5345 34.3588 10.2657C34.3588 9.9585 34.154 9.7345 33.7444 9.5937C33.3476 9.4529 32.7524 9.2545 31.9588 8.9985C31.1268 8.7169 30.4868 8.3777 30.0388 7.9809C29.5908 7.5841 29.3668 6.9953 29.3668 6.2145C29.3668 5.3441 29.6804 4.6785 30.3076 4.2177C30.9476 3.7441 31.9716 3.5073 33.3796 3.5073C33.9428 3.5073 34.474 3.5521 34.9732 3.6417C35.4724 3.7185 35.8948 3.8145 36.2404 3.9297V6.0609C35.8948 5.8945 35.498 5.7729 35.05 5.6961C34.602 5.6065 34.186 5.5617 33.802 5.5617C33.2516 5.5617 32.81 5.6001 32.4772 5.6769C32.1572 5.7537 31.9972 5.9201 31.9972 6.1761C31.9972 6.4577 32.17 6.6561 32.5156 6.7713C32.874 6.8865 33.4244 7.0593 34.1668 7.2897C34.8964 7.5073 35.466 7.7441 35.8756 8.0001C36.2852 8.2561 36.5732 8.5633 36.7396 8.9217C36.906 9.2673 36.9892 9.7025 36.9892 10.2273C36.9892 12.0705 35.6452 12.9921 32.9572 12.9921Z" />
<path d="M38.7883 12.8001V0.435303L44.5867 0.435303C45.5595 0.435303 46.3531 0.620903 46.9675 0.992104C47.5947 1.3633 48.0619 1.8689 48.3691 2.5089C48.6763 3.1489 48.8299 3.8785 48.8299 4.6977C48.8299 5.5297 48.6507 6.2657 48.2923 6.9057C47.9467 7.5457 47.4475 8.0449 46.7947 8.4033C46.1547 8.7489 45.3931 8.9217 44.5099 8.9217H41.3803V12.8001H38.7883ZM41.3803 6.8673H43.9723C44.7147 6.8673 45.2715 6.6753 45.6427 6.2913C46.0267 5.8945 46.2187 5.3633 46.2187 4.6977C46.2187 3.9809 46.0395 3.4369 45.6811 3.0657C45.3227 2.6817 44.7851 2.4897 44.0683 2.4897H41.3803V6.8673Z" />
<path d="M52.7491 12.9921C52.1731 12.9921 51.6355 12.8897 51.1363 12.6849C50.6499 12.4673 50.2531 12.1537 49.9459 11.7441C49.6515 11.3217 49.5043 10.7969 49.5043 10.1697C49.5043 9.2737 49.8179 8.5569 50.4451 8.0193C51.0851 7.4817 52.0259 7.2129 53.2675 7.2129H55.9555V6.9633C55.9555 6.4001 55.7955 6.0033 55.4755 5.7729C55.1683 5.5425 54.5411 5.4273 53.5939 5.4273C52.5571 5.4273 51.5587 5.5873 50.5987 5.9073V4.0833C51.0211 3.9169 51.5331 3.7825 52.1347 3.6801C52.7491 3.5649 53.4147 3.5073 54.1315 3.5073C55.5011 3.5073 56.5571 3.7889 57.2995 4.3521C58.0547 4.9025 58.4323 5.7921 58.4323 7.0209V12.8001H56.1859L56.0515 11.9745C55.6931 12.2945 55.2515 12.5441 54.7267 12.7233C54.2019 12.9025 53.5427 12.9921 52.7491 12.9921ZM53.4595 11.2833C54.0355 11.2833 54.5347 11.1873 54.9571 10.9953C55.3795 10.8033 55.7123 10.5601 55.9555 10.2657V8.8257H53.3251C52.3139 8.8257 51.8083 9.2417 51.8083 10.0737C51.8083 10.8801 52.3587 11.2833 53.4595 11.2833Z" />
<path d="M62.048 12.8001L59.648 3.6993L62.24 3.6993L63.6224 9.6129L65.1392 4.8705V3.6993H67.1168L68.8448 9.6129L70.1888 3.6993H72.7616L70.3808 12.8001H68L66.2528 7.4817L64.4672 12.8001H62.048Z" />
</svg>

    </StyledDiv>
  )
}

const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
svg {
  margin-left: 5px;
  fill: ${({theme}) => theme.blackWhite};
}


`




export default StyledLogo


