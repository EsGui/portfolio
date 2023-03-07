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
                {/* {
                    objectTechnology && objectTechnology.map(({
                        name,
                        image
                    }) => (
                        <div>
                            <img src={ image } alt={ name } />
                        </div>
                    ))
                } */}
                <ul>
                    <li>ReactJs</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>Testing library</li>
                    <li>Jest</li>
                    <li>Python</li>
                </ul>
            </div>
        </>
    )
}

export default Stacks