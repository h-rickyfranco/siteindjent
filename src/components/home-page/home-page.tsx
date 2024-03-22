import classNames from 'classnames';
import styles from './home-page.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../Lottie/indjent_lottie.json';
import {motion} from 'framer-motion';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <motion.div 
        className={classNames(styles.root, className)}
        
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.2} }}
        >
            <div className={styles.divtexto}>
                <h1 className={styles.animatecharcter}>Vem aí dia 19/04</h1>
            </div>
            <Lottie options={defaultOptions} height={600} width={600} />
            <div className={styles.h3div}>
                <h3 className={styles.h3}>&quot;A voz que ecoa sem medo sem se calar!&quot;</h3>
            </div>
        </motion.div>
    );
};
