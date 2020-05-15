import React from "react"
import { Helmet } from "react-helmet"

import Image from "./image"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image />
        <div
          style={{
            position: "relative",
            paddingTop: "40%",
            height: 0,
            width: "85vw",
          }}
        >
          <iframe
            title="beto"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
            src="https://www.youtube-nocookie.com/embed/5ZCJDV34PgE?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}

export default Layout
