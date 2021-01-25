const Owner = require("./model");

const create = async (body) => {
  // console.log(body);
  const owner = new Owner({
    name: body.name,
    last_name: body.last_name,
    dni: body.dni,
    email: body.email,
    phone_number: body.phone_number
  });
  return await owner.save();
}

const getAll = async () => {
  return await Owner.find()
  .sort({ creationDate: -1 })
}

const update = async (id, body) => {
  const owner = {
    name: body.name,
    last_name: body.last_name,
    dni: body.dni,
    email: body.email,
    phone_number: body.phone_number
  };
  return await Owner.findByIdAndUpdate(id, owner, {new:true}).exec();
}

const deleteById = async (id) => {
  return await Owner.findByIdAndRemove(id).exec();
}

module.exports = {
  create,
  getAll,
  deleteById,
  update
}