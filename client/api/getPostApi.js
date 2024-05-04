import axios from 'axios';

const getPost = async () => {
  const data = axios
    .get('https://fawflix-v2.onrender.com')
    .then((res) => res.data);

  return data;
};

export default getPost;
