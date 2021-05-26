import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout(props) {
  return (
    <div style={{margin: '0 auto', maxWidth: 700, padding: rhythm(1.5), paddingTop: rhythm(1.5)}}>
      {props.children}
    </div>
  )
}
