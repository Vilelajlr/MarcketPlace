import React from "react";
import Iphone from "../components/Iphone";

import styles from './modules/Home.module.css';
import IphoneBlack from '../components/imgs/IphoneBlack.png';
import IphoneWhite from '../components/imgs/IphoneWhite.png';
import IphoneGray from '../components/imgs/IphoneGray.png';
import IphoneRose from '../components/imgs/IphoneRose.png';
import Linhaapple from "../components/Linhaapple";
import Linhagalaxy from "../components/Linhagalaxy";

export default function Home() {
    const [cashPrice, setCashPrice] = React.useState('');
    const [termPrice, setTermPrice] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const [image, setImage] = React.useState('');
    
    const [selectedColor, setSelectedColor] = React.useState('black'); // Adicionar o estado da cor selecionada

    if (cashPrice === '') {
        setCashPrice('9.999,00');
        setTermPrice('833,25');
        setDesc('Iphone 16 Pro Max - 256GB');
        setImage(IphoneBlack);
    }

    const handleColor = (color) => {
        setSelectedColor(color); // Atualiza a cor selecionada

        if (color === 'black') {
            setCashPrice('9.999,00');
            setTermPrice('833,25');
            setDesc('Iphone 16 Pro Max - 256GB');
            setImage(IphoneBlack);
        } else if (color === 'white') {
            setCashPrice('9.959,00');
            setTermPrice('833,25');
            setDesc('Iphone 16 Pro Max - 256GB');
            setImage(IphoneWhite);
        } else if (color === 'rose') {
            setCashPrice('9.929,00');
            setTermPrice('833,25');
            setDesc('Iphone 16 Pro Max - 256GB');
            setImage(IphoneRose);
        } else if (color === 'gray') {
            setCashPrice('9.919,00');
            setTermPrice('833,25');
            setDesc('Iphone 16 Pro Max - 256GB');
            setImage(IphoneGray);
        }
    };

    return (

        <div className={styles.containerPrincipal}>
            <main className={styles.bg}>
                <div className={styles.containerAuxiliar}>
                    <Iphone 
                        desc={desc}
                        cashPrice={cashPrice}
                        termPrice={termPrice}
                        image={image}
                    />

                    <div className={styles.corIphone}>
                        <h1>Escolha a cor do seu Iphone :</h1>
                        <div className={styles.containerColor}>
                            {/* Botão preto */}
                            <button
                                className={`${styles.buttonColor} ${styles.black} ${selectedColor === 'black' ? styles.selected : ''}`} 
                                onClick={() => handleColor('black')}
                            ></button>

                            {/* Botão branco */}
                            <button
                                className={`${styles.buttonColor} ${styles.white} ${selectedColor === 'white' ? styles.border : ''}`}
                                onClick={() => handleColor('white')}
                            ></button>

                            {/* Botão rosa */}
                            <button
                                className={`${styles.buttonColor} ${styles.rose} ${selectedColor === 'rose' ? styles.selected : ''}`}
                                onClick={() => handleColor('rose')}
                            ></button>

                            {/* Botão cinza */}
                            <button
                                className={`${styles.buttonColor} ${styles.gray} ${selectedColor === 'gray' ? styles.selected : ''}`}
                                onClick={() => handleColor('gray')}
                            ></button>
                        </div>
                    </div>
                </div>
            </main>

            <Linhaapple />
            <Linhagalaxy />


        </div>
    );
}
