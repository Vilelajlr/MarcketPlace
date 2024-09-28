import React from "react";

import styles from './modules/Iphone.module.css';


export default function Iphone({ desc, cashPrice, termPrice, image }) {
    return (
        <div className={styles.flex}>
            <div className={styles.ftIphone}>
                <img src={image} alt='Foto Iphone' />
            </div>

            <div className={styles.containerPrice}>
                <div className={styles.price}>
                    <p className={styles.desc}>{desc}</p>
                    <p className={styles.cashPrice}>R$ {cashPrice} <span>à vista</span></p>
                    <p className={styles.termPrice}>ou em até 12x de {termPrice}</p>
                </div>
                <div className={styles.button}>
                    <button>Comprar</button>
                </div>
            </div>

        </div>
    );

}