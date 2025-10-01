
import React, { useEffect, useRef, useState } from 'react';
import { set } from 'react-hook-form';
import { IoChevronDownOutline, IoChevronUpOutline, IoCloseOutline } from 'react-icons/io5';

export default function Application_Dropdown() {
  const [isOpen, setIsopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const statusDropdownRef = useRef(null);
  const majorDropdownRef = useRef(null);
  const universityDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);
  const gpaDropdownRef = useRef(null);

  const handleOnClickOutside = (event) => {
    if (
      statusDropdownRef.current &&
      !statusDropdownRef.current.contains(event.target)
    ) {
      setIsopen(false);
    }
    if (
      majorDropdownRef.current &&
      !majorDropdownRef.current.contains(event.target)
    ) {
      setIsMajorOpen(false);
    }
    if (
      universityDropdownRef.current &&
      !universityDropdownRef.current.contains(event.target)
    ) {
      setIsuniversityOpen(false);
    }
    if (
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(event.target)
    ) {
      setIslocationOpen(false)
    }
    if (
      gpaDropdownRef.current &&
      !gpaDropdownRef.current.contains(event.target)
    ) {
      setIsgpaOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleOnClickOutside);
    };
  }, []);

  const StatusOptions = ['All', 'Open', 'On-Hold', 'Closed'];

  // Major
  const [isMajorOpen, setIsMajorOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMajors, setSelectedMajors] = useState([]);

  const MajorOptions = [
    "Bachelor of Accounting",
    "Product Manager",
    "Backend Developer",
    "Fullstack Developer",
    "QA Engineer",
    "UX Designer",
    "UI Design Intern",
  ];

  const toggleMajorOption = (option) => {
    if (selectedMajors.includes(option)) {
      setSelectedMajors(prev => prev.filter(o => o !== option));
    } else {
      setSelectedMajors(prev => [...prev, option]);
    }
  };

  const filteredMajorOptions = MajorOptions.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // University 
  const [isUniversityOpen, setIsuniversityOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [selecteduniversity, setSelecteduniversity] = useState([]);

  const UniversityOptions = [
    "Abdulrahman Bin Faisal University",
    "Al Baha University",
    "Al Faisal University",
    "Al Jouf University",
    "Al Yamamah University",
    "AlFarabi Colleges",
    "AlMaarefa University",
    "Arab East Colleges",
    "Arab Open University – Saudi Arabia",
    "Dar Al Hekma University",
    "Effat University",

  ];

  const toggleUniversityOptions = (option) => {
    if (selecteduniversity.includes(option)) {
      setSelecteduniversity(prev => prev.filter(o => o !== option));
    } else {
      setSelecteduniversity(prev => [...prev, option]);
    }
  };


  const filtereduniverisityOptions = UniversityOptions.filter(option =>
    option.toLowerCase().includes(searchName.toLowerCase())
  );


  //location
  const [isLocationOpen, setIslocationOpen] = useState(false);
  const [searchlocation, setSearchlocation] = useState('');
  const [selectedlocation, setSelectedlocation] = useState([]);

  const LocationOptions = [
    "Al Kharj",
    "Al Majma'ah",
    "Al Muzahimiyah",
    "Az Zulfi",
    "Shaqra",
    "Rumah",
    "Dawadmi",
    "Afif",
    "Hotat Bani Tamim",
    "Al Ghat",


  ];

  const toggleLocatonOptions = (option) => {
    if (selectedlocation.includes(option)) {
      setSelectedlocation(prev => prev.filter(o => o !== option));
    } else {
      setSelectedlocation(prev => [...prev, option]);
    }
  };


  const filteredLocationOptions = LocationOptions.filter(option =>
    option.toLowerCase().includes(searchlocation.toLowerCase())
  );


  //gpa


  const [isGpaOpen, setIsgpaOpen] = useState(false);
  const [selectedgpa, setSelectedgpa] = useState([]);

  const GpaOptions = [
    "90 - 100%",
    "80 - 89%",
    "70 - 79%",
    "60 - 69%",
    "Below 60%",

  ];

  const toggleGpaOptions = (option) => {
    if (selectedgpa.includes(option)) {
      setSelectedgpa(prev => prev.filter(o => o !== option));
    } else {
      setSelectedgpa(prev => [...prev, option]);
    }
  };






  return (
    <>
      <div className='flex  w-full  rounded-lg text-[14px] '>

        {/* select */}

        <div className=' w-full relative font-Inter' ref={statusDropdownRef}>
          <button
            onClick={() => setIsopen(!isOpen)}
            className='flex items-center  w-full  whitespace-nowrap px-4 py-[14px] gap-2 border hover:bg-gray-100 rounded-l-xl'
          >
            <span>Select : {selectedOption}</span>
            {isOpen ? <IoChevronUpOutline size={20} /> : <IoChevronDownOutline size={20} />}
          </button>

          {isOpen && (
            <div className='absolute flex flex-col border border-gray-300 p-2 right-2 mt-2 w-[204px] rounded-lg z-10 bg-white'>
              {StatusOptions.map((statusOption, index) => (
                <div
                  key={index}
                  className='py-2 px-3 cursor-pointer mb-3 hover:bg-gray-100 text-gray-500 font-normal text-sm'
                  onClick={() => {
                    setSelectedOption(statusOption);
                    setIsopen(false);
                    console.log('Selected value:', statusOption);
                  }}
                >
                  {statusOption}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Major  */}
        <div className='w-full relative font-Inter' ref={majorDropdownRef}>
          <button
            onClick={() => setIsMajorOpen(!isMajorOpen)}
            className='flex justify-between items-center  w-full border px-3 py-[14px] gap-2 hover:bg-gray-100'
          >
            Major
            {isMajorOpen ? <IoChevronUpOutline size={20} /> : <IoChevronDownOutline size={20} />}
          </button>

          {isMajorOpen && (
            <div className='absolute bg-white border mt-2 w-[343px] rounded-md z-10 p-5 right-2'>
              <label>Major</label>

              <div className="relative flex items-center">
                <span className="absolute left-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search by course name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 text-left   px-9 w-full h-[50px]  rounded-lg mb-3 mt-4 font-normal "
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {selectedMajors.map((opt, idx) => (
                  <div key={idx} className="bg-[#E5F4F4] px-2 py-1 rounded flex items-center text-sm">
                    {opt}
                    <button
                      className="ml-2 text-black"
                      onClick={() =>
                        setSelectedMajors(prev => prev.filter(o => o !== opt))
                      }
                    >
                      <IoCloseOutline />
                    </button>
                  </div>
                ))}
              </div>

              <div className="max-h-40 overflow-y-auto mb-4">
                {filteredMajorOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 py-1  text-gray-500 font-normal text-sm mb-2">
                    <input
                      type="checkbox"
                      checked={selectedMajors.includes(option)}
                      onChange={() => toggleMajorOption(option)}
                      className='accent-[#008080] '
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="border rounded-md w-1/2 bg-white p-2"
                  onClick={() => setIsMajorOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#006666] text-white w-1/2 rounded-md"
                  onClick={() => {
                    console.log('Applied Majors:', selectedMajors);
                    setIsMajorOpen(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/*University */}


        <div className='  w-full relative font-Inter' ref={universityDropdownRef}>
          <button
            onClick={() => setIsuniversityOpen(!isUniversityOpen)}
            className='flex justify-between items-center border  w-full  px-4 py-[14px] gap-2 hover:bg-gray-100 '
          >
            University
            {isUniversityOpen ? <IoChevronUpOutline size={20} /> : <IoChevronDownOutline size={20} />}
          </button>

          {isUniversityOpen && (
            <div className='absolute bg-white  mt-2 w-[443px]  border rounded-md z-10 p-5 right-2'>
              <label>University</label>

              <div className="relative flex items-center">
                <span className="absolute left-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search by university name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="border border-gray-300 text-left   px-9 w-full h-[50px]  rounded-lg mb-3 mt-4 font-normal"
                />
              </div>
              <span className='mb-2 text-gray-400'>Selected</span>

              <div className="flex flex-wrap gap-2 mb-3">

                {selecteduniversity.map((opt, idx) => (
                  <div key={idx} className="bg-[#E5F4F4] px-2 py-1 rounded flex items-center text-sm  ">

                    {opt}
                    <button
                      className="ml-2 text-black"

                      onClick={() =>
                        setSelecteduniversity(prev => prev.filter(o => o !== opt))
                      }
                    >
                      <IoCloseOutline />
                    </button>
                  </div>
                ))}
              </div>

              <div className=" max-h-80 overflow-y-scroll">
                {filtereduniverisityOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 py-2 text-gray-500 font-normal text-sm ">
                    <input
                      type="checkbox"
                      className='accent-[#008080]'
                      checked={selecteduniversity.includes(option)}
                      onChange={() => toggleUniversityOptions(option)}
                    />

                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="border rounded-md w-1/2 bg-white p-2"
                  onClick={() => setIsuniversityOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#006666] text-white w-1/2 rounded-md"
                  onClick={() => {
                    console.log('Applied University:', selecteduniversity);
                    setIsuniversityOpen(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>




        {/* location */}


        <div className=' w-full  relative font-Inter' ref={locationDropdownRef}>
          <button
            onClick={() => setIslocationOpen(!isLocationOpen)}
            className='flex justify-between items-center border w-full  px-4 py-[14px] gap-2  hover:bg-gray-100'
          >
            Location
            {isLocationOpen ? <IoChevronUpOutline size={20} /> : <IoChevronDownOutline size={20} />}
          </button>

          {isLocationOpen && (
            <div className='absolute bg-white mt-2 w-[443px] border  rounded-md z-10 p-5 right-2'>
              <label>Location</label>

              <div className="relative flex items-center">
                <span className="absolute left-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search by location"
                  value={searchlocation}
                  onChange={(e) => setSearchlocation(e.target.value)}
                  className="border border-gray-300 text-left   px-9 w-full h-[50px]  rounded-lg mb-3 mt-4 font-normal"
                />
              </div>
              <span className='mb-2 text-gray-400'>Selected</span>

              <div className="flex flex-wrap gap-2 mb-3">

                {selectedlocation.map((opt, idx) => (
                  <div key={idx} className="bg-[#E5F4F4] px-2 py-1 rounded flex items-center text-sm  ">

                    {opt}
                    <button
                      className="ml-2 text-black"
                      onClick={() =>
                        setSelectedlocation(prev => prev.filter(o => o !== opt))
                      }
                    >
                      <IoCloseOutline />
                    </button>
                  </div>
                ))}
              </div>

              <div className=" max-h-80 overflow-y-scroll">
                {filteredLocationOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 py-2 text-gray-500 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={selectedlocation.includes(option)}
                      onChange={() => toggleLocatonOptions(option)}
                      className='accent-[#008080]'
                    />

                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="border rounded-md w-1/2 bg-white p-2"
                  onClick={() => setIslocationOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#006666] text-white w-1/2 rounded-md"
                  onClick={() => {
                    console.log('Applied Location:', selectedlocation);
                    setIslocationOpen(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>


        {/* Gpa */}



        <div className=' w-full relative font-Inter' ref={gpaDropdownRef}>
          <button
            onClick={() => setIsgpaOpen(!isGpaOpen)}
            className='flex justify-between items-center border w-full   px-3 py-[14px] gap-2 rounded-r-xl hover:bg-gray-100'
          >
            GPA
            {isGpaOpen ? <IoChevronUpOutline size={20} /> : <IoChevronDownOutline size={20} />}
          </button>

          {isGpaOpen && (
            <div className='absolute bg-white border mt-2 w-[328px]   rounded-md z-10 p-5 right-2'>
              <label>GPA</label>

              {/* <div className="relative flex items-center">
                <span className="absolute left-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="Search Gpa"
                  value={searchgpa}
                  onChange={(e) => setSearchgpa(e.target.value)}
                  className="border border-gray-400 text-left py-1 px-9 w-full mb-3 rounded mt-4  font-thin "
                />
              </div> */}
              <div className='mb-2 mt-2 text-gray-400'>Selected</div>

              <div className="flex flex-wrap gap-2 mb-3">

                {selectedgpa.map((opt, idx) => (
                  <div key={idx} className="bg-[#E5F4F4] px-2 py-1 rounded flex items-center text-sm  ">

                    {opt}
                    <button
                      className="ml-2 text-black"
                      onClick={() =>
                        setSelectedgpa(prev => prev.filter(o => o !== opt))
                      }
                    >
                      <IoCloseOutline />
                    </button>
                  </div>
                ))}
              </div>

              <div className=" max-h-80 overflow-y-scroll">
                {GpaOptions.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 py-2 text-gray-500 font-normal text-sm">
                    <input
                      type="radio"
                      className='accent-[#008080]'
                      checked={selectedgpa.includes(option)}
                      onChange={() => toggleGpaOptions(option)}
                    />

                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  className="border rounded-md w-1/2 bg-white p-2"
                  onClick={() => setIsgpaOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#006666] text-white w-1/2 rounded-md"
                  onClick={() => {
                    console.log('Applied GPA:', selectedgpa);
                    setIsgpaOpen(false);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>


      </div>
    </>
  );
}
