const { ObjectId } = require("mongodb");

const getItems = (dbCollection) => async (request, reply) => {
  try {
    const students = await dbCollection.find({}).toArray();
    return reply.code(200).send(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

const getItem = (dbCollection) => async (request, reply) => {
  try {
    const student = await dbCollection.findOne({
      _id: ObjectId(request.params.id),
    });
    if (!student) {
      return reply.code(404).send({ error: "Student Not Found" });
    }
    return reply.code(200).send(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

const postItem = (dbCollection) => async (request, reply) => {
  try {
    const newId = new ObjectId().toHexString();
    const newItem = { _id: newId, ...request.body };
    const student = await dbCollection.insertOne(newItem);
    return reply.code(201).send(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

const updateItem = (dbCollection) => async (request, reply) => {
  try {
    const id = ObjectId.createFromHexString(request.params.id);
    const result = await dbCollection.updateOne(
      { _id: id },
      { $set: request.body }
    );
    if (result.matchedCount === 0) {
      return reply.code(404).send({ error: "Student Not Found" });
    }
    return reply.code(200).send(result);
  } catch (error) {
    console.error("Error updating student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

const deleteItem = (dbCollection) => async (request, reply) => {
  try {
    const id = ObjectId.createFromHexString(request.params.id);
    const result = await dbCollection.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return reply.code(404).send({ error: "Student Not Found" });
    }
    return reply.code(200).send(result);
  } catch (error) {
    console.error("Error deleting student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { getItems, getItem, postItem, updateItem, deleteItem };
