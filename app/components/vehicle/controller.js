const httpStatus = require('http-status');
const util = require('./vehicle');

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
    const vehicle = await util.update(req.params.id ,req.body);
    const ans = {
      message: "Vehículo actualizado exitosamente",
      data: vehicle
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
      message: "Vehículo eliminado exitosamente"
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
    const vehicle = await util.create(req.body);
    const ans = {
      message: "Vehículo creado exitosamente",
      data: vehicle
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