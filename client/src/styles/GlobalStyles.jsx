// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Glory:wght@200;400;600&family=Noto+Serif+KR:wght@200;400;600&display=swap');
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
  }
  body {
    ${tw`h-screen flex justify-center items-center bg-primary text-primary font-body`}
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
