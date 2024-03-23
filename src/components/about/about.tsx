import classNames from 'classnames';
import styles from './about.module.scss';
import lotusblack from '../../imagens/lotus_black.png'
import {motion} from 'framer-motion';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <motion.div
        className={classNames(styles.root, className)}
        
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.2} }}
        >
            <div className={styles.text}>
                {/* <div className={styles.title}>Sobre</div> */}
                <div className={styles.paragraph}>
                <br /><h3>Sobre a banda:</h3><br />
                <em>Indjent</em> não é apenas mais uma Banda que surge no mercado. É uma banda de metal e rap com uma chama ardente em meio às trevas da injustiça social, uma voz dos marginalizados e uma promessa de mudança. Com uma fusão única de elementos do metal moderno e do rap, a <em>Indjent</em> está redefinindo os limites da música de protesto, inspirando e empoderando aqueles que enfrentam adversidades em um mundo tão desigual.<br /><br />

                Formada por Ricky Franco (guitarra e voz), Michel Villares (voz), Raquel Boralli (voz), Eddie Skull (guitarra), Jilson Magno (baixo) e Thi Camargo (bateria), a Indjent nasceu da paixão compartilhada por expressão artística e justiça social. Cada membro traz consigo uma história única, mas todos compartilham da mesma visão: de usar sua música como uma ferramenta para a mudança positiva.<br /><br />

<h3>Sobre o Single "Entre Sombras e Riffs":</h3><br />

O single de estreia da <em>Indjent</em>, "Entre Sombras e Riffs", é mais do que uma música: é um manifesto poderoso que ecoa pelas ruas escuras da sociedade. Com letra que corta como navalha e uma batida que incendeia a alma, a música captura a essência da luta contra a opressão e a busca por justiça.<br /><br />

Com um riff poderoso e uma letra que ecoa a voz dos marginalizados, "Entre Sombras e Riffs" é um convite para todos aqueles que se recusam a ser silenciados, uma celebração da resiliência humana e da esperança em meio ao caos.<br /><br />

<h3>Sobre a Missão:</h3><br />

<em>Indjent</em> não é apenas uma Banda, é um movimento. Por meio da sua música, busca desafiar os estereótipos, amplificar as vozes silenciadas e inspirar ações concretas em prol de um mundo mais justo e inclusivo. Acreditamos que a música tem o poder de transcender barreiras e unir pessoas em torno de uma causa comum - a busca por igualdade e dignidade para todos.<br /><br />

<h3>O Futuro:</h3><br />

Fazendo uso da sua música como arma e sua mensagem como escudo, a <em>Indjent</em> está apenas começando. Planejamos continuar desafiando as normas, provocando conversas difíceis e fazendo a diferença, uma batida de cada vez. Este é apenas o começo de uma jornada que promete iluminar as sombras e transformar o mundo pelo poder da música.<br /><br />

Para mais informações sobre a <em>Indjent</em> e seu próximo lançamento, visite nosso site e siga-nos nas redes sociais. Junte-se à revolução - a luz está chegando à cidade das sombras!
                </div>
            </div>
            <img
                src={lotusblack}
                alt=""
                className={styles.image}
            />
        </motion.div>
    );
};
