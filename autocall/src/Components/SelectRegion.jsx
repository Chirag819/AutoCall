import React from 'react'
import { Region } from '../utils/constant'

const SelectRegion = () => {
  
  return (
    <fieldset className="border border-gray-600 rounded w-32 hover:border-gray-200">
      <legend className="text-gray-400 text-sm px-1">Region</legend>
        <select name ="Language" id="Language" className="bg-black text-white focus:outline-none mb-1 p-3">
            {
                Region.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                ))
            }
        </select>
    </fieldset>
  )
}

export default SelectRegion