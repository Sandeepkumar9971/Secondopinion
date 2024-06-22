"use client"
import React, { useState,useEffect} from 'react';
import Selectchecklist from '@/components/MultilistSelector';



    const sampleData = [
      { id: "1", name: "Option 1" },
      { id: "2", name: "Option 2" },
      { id: "3", name: "Option 3" },
      { id: "4", name: "Option 4" },
      { id: "5", name: "Option 5" },
      { id: "6", name: "Option 6" },
      { id: "7", name: "Option 7" },
      { id: "8", name: "Option 8" },
      { id: "9", name: "Option 9" },
      { id: "10", name: "Option 10" },
      { id: "11", name: "Option 11" },
      { id: "12", name: "Option 12" },
      { id: "13", name: "Option 13" },
      { id: "14", name: "Option 14" },
      { id: "15", name: "Option 15" },
      { id: "16", name: "Option 16" },
      { id: "any", name: "Any" },
      { id: "none", name: "Doesn't Matter" }
   
  ];
  
  const AddDetailsForm = () => {
    // const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchData, setSearchData ] = useState([]);
    const [isDialogOpen, setDialogOpen] = React.useState(false);
  
  
    const [basicProfileData, setbasicProfileData] = useState([
      { id: 1, name: "service", label: "Profile Created By", data: sampleData, modal: false, defaultValue: searchData.profilecreate },
      { id: 2, name: "education", label: "Marital Status", data: sampleData, modal: false, defaultValue: searchData.maritalstatus },
      { id: 3, name: "Specializations", label: "Having Children", data: sampleData, modal: false, defaultValue: searchData.havingchildren },
      { id: 4, name: "Memberships", label: "Mother Tongue", data: sampleData, modal: false, defaultValue: searchData.mothertongue },
      { id: 5, name: "physicalstatus", label: "Physical Status", data: sampleData, modal: false, defaultValue: searchData.physicalstatus },
  ])

  useEffect(() => {
    setbasicProfileData([
        { ...basicProfileData[0], defaultValue: searchData.profilecreate },
        { ...basicProfileData[1], defaultValue: searchData.maritalstatus, data: sampleData },
        { ...basicProfileData[2], defaultValue: searchData.havingchildren, data: sampleData},
        { ...basicProfileData[3], defaultValue: searchData.mothertongue, data: sampleData },
        { ...basicProfileData[4], defaultValue: searchData.physicalstatus, data: sampleData },
    ]);
  },[])

  const handlemodel = (name, index, profileType) => {
    const updatedProfileData = profileType === 'basic' &&
        basicProfileData.map((item, i) => ({
            ...item,
            modal: i === index
        }))
        setbasicProfileData(updatedProfileData);
      //   if (profileType === 'basic') {
      //     setbasicProfileData(updatedProfileData);
      // }
      }
  
    return (
      // <div className='flex flex-1 flex-wrap gap-2'>
      // <div className="md:w-3/4">
      <>
      {basicProfileData.map((item, index) => (
                                <div className={`md:flex md:items-center mb-6`} key={index}>
                                {/* <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`} key={index}> */}
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="marital-status">
                                            {item.label}
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <Selectchecklist initialValue={item?.defaultValue} defaultValue={'Any'} name={item?.name} header={item?.label} isDialogOpen={item?.modal} 
                                        setDialogOpen={setDialogOpen} 
                                        data={item?.data} closecurrenmodel={basicProfileData} setclosecurrenmodel={setbasicProfileData} searchData={searchData} setSearchData={setSearchData}/>
                                        {/* {getDisplayValue(item.defaultValue,item.data)} */}
                                        <input
                                            value={item?.defaultValue?.length > 2 ? item?.defaultValue.slice(0, 2).join(',') + ', More' : item?.defaultValue}
                                            name={item?.name}
                                            placeholder='Select'
                                            type='text'
                                            className='block w-2/3 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                            onClick={() => { handlemodel(item.name, index, 'basic') }}
                                        />
                                    </div>
                                </div>
                            ))
                            }
        
      </>
    
     
    );
  };
  
  export default AddDetailsForm;




//   <Selectchecklist
//   initialValue={selectedItems}
//   defaultValue={'Any'}
//   name="Service"
//   header="Select Service"
//   isDialogOpen={isDialogOpen}
//   setDialogOpen={setIsDialogOpen}
//   data={sampleData}
//   selectedItems={selectedItems}
//   setSelectedItems={setSelectedItems}
// />
// <div className="form-group mb-4">
// <label htmlFor="inputField">Service</label>
// <input
// type="text"
// id="inputField"
// name="sampleSelect"
// className="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
// readOnly
// onClick={handleDialogOpen}
// value={selectedItems.length === 1 && selectedItems[0]?.name === "Any" ? "Any" :
//   selectedItems.length === 1 && selectedItems[0]?.name === "Doesn't Matter" ? "Doesn't Matter" :
//   selectedItems.map(item => item.name).join(", ")}
 