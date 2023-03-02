import experience from './assets/experience.png';
import joy from './assets/joy.png';
import recycle from './assets/recycle.png';
import ferrisWheel from './assets/ferris-wheel.png';
import Banner from 'components/Banner';
import Article from 'components/Article';

export default function Experiencia() {
    return (
        <>
            <Banner image={experience} text='A Experiência' />
            <main>
                <Article 
                    image={joy} 
                    alt='Mulher pulando de alegria e confetis caindo sobre ela.'
                    title='Acessibilidade e Inclusão'
                >
                    <p>Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
                </Article>
                <Article 
                    image={recycle} 
                    alt='Pessoa abrindo uma sacola de pano, com garrafas de vidro vazias dentro.'
                    title='Sustentabilidade'
                    imagePosition='right'
                >
                    <p>Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
                </Article>
                <Article 
                    image={ferrisWheel} 
                    alt='Roda-gigante em frente a um céu brilhante e azul.'
                    title='Atrações'
                >
                    <p>Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!</p>
                </Article>
            </main>
        </>
    )
}