import AboutMe from "../components/aboutme/aboutme"
import BannerHomePage from "../components/bannerhomepage/bannerhomepage"
import FooterHomePage from "../components/footerhomepage/footerhomepage"
import HeaderHomePage from "../components/headerhomepage/headerhomepage"
import Stacks from "../components/projects/stacks"


function HomePage() {
    return (
        <div>
            <HeaderHomePage/>
            <BannerHomePage/>
            <AboutMe />
            <Stacks />
            <FooterHomePage/>
        </div>
    )
}

export default HomePage