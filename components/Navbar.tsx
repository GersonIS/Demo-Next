import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(el => {
        return <ActiveLink key={el.href} text={el.text} href={el.href} />
      })}
    </nav>
  )
}

export default Navbar;