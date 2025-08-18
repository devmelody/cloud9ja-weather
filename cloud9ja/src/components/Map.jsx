import "../index.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import Header from './Header'

function Map() {

    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: "Hello, I am pop up 1"
        },
        {
            geocode: [48.85, 2.3522],
            popUp: "Hello, I am pop up 2"
        },
        {
            geocode: [48.855, 2.34],
            popUp: "Hello, I am pop up 3"
        }
    ]

    const customIcon = new Icon( {
        iconUrl: "https://cdn-icons-png.flaticon.com/128/12461/12461186.png",
        iconSize: [38, 38]
    })

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70px_1fr]">
        <div className="mb-7">

        <Header />
        </div>
    <MapContainer className="h-lvh md:rounded-r-lg md:rounded-l-none" center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

{markers.map((marker) => (
    <Marker position={marker.geocode} icon={customIcon} >
<Popup>
    Weather location
</Popup>
    </Marker>
))}

    </MapContainer>
</div>
  );
}
export default Map;
