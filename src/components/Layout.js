import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-bottom: 20rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav />
        {children}
        <Footer />
      </SiteStyles>
    </>
  );
}
