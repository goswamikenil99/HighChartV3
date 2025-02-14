import  { useState } from 'react'
import { FaHome } from 'react-icons/fa' // Importing icons

function Sidebar() {
  // State to keep track of the selected menu item
  const [selected, setSelected] = useState('home')

  // Handle item click to set the selected menu
  const handleSelect = (item) => {
    setSelected(item)
  }

  return (
    <div className="w-40 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-4">
        {/* Home Item - Conditionally applying the active class */}
        <li
          className={`flex items-center p-2 rounded hover:bg-gray-600 cursor-pointer transition-all ${
            selected === 'home' ? 'bg-gray-600' : ''
          }`}
          onClick={() => handleSelect('home')}
        >
          {/* Home Icon */}
          <FaHome className="mr-3" />
          <a href="#home">Home</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
