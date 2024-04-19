import classNames from 'classnames';
import styles from './home-page.module.scss';
import animationData from '../../Lottie/indjent_lottie.json';
import { About } from '../about/about';
import { Integrantes } from '../integrantes/integrantes';
import Background from '../backgroundvideo/background';

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
            <Background />
            <About />
            <Integrantes />
        </div>
    );
};
