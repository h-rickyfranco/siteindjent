import React, {useState} from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagens/lotus.png';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={classNames(styles.root, className, { [styles.scrolled]: color })}>
            <a href="/">
                <img src={logo} alt="" className={styles.logo} />
            </a>
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
        </div>
    );
};
