const Vehicle = require("./model");

const create = async (body) => {
  console.log(body);
  const vehicle = new Vehicle({
    plate: body.plate,
    color: body.color,
    type: body.type,
    brand: body.brand,
    model: body.model,
    author: body.author
  });
  return await vehicle.save();
}

const getAll = async () => {
  return await Vehicle.find()
  .sort({ creationDate: -1 })
}

const update = async (id, body) => {
  const vehicle = {
    plate: body.plate,
    color: body.color,
    type: body.type,
    brand: body.brand,
    model: body.model,
    author: body.author
  };
  return await Vehicle.findByIdAndUpdate(id, vehicle, {new:true}).exec();
}

const deleteById = async (id) => {
  return await Vehicle.findByIdAndRemove(id).exec();
}

module.exports = {
  create,
  getAll,
  deleteById,
  update
}