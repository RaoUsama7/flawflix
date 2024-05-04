import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          {' '}
          Search
        </label>

        <div className="relative">
          <input
            className=" h-8 w-36 rounded-lg border border-gray-300 bg-gray-800  p-4 text-sm text-purple-200 focus:border-purple-800 focus:outline-none focus:ring-purple-800 sm:w-40  md:w-72 md:pl-10 lg:h-11 lg:w-[600px]"
            placeholder="Search ... "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="default-search"
            type="text"
          />

          <button
            type="submit"
            className="absolute right-2.5 bottom-2 pr-2 md:bottom-3  "
          >
            <BsSearch />
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default SearchBar;
