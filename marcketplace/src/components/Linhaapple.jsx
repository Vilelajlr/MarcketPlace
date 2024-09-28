import React from "react";

import LinhaApple from './imgs/LinhaApple.png';
import styles from './modules/Linhaapple.module.css';

export default function Linhaapple(){

    return(
        <section className={styles.sectionLinhaApple}>
            <div className={styles.interface}>
                <div className={styles.flex}>
                    <div className={styles.txtLinhaApple}>
                        <h1>Linha de Produtos Aplle</h1>
                    </div>

                    <div className={styles.imgLinha}>
                        <img src={LinhaApple} alt='Linha de Produtos Apple' />
                    </div> 

                    <div className={styles.opcoes}>
                        <button>Saiba Mais</button>
                        <button>Comprar</button>
                    </div>


                </div>
            </div>
        </section>
    );
}