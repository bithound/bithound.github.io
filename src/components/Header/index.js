import React from 'react'
import Link from 'gatsby-link'
import logo from './bithound_logo@2x.png'

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
          <img src={logo} alt="bitHound Logo" />
      </h1>
    </div>
  </div>
)

export default Header
