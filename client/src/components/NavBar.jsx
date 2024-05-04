import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-wrap justify-between"
    >
      {/* For logo and title */}
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex "
        >
          <img
            src={logo}
            alt="logo of lovely tube"
            className="h-8 w-8 rounded-lg md:mt-0.5 md:h-[25px] md:w-[40px] lg:h-[40px] lg:w-[40px]"
          />
          <h2 className=" ml-1 lg:mt-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl  ">
            FawFlix
          </h2>
        </motion.div>
      </Link>

      <SearchBar />
    </motion.nav>
  );
}

export default Navbar;
