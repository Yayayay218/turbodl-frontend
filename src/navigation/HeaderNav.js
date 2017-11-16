import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = ({ filter, children, className }) => (
    <NavLink
        className={className}
        to={filter === 'livestream' ? '/livestream' : `/${ filter }`}
        activeStyle = {{
            color: '#00f0ff'
        }}
    >
        {children}
    </NavLink>
)

export default HeaderNav