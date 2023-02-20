import objectTechnology from '../../objects_images/object_technology'
import './stacks.css'

function Stacks() {
    return (
        <>
            <div className="DivTitleTechnology">
                <h1>Conhecimentos</h1>
                <hr/>
            </div>
            <div className="DivFatherStacks">
                {
                    objectTechnology && objectTechnology.map(({
                        name,
                        image
                    }) => (
                        <div>
                            <img src={ image } alt={ name } />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Stacks