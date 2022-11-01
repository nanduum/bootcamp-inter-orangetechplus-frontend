
import Button from './../../components/Button/index';
import Header from './../../components/Header/index';
import { Container, Title, TextContent, TitleHighLight } from "./styles";
import bannerImage from '../../assets/banner.png';


const Home = () => {
    return (<>  
             
        <Header /> 
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente 
                    <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare o seu novo 
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>     


    </>);
}

export { Home };

