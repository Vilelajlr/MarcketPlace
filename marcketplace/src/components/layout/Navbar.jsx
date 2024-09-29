import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

import styles from './Modules/Navbar.module.css';

export default function Navbar() {

    const [scrolled, setScrolled] = React.useState(false);
  
    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, []);


    
    return(
        <div className={`${scrolled ? styles.scrolled: ''}`}>
            <div className={styles.navbar_atributtes}>
                <div className={styles.ajuste}>
                    <nav className={styles.navbar}>
                        <div className={styles.menu}>
                            <ScrollLink to="/" smooth={true} duration={500}>
                                <div className={styles.logo}>
                                    <h1 className={styles.txt_logo}>
                                        Byte <span className={styles.span_logo}>Market</span>
                                    </h1>
                                </div>
                            </ScrollLink>

                            <div className={styles.nav_list}>
                                <ul className={styles.list}>
                                    <li className={styles.item}>
                                        <RouterLink to="/">Home</RouterLink>
                                    </li>
                                    <li className={styles.item}>
                                        <RouterLink to="/products">Products</RouterLink>
                                    </li>
                                    <li className={styles.item}>
                                        <RouterLink to="/about">About</RouterLink>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.icons_menu}>
                                <div className={styles.carShopping}>
                                    <div className={styles.notification}></div>
                                    <RouterLink to="/cart">
                                        <FaCartShopping size={25} color="#f1f1f1" />
                                    </RouterLink>
                                </div>
                                <div className={styles.user}>
                                    <RouterLink to="/login">
                                        <FaRegUserCircle size={25} color="#f1f1f1" className={styles.car} />
                                    </RouterLink>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );

}