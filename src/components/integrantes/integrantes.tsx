import { useState } from 'react';
import classNames from 'classnames';
import styles from './integrantes.module.scss';
import michel from '../../fotos/michel.jpg';
import raquel from '../../fotos/raquel.jpg';
import thiago from '../../fotos/thiago.jpg';
import jilson from '../../fotos/jilson.jpg';
import ricky from '../../fotos/ricky.jpg';
import eddie from '../../fotos/eddie.jpg';
import details from './details';

export interface IntegrantesProps {
    className?: string;
}

export const Integrantes = ({ className }: IntegrantesProps) => {
    console.log(details);

    const [detail, setDetail] = useState<any>();

    const handleClick = (number: number) => {
        setDetail(details[number]);
    };
    return (
        <div className={classNames(styles.root, className)} id="integrantes">
            <h1 className={styles.h1}>Integrantes</h1>
            <div className={styles.thumbcontainer}>
                <button className={styles.imgButton} onClick={() => handleClick(0)}>
                    <img src={ricky} alt="" className={styles.thumb} />
                </button>
                <button className={styles.imgButton} onClick={() => handleClick(1)}>
                    <img src={michel} alt="" className={styles.thumb} />
                </button>
                <button className={styles.imgButton} onClick={() => handleClick(2)}>
                    <img src={raquel} alt="" className={styles.thumb} />
                </button>
                <button className={styles.imgButton} onClick={() => handleClick(3)}>
                    <img src={eddie} alt="" className={styles.thumb} />
                </button>
                <button className={styles.imgButton} onClick={() => handleClick(4)}>
                    <img src={jilson} alt="" className={styles.thumb} />
                </button>
                <button className={styles.imgButton} onClick={() => handleClick(5)}>
                    <img src={thiago} alt="" className={styles.thumb} />
                </button>
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
