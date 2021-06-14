import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PixivService from '../../services/PixivService';

// Components
import PixivTable from './PixivTable';

const PixivList = () => {
  const [pixivList, setPixivList] = useState({});
  const [idPixiv, setIdPixiv] = useState('');

  const fetchData = async () => {
    try {
      const { data } = await PixivService.getPixivItems();
      if (data) setPixivList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idPixiv) return fetchData();

    const fetchByIdPixiv = async () => {
      try {
        const response = await PixivService.getByIdPixiv(idPixiv);
        if (response.data.length > 0) setPixivList(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchByIdPixiv();
  }

  const handleChange = (e) => {
    setIdPixiv(e.target.value);
  }

  return (
    <>
      <div className="sm:w-full md:w-4/5 mx-auto h-12 pt-3 flex justify-center">
        <form className="w-4/5" onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="idPixiv..." value={idPixiv}
            className="md:w-4/5 outline-none border-b-2 border-gray-400" onChange={handleChange} />
          <button type="submit"
            className="bg-indigo-600 hover:bg-indigo-900 rounded-md text-gray-100 p-1 outline-none focus:outline-none ml-2"
          >Search</button>
        </form>
        <Link to="/add"
          className="bg-indigo-600 text-gray-100 rounded-md px-2 pt-1">New Item</Link>
      </div>
      {
        pixivList ? <PixivTable pixivData={pixivList.data} /> : <p className="text-center text-lg font-bold text-gray-500">There is not data</p>
      }
    </>
  )
}

export default PixivList
