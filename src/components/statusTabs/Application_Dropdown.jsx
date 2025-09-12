import React from 'react'
import { useState } from 'react'

import Select, { components } from 'react-select';

export default function Application_Dropdown() {

  const StatusOptions = [
    { value: "All", label: "All" },
    { value: "Open", label: "Open" },
    { value: "On-Hold", label: "On-Hold" },
    { value: "Inative", label: "Inative" },
    { value: "Closed", label: "Closed" },
  ]


  const MajorOptions = [
    { value: "Bachelor of Accounting", label: "Bachelor of Accounting" },
    { value: "BProduct Manager", label: "Product Manager" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "QA Engineer", label: "QA Engineerg" },
    { value: "UX Designer", label: "UX Designer" },
  ]


  const Statusvalue = (Select) => {

    console.log("Status value : " + Select.value)

  }
  const Majorvalue = (Select) => {

    console.log(" Major value : " + Select.value)

  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className='flex gap-2'>
          Status:
          <div className='w-60'>
            <Select
              options={StatusOptions}
              defaultValue={StatusOptions[0]}
              onChange={Statusvalue}
              className='focus:outline-slate-600'

            />
          </div>
          <div className='flex gap-2'>
            Major
            <div className='w-60'>
              <Select
                options={MajorOptions}
                placeholder={null}
                isMulti={true}
                onChange={Majorvalue}

              />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

