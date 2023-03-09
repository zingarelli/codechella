import styles from './Info.module.css';
import banner from './assets/banner.png';
import Banner from 'components/Banner';
import Accordion from 'components/Accordion';
import { Link } from 'react-router-dom';

export default function Info() {
    return (
        <>
            <Banner image={banner} text='Informações Gerais' />
            <main className={styles.info__container}>
                <h2 className={styles.info__title}>Perguntas Frequentes:</h2>
                <div className={styles.info__faq}>
                    <Accordion title='Quais serão as atrações?' >
                        <p>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. <Link to={'/'}>Confira o line-up em detalhes clicando neste link!</Link></p>
                    </Accordion>
                    <Accordion title='Qual é a classificação etária?' >
                        <p>A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.</p>
                    </Accordion>
                    <Accordion title='Quais são os setores disponíveis?' >
                        <ul>
                            <li>Pista Premium</li>
                            <li>Pista Comum</li>
                            <li>Cadeiras térreo</li>
                            <li>Cadeiras superiores</li>
                            <li>Rampas</li>
                        </ul>
                    </Accordion>
                    <Accordion title='Quais são os itens proibidos?' >
                        <p>Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.</p>
                    </Accordion>
                    <Accordion title='Quem tem direito a meia-entrada?' >
                        <p>De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.</p>
                    </Accordion>
                </div>
            </main>
        </>
    )
}