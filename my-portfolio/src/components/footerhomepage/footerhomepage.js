import './footerhomepage.css'
import object_contacts from '../../objects_images/object_contacts'

function FooterHomePage() {
    return (
        <div className="DivFatherFooterHomePage">
            <h2>Contatos</h2>
            <div className="DivIconsContactsHeaderHomePage">
                {
                    object_contacts.map(({ name, image, url }) => (
                        <div>
                            <img src={ image } alt={ name } />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterHomePage;