"use client";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";

export default function Intro() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlMzZ9LdJWT47X3YyJA - WNwvSe_qd3yTU",
  });
  const pos = { lat: 38.92870330810547, lng: -95.25907135009766 };

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "initial" }}>
      <GoogleMap
        center={pos}
        zoom={15}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <Marker position={pos} onClick={() => setShowInfoWindow(true)} />
        {showInfoWindow && (
          <InfoWindowF
            position={pos}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div>
              <h3>Love Nails</h3>
              <p>2040 W 31st St ste d, Lawrence, KS 66046</p>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aFTQ3nnG2zLf4vAKQalSi39Oc1SlYFzorY5Cd-ZtHUENN-Pva2OD6wn5C01ayLAm4rakfv7F1">
                Book An Appointment
              </a>
              <p></p>
              <a href="https://www.google.com/maps/dir/38.9438441,-95.291355/2040+W+31st+St,+Lawrence,+KS+66046/@38.9359415,-95.2848718,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87bf68e6395ecbb7:0x13ee121681af7304!2m2!1d-95.2590621!2d38.9286764?entry=ttu">
                Directions
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
}
