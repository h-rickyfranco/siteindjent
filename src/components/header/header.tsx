import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagens/lotus.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Counter from '../counter/counter';
import useCountdown from '../../hooks/useCountdown';
import { useLocation } from 'react-router-dom';

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

    useEffect(() => {
        // Verifica se a rota atual é "/about" e atualiza o estado em conformidade
        setIsAbout(location.pathname === '/about');
    }, [location]);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={classNames(styles.root, className, { [styles.scrolled]: color })}>
            <div className={styles.logocontainer}>
                <a href="/">
                    <img src={logo} alt="" className={styles.logo} />
                </a>
            </div>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Sobre{' '}
                </NavLink>
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
