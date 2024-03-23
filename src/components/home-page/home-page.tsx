import classNames from 'classnames';
import styles from './home-page.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../Lottie/indjent_lottie.json';
import { About } from '../about/about';
import CounterContainer from '../counter/counterContainer';

export interface HomePageProps {
    className?: string;
}

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
        <div id="hero" className={classNames(styles.root, className)}>
            <div className={styles.herocontainer}>
                <Lottie options={defaultOptions} height={450} width={450} />
                <CounterContainer />
            </div>
            <About />
        </div>
    );
};
