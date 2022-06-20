import ModalComponent from '../Modal';
import { HeaderProps } from "../../interfaces";



function Header({ showModal, setShowModal, title, destinationData, setDestionationData, onSubmit }: HeaderProps) {
    return (
        <div className='header'>
            <span className="header-title"> {title}</span>
            <ModalComponent
                showModal={showModal}
                setShowModal={setShowModal}
                destinationData={destinationData}
                setDestionationData={setDestionationData}
                onSubmit={onSubmit}
            />

        </div>

    )

}
export default Header;