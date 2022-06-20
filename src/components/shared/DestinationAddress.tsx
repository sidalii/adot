import React from 'react';

function DestinationAddress() {
    return (
        <div className='destination-description'>
            <div className='address-container'>
                <div>
                    <h3 className='city'>Copenhagen</h3>
                    <p className='address'>Rådhuspladsen 1, 1550 København, Denmark</p>
                </div>

                <div className='container-checkbox'>
                    <input id="toggle1" type="checkbox" checked={true}  />
                    <label htmlFor="toggle1"> </label>

                </div>
            </div>


        </div>


    );
}

export default DestinationAddress;


