import React, { useState } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const locations = [
  'Dwarka',
  'Rohini',
  'Pitampura',
  'Janakpuri',
  'Saket',
  'Lajpat Nagar',
  'Paschim Vihar',
];

const specialties = [
    'Dentist',
    'Gynecologist/obstetrician',
    'General Physician',
    'Dermatologist',
    'Ear-nose-throat (ENT) Specialist',
    'Homoeopath',
    'Ayurveda',
    'Cardiologist',
    'Orthopedic Surgeon',
  ];

  const doctorsAndHospitals = [
    'Dr. John Doe - Cardiologist',
    'Dr. Jane Smith - Orthopedic Surgeon',
    'City Hospital',
    'Community Health Center',
    'Lakeview Dental Clinic',
  ];

const Searchbar = () => {
  const [location, setLocation] = useState('Delhi');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpecialties, setFilteredSpecialties] = useState(specialties);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [showLocationList, setShowLocationList] = useState(false);
  const [showSpecialtyList, setShowSpecialtyList] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowSpecialtyList(true);
    setShowLocationList(false);

    if (term.length > 0) {
      const filteredSpecialties = specialties.filter((specialty) =>
        specialty.toLowerCase().includes(term.toLowerCase())
      );

      const filteredDoctorsAndHospitals = doctorsAndHospitals.filter((result) =>
        result.toLowerCase().includes(term.toLowerCase())
      );
      const combinedResults = [...filteredSpecialties, ...filteredDoctorsAndHospitals];
      setFilteredSpecialties(combinedResults.length > 0 ? combinedResults : ['No results found']);
    } else {
      setFilteredSpecialties(specialties);
    }
  };

  const handleLocationSearch = (e) => {
    const term = e.target.value;
    setLocation(term);
    setShowLocationList(true);
    setShowSpecialtyList(false);
    if (term.length > 0) {
      const filtered = locations.filter(loc =>
        loc.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredSpecialties(specialties);
  };

  const handleLocationClick = (loc) => {
    setLocation(loc);
    setShowLocationList(false);
    setShowSpecialtyList(true);
  };

  const closeLocationList = () => {
    setShowLocationList(false);
  };

  const closeSpecialtyList = () => {
    setShowSpecialtyList(false);
  };

  return (
    <div className="relative w-full max-w-full   mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center border rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          value={location}
          onChange={handleLocationSearch}
          onFocus={() => { setShowLocationList(true); setShowSpecialtyList(false); }}
          className="w-1/5 p-2 border-r"
          placeholder="Location"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setShowSpecialtyList(true)}
          className="w-3/5 p-2 w-full max-w-full"
          placeholder="Search doctors, clinics, hospitals, etc."
        />
        {searchTerm && (
          <button onClick={clearSearch} className="mr-10 ">
           <DisabledByDefaultIcon/>
          </button>
        )}
      </div>

      {showLocationList && (
        <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-1 z-10">
          <div className="flex justify-end p-2">
            <button onClick={closeLocationList} className="text-gray-500 hover:text-gray-800"><DisabledByDefaultIcon/></button>
          </div>
          <div
            onClick={() => alert('hello')}
            className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <span className="mr-2 text-blue-500">Use my current location</span>
            </div>
          </div>
          <div
            onClick={() => alert('hello')}
            className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <span className="mr-2 text-blue-500">Search in entire Delhi</span>
            </div>
          </div>
          {filteredLocations.map((loc, index) => (
            <div
              key={index}
              onClick={() => handleLocationClick(loc)}
              className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div>
                <span className="mr-2">📍</span>{loc}
              </div>
            </div>
          ))}
        </div>
      )}

      {showSpecialtyList && (searchTerm || location) && (
        <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-1 z-10">
          <div className="flex justify-end p-2">
            <button onClick={closeSpecialtyList} className="text-gray-500 hover:text-gray-800"><DisabledByDefaultIcon/></button>
          </div>
          {filteredSpecialties.map((specialty, index) => (
            <div
              key={index}
              onClick={() => { setSearchTerm(specialty); setShowSpecialtyList(false); }}
              className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div>
                <span className="mr-2">🔍</span>{specialty}
              </div>
              <div className="text-gray-500">SPECIALITY</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
