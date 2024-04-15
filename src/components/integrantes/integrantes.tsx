import { useState } from 'react';
import classNames from 'classnames';
import styles from './integrantes.module.scss';
import michel from '../../avatars/michel.jpeg';
import raquel from '../../avatars/raquel.jpeg';
import thiago from '../../avatars/thiago.jpeg';
import wladimir from '../../avatars/wladimir.jpg';
import ricky from '../../avatars/ricky.jpeg';
import eddie from '../../avatars/eddie.jpeg';
import details from './details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export interface IntegrantesProps {
    className?: string;
}

export const Integrantes = ({ className }: IntegrantesProps) => {
   const [bg, setBg] = useState<string>('ricky');

    const [detail, setDetail] = useState<any>(details[0]);

    const handleClick = (number: number) => {
        setDetail(details[number]);
        setBg(details[number].id);
    };
    return (
        <div className={`${styles.root} ${styles[bg]}`} id="integrantes">
            <h1 className={styles.h1}>Integrantes</h1>
            <div className={styles.thumbcontainer}>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(0)}>
                        <img src={ricky} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/h_rickyfranco/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(1)}>
                        <img src={michel} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/meh.studio/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(2)}>
                        <img src={raquel} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/raquelfboralli/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(3)}>
                        <img src={eddie} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/eddieskull.esi/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(5)}>
                        <img src={wladimir} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/wladimirpveras/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
                <div className={styles.thumbBg}>
                    <button className={styles.imgButton} onClick={() => handleClick(4)}>
                        <img src={thiago} alt="" className={styles.thumb} />
                    </button>
                    <a href="https://www.instagram.com/thicamargodrum/" target="_blank">
                        <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className={styles.detailscontainerout}>
                <h2 className={styles.h2}>{detail ? detail.nome : ''}</h2>
                <div className={styles.detailscontainer}>
                    <img src={detail ? detail.foto : ''} alt="" className={styles.foto} />
                    <p className={styles.detailsparagraph}>{detail ? detail.details : ''}</p>
                </div>
            </div>
        </div>
    );
};
