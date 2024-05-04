import { motion } from 'framer-motion';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
export default function Separator() {
  return (
    <motion.div className="mt-3 md:mt-5 mb-5 flex justify-between px-3 md:px-0">
      <h2 className=" pl-3 text-lg  lg:text-3xl font-normal "> Hot Cake </h2>
      <div className="flex gap-2">
        <div className="mt-3 h-0 w-40 border-white/10 border  md:w-[500px] lg:w-[800px] xl:w-[900]" />

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" className="flex uppercase hover:text-purple-800 text-gray-600 ">
            More <GoChevronRight className="mt-1" />{' '}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
