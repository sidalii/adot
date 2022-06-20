




interface DestinationImageProps {
    imageUrl: string
}

function DestinationImage({ imageUrl }: DestinationImageProps) {
    return (
        <img alt='' src={require(`../../../src/${imageUrl}`)} />
    );
}

export default DestinationImage;
