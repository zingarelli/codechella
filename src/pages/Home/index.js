import carousel from "./assets/carousel.png";
import festival from "./assets/festival.png";
import fans from "./assets/fans.png";
import ticket from "./assets/ticket-icon.png";
import Banner from "components/Banner";
import Button from "components/Button";
import Article from "components/Article";
import { LineUpContent, LineUpLayer, LineUpWrapper } from "components/LineUp";

export default function Home() {
    return (
        <>
            <Banner image={carousel} text="Boas-vindas ao #CodeChella2023!" />
            <main>
                <Article
                    image={fans}
                    alt='fãs cantando na pista'
                    title={`< 11 e 12 de Março >\nAluródromo de São Paulo`}
                    highlight
                >
                    <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
                    <Button image={ticket} >Comprar ingresso!</Button>
                </Article>
                <LineUpWrapper title='/Line-Up/'>
                    <LineUpContent title='SÁBADO <11/03>'>
                        <LineUpLayer layer='l1'>
                            <p>System of a DOM</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l2'>
                            <p>Python Maiden</p>
                            <p>Apollo Client 2001</p>
                            <p>Bon Java</p>
                            <p>NickCallback</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l3'>
                            <p>Linkin Promises</p>
                            <p>Fullstack Fighters</p>
                            <p>Papa React</p>
                            <p>Angular in Chains</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l4'>
                            <p>Agnostic Front-end</p>
                            <p>SlipkNode</p>
                            <p>Pink Flutter</p>
                            <p>KISS</p>
                        </LineUpLayer>
                    </LineUpContent>
                    <LineUpContent title='DOMINGO <12/03>'>
                        <LineUpLayer layer='l1'>
                            <p>Lana Del Ploy</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l2'>
                            <p>Dua Lib</p>
                            <p>The Backnd</p>
                            <p>CSSy Styles</p>
                            <p>ArrayAna Grande</p>
                            <p>DJ Query</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l3'>
                            <p>Miley Cypress</p>
                            <p>The Bootstrap Boys</p>
                            <p>Json Derulo</p>
                            <p>CloudPlay</p>
                            <p>Devvy Lovato</p>
                        </LineUpLayer>
                        <LineUpLayer layer='l4'>
                            <p>Kylie MiLOG</p>
                            <p>Jenkins Brothers</p>
                            <p>Rubycat Dolls</p>
                        </LineUpLayer>
                    </LineUpContent>
                </LineUpWrapper>
            </main>
            <Banner image={festival} />
        </>
    );
}