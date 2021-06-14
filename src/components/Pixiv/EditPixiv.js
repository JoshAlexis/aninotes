import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PixivService from '../../services/PixivService';

const EditPixiv = () => {
  let { id } = useParams();

  const [idItemPixiv, setIdItemPixiv] = useState('');
  const [pixivItem, setPixivItem] = useState({
    idPixiv: '',
    pixivName: 'In Japanese',
    Quality: '',
    Content: '',
    Favorite: '',
    Link: ''
  });

  useEffect(() => {
    const fetchByIdPixiv = async () => {
      try {
        const { data } = await PixivService.getByIdPixiv(id);
        if (data.length > 0) {
          setIdItemPixiv(data[0]._id)
          delete data[0]._id;
          setPixivItem(data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchByIdPixiv();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await PixivService.updatePixiv(idItemPixiv, pixivItem);
      alert('Pixiv Updated!')
      window.location.reload();
    } catch (err) {
      alert('Cannot update Pixiv!')
    }
  }

  const handleChange = (e) => {
    setPixivItem({
      ...pixivItem,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="w-4/5 m-auto">
      <h2 className="text-center mt-3 text-2xl text-indigo-500">Edit Pixiv</h2>
      <div className="shadow-2xl bg-gray-50 rounded-lg border">
        <form className="flex flex-col w-1/2 mx-auto mt-3" onSubmit={handleSubmit}>
          <input type="text" name="idPixiv" id="" placeholder="idPixiv"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.idPixiv} />
          <input type="text" name="pixivName" id="" placeholder="pivixName"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.pixivName} />
          <input type="text" name="Content" id="" placeholder="Content"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.Content} />
          <input type="text" name="Quality" id="" placeholder="Quality"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.Quality} />
          <input type="text" name="Favorite" id="" placeholder="Favorite"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.Favorite} />
          <input type="url" name="Link" id="" placeholder="Link"
            className="my-2 border-b border-gray-400 outline-none"
            onChange={handleChange}
            value={pixivItem.Link} />
          <button type="submit" className="outline-none my-2 p-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm text-gray-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditPixiv
