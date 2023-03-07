/* import AboutMe from "../components/aboutme/aboutme" */
import BannerHomePage from "../components/bannerhomepage/bannerhomepage"
import FooterHomePage from "../components/footerhomepage/footerhomepage"
import HeaderHomePage from "../components/headerhomepage/headerhomepage"
import Projects from "../components/projects/projects"
/* import Stacks from "../components/stacks/stacks" */


function HomePage() {
    return (
        <div>
            <HeaderHomePage/>
            <BannerHomePage/>
            {/* <AboutMe /> */}
            {/* <Stacks /> */}
            <Projects />
            <FooterHomePage/>
        </div>
    )
}

export default HomePage