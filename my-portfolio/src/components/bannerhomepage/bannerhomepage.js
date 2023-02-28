import './bannerhomepage.css'
import myGravatar from '../../images/Avatar-Maker.png'

function BannerHomePage() {
    return (
        <div className="DivFatherBannerHomePage">
            <div className="DivSonImageProfessional">
                <img src={ myGravatar } alt="Meu Gravatar" />
                <h1>Guilherme Azevedo</h1>
                <h3>Desenvolvedor Web Full Stack Júnior</h3>
            </div>
            <div className="DivSonAboutMe">
                <h3>Sobre mim</h3>

                <p>Meu nome é Guilherme, tenho 24 anos e sou um desenvolvedor full stack junior formado na trybe</p>
                <p>e atualmente eu consigo criar o front end, back end e o banco de dados além de fazer as conexões</p>
                <p>entre eles</p>
            </div>
        </div>
    )
}

export default BannerHomePage