import api from '../utils/api';

const getPixivItems = async () => {
  return api.get('/pixiv/?page=1&limit=10');
}

const getByIdPixiv = async (idPixiv) => {
  return api.get(`/pixiv/idpixiv/${idPixiv}`);
}

const updatePixiv = async (id, data) => {
  return api.put(`/pixiv/${id}`, data);
}

const PixivService = {
  getPixivItems,
  getByIdPixiv,
  updatePixiv
}

export default PixivService
