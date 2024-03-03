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

  // this React lifecycle method gets called right after the component is rendered
  componentDidMount() {
    // fetch the user's location using the in-house React geolocation api 
    // and handle errors that may arise with that
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState(
            {userLocation: {lat: latitude, lng: longitude}}
          );
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  handleReport () {
    // print to console for now
    // console.log('Reporting at: ', this.state.userLocation);
    alert('Report button clicked!');

    // ideally this would send a req to and endpoint that we
    // create on AWS API Gateway which would map to an AWS Lambda 
    // that would send a notif to nearby used via AWS SNS

    // we'll see what happens...

  }

  render() {
    // make a reference to the user's
    // location as saved in the component
    const { userLocation } = this.state;

    return (
      <div>
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
        </Map>

        {/**Conditionally render the incident reporting button */}
        {userLocation && (
          <button className="reportButton" onClick={this.handleReport}>Create Report [ ! ]</button>
        )}
      </div>
    );
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
