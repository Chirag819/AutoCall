import React from 'react'
import { Languages } from '../utils/constant'

const SelectLanguage = () => {
  
  return (
    <fieldset className="border border-gray-600 rounded w-32 hover:border-gray-200">
      <legend className="text-gray-400 text-sm px-1">Language</legend>
        <select name ="Language" id="Language" className="bg-black text-white focus:outline-none mb-1 p-3">
            {
                Languages.map((language, index) => (
                    <option key={index} value={language}>{language}</option>
                ))
            }
        </select>
    </fieldset>
  )
}

export default SelectLanguage