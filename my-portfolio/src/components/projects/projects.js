import objectProjects from '../../objects_images/object_projects'
import './projects.css'

function Projects() {
    return (
        <div className="DivFatherProjects">
            <div className="DivSonProjects">
                {
                    objectProjects.map(({ 
                        name,
                        image,
                        link
                    }) => (
                        <a href={ link } target="_blank" rel="noreferrer">
                            <div>
                                <img src={ image } alt={ name } />
                                <p>{ name }</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects