import { NavLink } from 'react-router-dom'

export default function MainNav() {
  return (
    <nav>
      <NavLink to="/contacts">view contacts</NavLink>
      <NavLink to="/occupations">view occupations</NavLink>
    </nav>
  )
}
