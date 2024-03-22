import classNames from 'classnames';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>
                    <h4 className={styles.h4}>Banda Indjent - 2024</h4>
                    <br />
                    <h5>bandaindjent@gmail.com</h5>
                </div>
            </div>
            <div className={styles.social}>
                <a href="https://www.youtube.com/@bandaindjent" target='_blank'>
                    <FontAwesomeIcon className={styles.faicons} icon={faYoutube} />
                </a>
                <a href="https://www.instagram.com/bandaindjent/" target='_blank'>
                    <FontAwesomeIcon className={styles.faicons} icon={faInstagram} />
                </a>
            </div>
        </div>
    );
};
