import React, { useState,useEffect } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useRouter } from 'next/navigation';
import {makeRequest} from '@/Utils/FatchData'
import {special,search_Item} from '@/Utils/Api_URL'
import {decryptData,encryptData} from '@/Utils/Sceret'


const locations = [
  { id: 1, name: 'Dwarka' },
  { id: 2, name: 'Rohini' },
  { id: 3, name: 'Pitampura' },
  { id: 4, name: 'Janakpuri' },
  { id: 5, name: 'Saket' },
  { id: 6, name: 'Lajpat Nagar' },
  { id: 7, name: 'Paschim Vihar' },
];

// const specialties = [
//   { id: 1, name: 'Dentist' },
//   { id: 2, name: 'Gynecologist-obstetrician' },
//   { id: 3, name: 'General Physician' },
//   { id: 4, name: 'Dermatologist' },
//   { id: 5, name: 'Ear-nose-throat (ENT) Specialist' },
//   { id: 6, name: 'Homoeopath' },
//   { id: 7, name: 'Ayurveda' },
//   { id: 8, name: 'Cardiologist' },
//   { id: 9, name: 'Orthopedic Surgeon' },
// ];

// const doctorsAndHospitals = [
//   { id: 1, name: 'Dr. John Doe - Cardiologist' },
//   { id: 2, name: 'Dr. Jane Smith - Orthopedic Surgeon' },
//   { id: 3, name: 'City Hospital' },
//   { id: 4, name: 'Community Health Center' },
//   { id: 5, name: 'Lakeview Dental Clinic' },
// ];





const Searchbar = ({searchvalue}) => {
  console.log(searchvalue);
  const value = JSON.parse(decryptData(searchvalue?.spec))
  const [specialist,setspecialist] = useState([])
  const [location, setLocation] = useState(searchvalue?.doc || 'Delhi');
  const [searchTerm, setSearchTerm] = useState(value?.spec || '');
  const [filteredSpecialties, setFilteredSpecialties] = useState(specialist);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [doctorname,setdoctorname]=useState([])
  const [showLocationList, setShowLocationList] = useState(false);
  const [showSpecialtyList, setShowSpecialtyList] = useState(false);
  useEffect(()=>{
    try{
      makeRequest('get',special).then((data)=>{
        // console.log(data.data)
        let decryp = JSON.parse(decryptData(data.data))
        // console.log(decryp)
        setspecialist(decryp)
        setFilteredSpecialties(decryp || [])
      })

      makeRequest('get',search_Item).then((data)=>{
        // console.log(data.data)
        let decryp = JSON.parse(decryptData(data.data))
        let modifiedData = decryp.map(result => ({
          ...result,
          spec:result.fullname,
          id:result._id
        }));
        
        // Log the modified data
        console.log(modifiedData);
        
        setdoctorname(modifiedData)    
      })
      
    }
    catch(e){
      console.log(e)
    }
    
    },[])
  // console.log(searchvalue)
  const router = useRouter()
  
  // console.log(searchTerm)
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowSpecialtyList(true);
    setShowLocationList(false);
    if (term.length > 0) {
      // Filter the specialties based on the term
      const filteredSpecialties = specialist?.filter((specialty) =>
        specialty?.spec?.toLowerCase().includes(term.toLowerCase())
      );
    
      // Filter the doctors and hospitals based on the term
      const filteredDoctorsAndHospitals = doctorname?.filter((result) => {
        console.log(result); // Log the result to debug
        return result?.spec?.toLowerCase().includes(term.toLowerCase());
      });
    
      console.log(filteredDoctorsAndHospitals); // Log the filtered results to debug
    
      // Combine the filtered specialties and doctors/hospitals
      const combinedResults = [...filteredSpecialties, ...filteredDoctorsAndHospitals];
      // console.log(combinedResults); // Log the combined results to debug
    
      // Update the state with the combined results
      setFilteredSpecialties(combinedResults.length > 0 ? combinedResults : [{ id: 0, spec: 'No results found' }]);
    } else {
      // If no term, set the filtered specialties to the full list or an empty array
      setFilteredSpecialties(specialist || []);
    }
  };

  const handleLocationSearch = (e) => {
    const term = e.target.value;
    setLocation(term);
    setShowLocationList(true);
    setShowSpecialtyList(false);
    if (term.length > 0) {
      const filtered = locations.filter(loc =>
        loc.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredSpecialties(specialist);
  };

  const handleLocationClick = (loc) => {
    setLocation(loc.name);
    setShowLocationList(false);
    setShowSpecialtyList(true);
  };

  const closeLocationList = () => {
    setShowLocationList(false);
  };

  const closeSpecialtyList = () => {
    setShowSpecialtyList(false);
  };

  const handlespecialist = (specialist) =>{
    console.log(specialist)
    setSearchTerm(specialist.spec);
    setShowSpecialtyList(false); 
    router.push(`/searchdoctor/${location}/${encryptData(JSON.stringify(specialist))}`) 
   
  }
  return (
    <div className="relative w-full max-w-full mx-auto mt-10 px-4 sm:px-6 lg:px-8">
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
            <DisabledByDefaultIcon />
          </button>
        )}
      </div>

      {showLocationList && (
        <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-1 z-10">
          <div className="flex justify-end p-2">
            <button onClick={closeLocationList} className="text-gray-500 hover:text-gray-800">
              <DisabledByDefaultIcon />
            </button>
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
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              onClick={() => handleLocationClick(loc)}
              className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div>
                <span className="mr-2">📍</span>{loc.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {showSpecialtyList && (searchTerm || location) && (
        <div className="absolute bg-white border rounded-lg shadow-lg w-full mt-1 z-10">
          <div className="flex justify-end p-2">
            <button onClick={closeSpecialtyList} className="text-gray-500 hover:text-gray-800">
              <DisabledByDefaultIcon />
            </button>
          </div>
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              onClick={() => {handlespecialist(specialty)}}
              className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <div>
                <span className="mr-2">🔍</span>{specialty.spec}
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
