import { useState } from 'react';
import './App.css';
import { DestinationData, DestinationAddress, DestinationImage, Header } from './components';
import { data } from "./mock"

function App() {

  const initialState = {
    id: "",
    imageUrl: "",
    isChecked: false,
    destination: {
      city: "",
      address: "",
      data: {
        residents: "",
        hotels: "",
        surfface: "",
        income: ""
      }
    }

  }

  const [destinations, setDestionations] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [destinationData, setDestionationData] = useState(initialState);




  const onSubmit = () => {
    console.log("destinationData->", destinationData)
    setDestionationData(initialState)
    setShowModal(false)

  }

  return (
    <div className="App" >

      <Header showModal={showModal}
        setShowModal={setShowModal}
        title={"Destinations"}
        destinationData={destinationData}
        setDestionationData={setDestionationData}
        onSubmit={onSubmit} />

      <div className='container'>
        {destinations.map((data: any, index: number) => {
          return (
            <div key={index} className='destination-container'>

              <DestinationImage imageUrl={data.imageUrl} />
              <div className='destination-description'>
                <DestinationAddress />

                <DestinationData />

              </div>

            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
