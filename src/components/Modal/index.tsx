
import Modal from 'react-modal';
import { ModalProps } from "../../interfaces";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
    },
};




function ModalComponent({ showModal, setShowModal, destinationData, setDestionationData, onSubmit }: ModalProps) {

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }


    const { destination, isChecked } = destinationData;
    return (
        <div>
            <button className="modal-button" onClick={openModal}>+ Ajouter</button>
            <Modal
                isOpen={showModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}

            >
                <span className='close-modal' onClick={closeModal}>X</span>
                <div >

                    <h3><strong>Ajouter une nouvelle destination</strong></h3>


                    <input type="text" required value={destination.city} placeholder="Nom de la destination"
                        onChange={(e) => {
                            setDestionationData({
                                ...destinationData, destination: {
                                    ...destination,
                                    city: e.target.value
                                }
                            })
                        }} />

                    <input type="text" required value={destination.address} placeholder="Adresse" onChange={(e) => {
                        setDestionationData({
                            ...destinationData,
                            destination: {
                                ...destination,
                                address: e.target.value
                            }
                        })
                    }} />

                    <input type="text" required value={destinationData.imageUrl} placeholder="Lien de l'image"
                        onChange={(e) => {
                            setDestionationData({
                                ...destinationData,
                                imageUrl: e.target.value
                            })
                        }}
                    />


                    <div className='modal-destination-data'>
                        <input type="number" required value={destination.data.residents} placeholder="Nb Habitans"
                            onChange={(e) => {
                                setDestionationData({
                                    ...destinationData,
                                    destination: {
                                        ...destination,
                                        data: {
                                            ...destination.data,
                                            residents: e.target.value
                                        }
                                    }
                                })
                            }} />
                        <input type="number" required value={destination.data.hotels} placeholder="Nb Hotels"
                            onChange={(e) => {
                                setDestionationData({
                                    ...destinationData,
                                    destination: {
                                        ...destination,
                                        data: {
                                            ...destination.data,
                                            hotels: e.target.value
                                        }
                                    }
                                })
                            }}
                        />
                        <input type="number" required value={destination.data.income} placeholder="Revenu moy"
                            onChange={(e) => {
                                setDestionationData({
                                    ...destinationData,
                                    destination: {
                                        ...destination,
                                        data: {
                                            ...destination.data,
                                            income: e.target.value
                                        }
                                    }
                                })
                            }}
                        />
                        <input type="number" required value={destination.data.surfface} placeholder="Superficie"
                            onChange={(e) => {
                                setDestionationData({
                                    ...destinationData,
                                    destination: {
                                        ...destinationData.destination,
                                        data: {
                                            ...destination.data,
                                            surfface: e.target.value
                                        }
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className='container-checkbox'>
                        <input id="toggle1" type="checkbox" checked={isChecked} onClick={(e) => {
                            setDestionationData({
                                ...destinationData,
                                isChecked: !isChecked
                            })
                        }} />
                        <label htmlFor="toggle1"> </label>

                    </div>

                    <div className='modal-actions'>
                        <span className="cancel" onClick={() => setShowModal(false)}>cancel</span>
                        <span className='confirm' onClick={() => onSubmit()}>confirm</span>
                    </div>

                </div>
            </Modal >
        </div >
    );
}

export default ModalComponent;