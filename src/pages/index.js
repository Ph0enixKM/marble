import React from "react"
import { StaticImage } from 'gatsby-plugin-image';

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
    fontSize: '24px',
    color: 'rgb(72,72,72)',
    fontWeight: '400'
  }
};

export default function Home() {
  return (
    <div style={styles.logo}>
      <StaticImage src={'../img/marbl.jpeg'} placeholder='blurred'/>
      <div style={styles.subtitles}>
        Great things are coming
      </div>
    </div>
  )
}
