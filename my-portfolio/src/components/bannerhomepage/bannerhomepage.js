import './bannerhomepage.css'
import myGravatar from '../../images/Avatar-Maker.png'

function BannerHomePage() {
    return (
        <div className="DivFatherBannerHomePage">
            <img src={ myGravatar } alt="Meu Gravatar" />
            <h1>Hello world</h1>
            <h3>Desenvolvedor Web Full Stack</h3>
        </div>
    )
}

export default BannerHomePage