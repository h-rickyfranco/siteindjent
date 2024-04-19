import React from 'react';
import videoBG from '../../assets/Background.mp4';
import styles from './background.module.scss';
import Classnames from 'classnames';
import youtubeIcon from '../../assets/icons8-youtube.svg';
import spotifyIcon from '../../assets/icons8-spotify.svg';
import appleMusicIcon from '../../assets/icons8-música-amazon.svg';
import DeezerSvg from '../../assets/deezer.svg';

const Background = () => {
    return (
        <div className={Classnames(styles.bg2)}>
            <div className={styles.content}>
                <h1 className={styles.heading}>OUÇA E ASSISTA AGORA</h1>
                <h1 className={styles.heading}>ENTRE SOMBRAS E RIFFS</h1>
                <div className={styles.socials}>
                    <a href="https://www.youtube.com/watch?v=e5UQwWhl6gA" target='_blank'>
                      <img src={youtubeIcon} alt="" className={styles.socialsIcons} />
                    </a>
                    <a href="https://open.spotify.com/intl-pt/album/51NLvusG3Gt9728UrdL39r?si=zm5bGeUsRkOkxu2XZnaX1g" target='_blank'>
                      <img src={spotifyIcon} alt="" className={styles.socialsIcons} />
                    </a>
                    <a href="https://music.apple.com/br/album/entre-sombras-e-riffs/1740157359?i=1740157360" target='_blank'>
                      <img src={appleMusicIcon} alt="" className={styles.socialsIcons} />
                    </a>
                    <a href="https://deezer.page.link/5Bo9YHfeVNgkzzLf9" target='_blank'>
                      <img
                        src={DeezerSvg}
                        alt=""
                        className={Classnames(styles.deezer, styles.socialsIcons)}
                      />
                    </a>
                    
                   
                    
                </div>
            </div>
            <div className={styles.videoContainer}>
                <video src={videoBG} autoPlay loop muted />
            </div>
        </div>
    );
};

export default Background;
