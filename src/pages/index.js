import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet";

const styles = {
  logo: {
    display: 'fixed',
    position: 'absolute',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)'
  },
  subtitles: {
    fontFamily: 'Lato',
    textAlign: 'center',
    fontSize: '3vw',
    color: 'rgb(72,72,72)',
    fontWeight: '400'
  }
};

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Marbl</title>
        <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
      </Helmet>
      <div style={styles.logo}>
        <StaticImage src={'../img/marbl.svg'} placeholder='blurred'/>
        <div style={styles.subtitles}>
          Great things are coming
        </div>
      </div>
    </div>
  )
}
