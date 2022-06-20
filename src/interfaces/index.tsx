export interface DestinationState {
    id: string;
    imageUrl: string;
    destination: {
        city: string;
        address: string;
        data: {
            residents: string;
            hotels: string;
            surfface: string;
            income: string;
        };
    },
    isChecked: boolean;

}


export interface HeaderProps {
    title: string,
    showModal: boolean,
    setShowModal: (showModal: boolean) => void,
    destinationData: DestinationState,
    setDestionationData: (destination: DestinationState) => void
    onSubmit: () => void

}


export interface ModalProps {
    showModal: boolean,
    setShowModal: (showModal: boolean) => void,
    destinationData: DestinationState,
    setDestionationData: (destination: DestinationState) => void
    onSubmit: () => void

}
