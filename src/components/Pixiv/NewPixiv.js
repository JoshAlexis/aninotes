import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';

const NewPixiv = () => {
  const [pixivItem, setPixivItem] = useState({
    idPixiv: '',
    pixivName: 'In Japanese',
    Quality: '',
    Content: '',
    Favorite: '',
    Link: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    setPixivItem({
      ...pixivItem,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const addNewPixiv = async () => {
      try {
        await api.post('/pixiv/', pixivItem)
        alert('Pixiv Added!');
        history.push('/')
      } catch (err) {
        alert('Cannot add the item!');
      }
    }

    addNewPixiv()
  }

  return (
    <div className="w-4/5 m-auto">
      <h2 className="text-center mt-3 text-2xl text-indigo-500">Add new Pixiv</h2>
      <div className="shadow-2xl bg-gray-50 rounded-lg border">
        <form className="flex flex-col w-1/2 mx-auto mt-3" onSubmit={handleSubmit}>
          <input type="text" name="idPixiv" id="" placeholder="idPixiv"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <input type="text" name="pixivName" id="" placeholder="pivixName"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <input type="text" name="Content" id="" placeholder="Content"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <input type="text" name="Quality" id="" placeholder="Quality"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <input type="text" name="Favorite" id="" placeholder="Favorite"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <input type="url" name="Link" id="" placeholder="Link"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange} />
          <button type="submit" className="outline-none my-2 p-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm text-gray-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewPixiv
