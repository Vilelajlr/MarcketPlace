import React from "react";

import LinhaGalaxy from './imgs/LinhaGalaxy.png';
import styles from './modules/Linhagalaxy.module.css';

export default function Linhagalaxy(){
    return(
        <section className={styles.sectionLinhaGalaxy}>
            <div className={styles.interfaceLinhaGalaxy}>
                <div className={styles.tituloLinhaGalaxy}>
                    <h1>
                        Linha Galaxy s23
                    </h1>
                </div>

                <div className={styles.flexLinhaGalaxy}>
                    <div className={styles.imgLinhaGalaxy} > 
                        <img src={LinhaGalaxy} alt="Linha Galaxy" />
                    </div>

                    <div className={styles.txtLinhaGalaxy}>
                        <p>

                            O Samsung Galaxy S23 Ultra é um smartphone premium com tela AMOLED de 6,8 polegadas e resolução WQHD+. Destaca-se por sua câmera quádrupla de 200 MP, oferecendo fotos de alta qualidade. Equipado com o processador Snapdragon 8 Gen 2 e até 12 GB de RAM, proporciona desempenho rápido. A bateria de 5000 mAh garante longa duração, e o suporte para S Pen adiciona funcionalidade extra.

                        </p>
                    </div>

                </div>

                <div className={styles.buttonLinhaGalaxy}>
                    <button>Saiba Mais</button>
                    <button>Comprar</button>
                </div>

            </div>
        </section>
    );
}

