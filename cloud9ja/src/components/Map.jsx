import "../index.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import Header from './Header'
import { useEffect, useState } from "react";


function Map() {
    const [userLocation, setUserLocation] = useState(null)


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude])
            }), (error) => {
                alert(error)
                setUserLocation([9.05785, 7.49508])
            }
        } else {
            alert("Geolocation not supported by browser")
            setUserLocation([9.05785, 7.49508])
        }
    }, [])



    const customIcon = new Icon( {
        iconUrl: "https://cdn-icons-png.flaticon.com/128/12461/12461186.png",
        iconSize: [38, 38]
    })

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70px_1fr]">
        <div className="mb-7">

        <Header />
        </div>
        {userLocation ? (
    <MapContainer className="h-lvh md:rounded-r-lg md:rounded-l-none" center={userLocation} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

    <Marker position={userLocation} icon={customIcon} >
<Popup>
    <p className="font-bold">You are here</p>
</Popup>
    </Marker>
    </MapContainer>
): (
    <p className="text-white">Loading map...</p>
    )
}
</div>
  );
}
export default Map;
