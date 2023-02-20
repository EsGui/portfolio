import AboutMe from "../components/aboutme/aboutme"
import BannerHomePage from "../components/bannerhomepage/bannerhomepage"
import FooterHomePage from "../components/footerhomepage/footerhomepage"
import HeaderHomePage from "../components/headerhomepage/headerhomepage"

function HomePage() {
    return (
        <div>
            <HeaderHomePage/>
            <BannerHomePage/>
            <AboutMe />
            <FooterHomePage/>
        </div>
    )
}

export default HomePage