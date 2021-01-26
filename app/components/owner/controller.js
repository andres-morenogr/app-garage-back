const httpStatus = require('http-status');
const util = require('./owner');

const getAll = async (res) => {
  try {
    const ans = await util.getAll();

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const update = async (req, res) => {
  try {
    const owner = await util.update(req.params.id ,req.body);
    const ans = {
      message: "Propietario actualizado exitosamente",
      data: owner
    }

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const deleteById = async (req, res) => {
  try {
    await util.deleteById(req.params.id);
    const ans = {
      message: "Propietario eliminado exitosamente"
    }

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const create = async (req, res) => {
  try {
    const owner = await util.create(req.body);
    const ans = {
      message: "Propietario creado exitosamente",
      data: owner
    }

    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

module.exports = {
  create,
  update,
  getAll,
  deleteById
};