"use client";
import { useEffect, useState } from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const LocationMap = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBszY7kXkOy3xTIQLexO_ZQY_tmDUjH0oc&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: userLocation }, (results, status) => {
              if (status === 'OK') {
                setOpen(false);
                if (results[0]) {
                  const cityComponent = results[0].address_components.find(component =>
                    component.types.includes('locality')
                  );
                  setCurrentLocation(cityComponent ? cityComponent.long_name : '');
                }
              } else {
                console.error('Geocoder failed due to: ' + status);
              }
            });

            const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
            placesService.nearbySearch(
              {
                location: userLocation,
                radius: 20000, // 20 km
                type: 'locality' // to find nearby areas
              },
              (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  const validLocations = results.map((place, index) => ({
                    id: index,
                    name: place.name
                  }));
                  console.log(validLocations);
                  setNearbyLocations(validLocations);
                } else {
                  console.error('Error fetching nearby places:', status);
                }
              }
            );
          },
          (error) => {
            setOpen(true);
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Dialog
      open={open}
      size='sm'
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>
        <Button variant="gradient" color="red">
          <span>Alert! Location Disabled</span> Please enable location services.
        </Button>
      </DialogHeader>
      <DialogBody className='text-bold'>
        To provide you with the best service, we need your current location. Please enable location services.
      </DialogBody>
    </Dialog>
  );
};

export default LocationMap;
