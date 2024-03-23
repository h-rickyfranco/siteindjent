import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import logo from '../../imagens/lotus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Counter from '../counter/counter';
import useCountdown from '../../hooks/useCountdown';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const [day, hour, minute, second] = useCountdown('Apr 19, 2024 12:00:00');

    const location = useLocation();
    const [isAbout, setIsAbout] = useState(false);

    // useEffect(() => {
    //     // Verifica se a rota atual é "/about" e atualiza o estado em conformidade
    //     setIsAbout(location.pathname === '/about');
    // }, [location]);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    const showCounterHeader = () => {
        if (window.scrollY >= 400) {
            setIsAbout(true);
        } else {
            setIsAbout(false);
        }
    };
    window.addEventListener('scroll', showCounterHeader);

    return (
        <div className={classNames(styles.root, className, { [styles.scrolled]: color })}>
            <div className={styles.logocontainer}>
                <a href="/">
                    <img src={logo} alt="" className={styles.logo} />
                </a>
            </div>
            <div className={styles.menu}>
                <Link
                    to="hero"
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass={styles.active}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass={styles.active}
                >
                    Sobre{' '}
                </Link>
            </div>
            <div className={`${styles.countercontainer} ${isAbout ? '' : styles.displaycounter}`}>
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
            <div className={styles.social}>
                <a href="https://www.youtube.com/@bandaindjent" target="_blank">
                    <FontAwesomeIcon className={styles.faicons} icon={faYoutube} />
                </a>
                <a href="https://www.instagram.com/bandaindjent/" target="_blank">
                    <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                </a>
            </div>
        </div>
    );
};
