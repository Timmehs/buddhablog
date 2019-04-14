import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => (
  <nav>
    <h3 className="font-effect-anaglyph brand">My Blog</h3>
    <ul>
      <li>
        <NavLink exact activeClassName="navlink-active" to="/">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="navlink-active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default NavigationBar
