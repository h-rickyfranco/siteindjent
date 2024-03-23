import classNames from 'classnames';
import styles from './home-page.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../Lottie/indjent_lottie.json';
import { motion } from 'framer-motion';
import Counter from '../counter/counter';
import useCountdown from '../../hooks/useCountdown';

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
            className={classNames(styles.root, className)}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
            <Lottie options={defaultOptions} height={600} width={600} />
            <div className={styles.countercontainer}>
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
        </motion.div>
    );
};
