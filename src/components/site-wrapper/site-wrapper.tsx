import classNames from 'classnames';
import styles from './site-wrapper.module.scss';
import { Header } from '../header/header';
import { Outlet } from 'react-router-dom';

export interface SiteWrapperProps {
    className?: string;
}

export const SiteWrapper = ({ className }: SiteWrapperProps) => {
    return (
        <div id="problema" className={classNames(styles.root, className)}>
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};
