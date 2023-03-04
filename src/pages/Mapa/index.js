import banner from './assets/banner.png';
import mapa from './assets/mapa.png';
import pista from './assets/pista.png';
import premium from './assets/premium.png';
import cadeiras from './assets/cadeiras.png';
import styles from './Mapa.module.css';
import Banner from 'components/Banner';
import Article from 'components/Article';

export default function Mapa() {
    return (
        <>
            <Banner image={banner} text='Mapa de Setores' position='bottom' />
            <main>
                <div className={styles.mapa}>
                    <Article
                        image={mapa}
                        alt='mapa do evento, mostrando o posicionamento do palco, das pistas, cadeiras e rampas'
                        title='Legenda'
                    >
                        <p className={styles.legenda}>Pista Premium</p>
                        <p className={styles.legenda}>Pista Comum</p>
                        <p className={styles.legenda}>Cadeiras térreo</p>
                        <p className={styles.legenda}>Cadeiras superiores</p>
                        <p className={styles.legenda}>Rampas</p>
                        {/* <img src={legenda} alt="" /> */}
                    </Article>
                </div>
                <h2>Mais detalhes sobre os setores:</h2>
                <div className={styles.setores}>
                    <Article
                        image={pista}
                        alt='garota com um bambolê em destaque, com várias outras pessoas ao fundo'
                        imagePosition='top'
                        title='Pista'
                    >
                        <p>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
                    </Article>
                    <Article
                        image={premium}
                        alt='várias pessoas de frente para um palco e algumas nuvens de fumaça amarelas, vermelhas e azul.'
                        imagePosition='top'
                        title='Pista Premium'
                    >
                        <p>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
                    </Article>
                    <Article
                        image={cadeiras}
                        alt='várias cadeiras reclináveis fechadas, da cor cinza, dispostas em diferentes níveis de altura'
                        imagePosition='top'
                        title='Cadeiras'
                    >
                        <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
                    </Article>
                </div>
            </main>
        </>
    )
}