import React, { useState, useEffect } from 'react';
import DialogDefault from '@/items/dialogbox';
import { useContext } from 'react';
// import { Filtercontext } from '@/src/Context/filter';

const Selectchecklist = ({ isDialogOpen, data, closecurrenmodel, setclosecurrenmodel, header, name, defaultValue, initialValue,searchData, setSearchData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  // const { searchData, setSearchData } = useContext(Filtercontext);

  useEffect(() => {
    if (defaultValue && defaultValue === 'Any') {
      setSelectedItems([...data]);
    }
  }, [defaultValue, data]);

  useEffect(() => {
    if (initialValue) {
      const initialSelectedItems = data.filter(item => initialValue.includes(item.id)); // Use item.id instead of item.name
      if (initialValue[0] === 'Any'){
        setSelectedItems([...data]);
      } else {
        setSelectedItems(initialSelectedItems);
      }
    }
  }, [data, initialValue]);

  const filteredData = data.filter(item =>
    item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDialogClose = () => {
    const updatedProfileData = closecurrenmodel.map((item) => {
      return { ...item, modal: false };
    });
    setclosecurrenmodel(updatedProfileData);
  };

  const handleItemSelect = (itemId) => {
    const selectedItem = data.find(item => item.id === itemId);
    if (selectedItem.name === 'Any') {
        setSelectedItems([...data]);
    }
    else if (selectedItem.name === "Doesn't Matter"){
      setSelectedItems([...data]);
    }
    else {
        if (selectedItems.some(item => item.name === 'Any')) {
            setSelectedItems([selectedItem]);
        } 
        else if (selectedItems.some(item => item.name === "Doesn't Matter")) {
            setSelectedItems([selectedItem]);
        } 
        else {
            if (!selectedItems.find(item => item.id === selectedItem.id)) {
                setSelectedItems([...selectedItems, selectedItem]);
            } else {
                const updatedSelectedItems = selectedItems.filter(item => item.id !== itemId);
                setSelectedItems(updatedSelectedItems);
            }
        }
    }
};

  const handleDialogConfirm = () => {
    let selectedList = [];
    if (selectedItems.some(item => item.name === 'Any') //|| selectedItems=='' || selectedItems==null || selectedItems==undefined
    )
    {
      selectedList = ['Any'];
    } 
    else if(selectedItems.some(item => item.name === "Doesn't Matter")){
      selectedList = ["Doesn't Matter"]
    }
    else {
      selectedList = selectedItems.map(item => item.id); 
    }
    console.log(name, selectedList);
    setSearchData({
      ...searchData,
      [name]: selectedList
    });
    handleDialogClose();  
  };

  return (
    <DialogDefault
      dialogTitle={header}
      isOpen={isDialogOpen}
      handleClose={handleDialogClose}
      handleConfirm={handleDialogConfirm}
      contentClass="custom-content-class"
      buttonRequired={true}
    >
     <div className="max-w-xl mx-auto">
          <div className="relative ">
          <div className="p-4">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/* <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"></path>
                  </svg> */}
                </div>
              <input
                type="text"
                id="table-search"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="p-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={() => handleItemSelect(item.id)}>
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${item.id}`}
                          type="checkbox"
                          name={name}
                          className="w-4 h-4 text-themecolor bg-gray-100 border-gray-300 rounded focus:ring-themecolor dark:focus:ring-themecolor dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          checked={selectedItems.some(selected => selected.id === item.id)}
                        />
                        <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {item.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DialogDefault>
  );
};

export default Selectchecklist;




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

// const ITEMS_PER_PAGE = 10;

// const Selectchecklist = ({ setDialogOpen, isDialogOpen, data, header, selectedItems, setSelectedItems, name, defaultValue, initialValue }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [displayedItems, setDisplayedItems] = useState([]);

//   const listInnerRef = useRef(null);
//   console.log(selectedItems)

//   useEffect(() => {
//     if (defaultValue && defaultValue === 'Any') {
//       setSelectedItems([...data]);
//     }
//   }, [defaultValue, data]);

//   useEffect(() => {
//     if (initialValue) {
//       const initialSelectedItems = data.filter(item => initialValue.includes(item.id));
//       if (initialValue[0] === 'Any') {
//         setSelectedItems([...data]);
//       } else {
//         setSelectedItems(initialSelectedItems);
//       }
//     }
//   }, [data, initialValue]);

//   useEffect(() => {
//     setDisplayedItems(filteredData.slice(0, page * ITEMS_PER_PAGE));
//   }, [page, data, searchQuery]);

//   const filteredData = data.filter(item =>
//     item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   const handleItemSelect = (itemId) => {
   
//     const selectedItem = data.find(item => item.id === itemId);
//     if (selectedItem.name === 'Any') {
//       setSelectedItems([...data]);
//     } else if (selectedItem.name === "Doesn't Matter") {
//       setSelectedItems([...data]);
//     } else {
//       if (!selectedItems.find(item => item.id === selectedItem.id)) {
//         setSelectedItems([...selectedItems, selectedItem]);
//       } else {
//         const updatedSelectedItems = selectedItems.filter(item => item.id !== itemId);
//         setSelectedItems(updatedSelectedItems);
//       }
//     }
//   };

//   const handleDialogConfirm = () => {
//     let selectedList = [];
//     if (selectedItems.some(item => item.name === 'Any')) {
//       selectedList = ['Any'];
//     } else if (selectedItems.some(item => item.name === "Doesn't Matter")) {
//       selectedList = ["Doesn't Matter"];
//     } else {
//       selectedList = selectedItems.map(item => item.id);
//     }
//     setDialogOpen(false);
//   };

//   const handleScroll = () => {
//     if (listInnerRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
//       if (scrollTop + clientHeight >= scrollHeight) {
//         setPage(prevPage => prevPage + 1);
//       }
//     }
//   };

//   return (
//     <Dialog
//       open={isDialogOpen}
//       handler={handleDialogClose}
//       size="sm"
//       className='bg-none'
//     >
//       {/* <DialogHeader>{header}</DialogHeader> */}
//       <DialogBody divider>
//         <div className="max-w-xl mx-auto">
//           <div className="relative ">
//           <div className="p-4">
//               <label htmlFor="table-search" className="sr-only">Search</label>
//               <div className="relative mt-1">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd"
//                       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                       clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   id="table-search"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Search for items"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div
//               className="p-4 max-h-96 overflow-y-auto"
//               ref={listInnerRef}
//               onScroll={handleScroll}
//             >
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <tbody>
//                   {displayedItems.map((item) => (
//                     <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                       <td className="w-4 p-4">
//                         <div className="flex items-center">
//                           <input
//                             id={`checkbox-table-search-${item.id}`}
//                             type="checkbox"
//                             name={name}
//                             className="w-4 h-4 text-themecolor bg-gray-100 border-gray-300 rounded focus:ring-themecolor dark:focus:ring-themecolor dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                             checked={selectedItems.some(selected => selected.id === item.id)}
//                             onChange={() => handleItemSelect(item.id)}
//                           />
//                           <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">
//                             checkbox
//                           </label>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
//                         {item.name}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </DialogBody>
//       <DialogFooter>
//         {/* <div className='flex flex-1 gap-3 float-right'> */}
//         <Button variant="text" color="red" onClick={handleDialogClose} >
//           <span>Cancel</span>
//         </Button>
//         <Button variant="gradient" color="#F1F5F9" onClick={handleDialogConfirm} className="mr-1">
//           <span>Confirm</span>
//         </Button>
//         {/* </div> */}
//       </DialogFooter>
//     </Dialog>
//   );
// };

// export default Selectchecklist;
