import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

import logo from '../../img/costs_logo.png';

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <ul className={styles.list}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projetos</Link></li>
                <li><Link to="/company">Empresa</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
    )
}