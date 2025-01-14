import { Helmet } from 'react-helmet-async';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my SEO-friendly React app."
        />
        <meta name="keywords" content="React, SEO, Home" />
        <meta
          property="og:title"
          content="Home Page - My SEO-friendly React App"
        />
        <meta
          property="og:description"
          content="This is the home page of my SEO-friendly React app."
        />
      </Helmet>
      <div>landingPage</div>
    </>
  );
}

export default LandingPage;
