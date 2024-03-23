import classNames from 'classnames';
import styles from './home-page.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../Lottie/indjent_lottie.json';
import { motion } from 'framer-motion';
import Counter from '../counter/counter';
import useCountdown from '../../hooks/useCountdown';
import { About } from '../about/about';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    const [day, hour, minute, second] = useCountdown('Apr 19, 2024 12:00:00');

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
            id='hero'
            className={classNames(styles.root, className)}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <div className={styles.herocontainer}>
            <Lottie options={defaultOptions} height={450} width={450} />
            <div className={styles.countercontainer}>
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
            </div>
            <About />
        </motion.div>
    );
};
