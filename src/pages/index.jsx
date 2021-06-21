import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/CryptoModern/Navbar';
import Banner from 'containers/CryptoModern/Banner';
import Mission from 'containers/CryptoModern/MissionSection';
import Tokenomics from 'containers/CryptoModern/Tokenomics';
import RoadMap from 'containers/CryptoModern/RoadMap';
import Products from 'containers/CryptoModern/Products';
import WalletSection from 'containers/CryptoModern/HowToBuy';
import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from 'containers/CryptoModern/cryptoModern.style';

const CryptoModern = () => (
  <ThemeProvider theme={theme}>
    <>
      <Head>
        <title>Utopia | Built today, for a better tomorrow</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#2563FF" />
        <meta
          name="keywords"
          content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
        />
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
      {/* end of head */}

      <ResetCSS />
      <GlobalStyle />
      {/* end of global and reset style */}

      {/* start app classic landing */}
      <CryptoWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <ContentWrapper>
          <Banner />
          <Mission />
          <Tokenomics />
          <Products />
          <WalletSection />

          <RoadMap />
        </ContentWrapper>
      </CryptoWrapper>
      {/* end of app classic landing */}
    </>
  </ThemeProvider>
);
export default CryptoModern;