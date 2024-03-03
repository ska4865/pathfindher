import './App.css';
import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  constructor(props) {
    // we need to init the superclass's properties in
    // order to access and init this class's props
    super(props);

    // and now we can init state for this class specifically
    this.state = {
      userLocation: null
    }
  }

  render() {
    // make a reference to the user's
    // location as saved in the component
    const { userLocation } = this.state;

    if (userLocation) {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
          center={userLocation} // use the location to center the map
        >
          {/*Render the Marker component only when if userLocation is not null*/}
          {userLocation && <Marker position={userLocation} />}
          {!userLocation && <Marker position={userLocation} />}
        </Map>
      );
    }
    else {
      return (
        <div>ohr nohr</div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBgnGXM7sfF4LE2gSmqdjeTfNP_6GAoLvA'
})(MapContainer);
//"C:\\Users\\piedy\\GoogleAPIKey.txt"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
