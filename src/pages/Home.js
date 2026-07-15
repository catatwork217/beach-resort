import React, { useEffect, useState } from 'react';
import client from '../contentful';

export default function Home() {
  const [home, setHome] = useState(null);

  useEffect(() => {
    client.getEntries({ content_type: 'home' })
      .then((response) => {
        const homeData = response.items[0]?.fields;
        setHome(homeData);
        console.log('Home data:', homeData); // Debug: check if heroImage exists
      })
      .catch(console.error);
  }, []);

  if (!home) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      {/* Hero Section with optional background image */}
      {home.heroImage && (
        <div
          className="home-hero"
          style={{ backgroundImage: `url(${home.heroImage.fields.file.url})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">{home.title}</h1>
            <p className="hero-description">{home.description}</p>
          </div>
        </div>
      )}

      {/* Fallback if no hero image */}
      {!home.heroImage && (
        <div className="home-header">
          <h1 className="home-title">{home.title}</h1>
          <p className="home-description">{home.description}</p>
        </div>
      )}
    </div>
  );
}