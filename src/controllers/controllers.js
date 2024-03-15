const { ObjectId } = require("mongodb");
const { postSchema } = require("../Schema/StudentSchema");

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
      _id: request.params.id,
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
    const { error } = postSchema.validate(request.body, {
      abortEarly: false,
    });
    if (error) {
      return reply.code(400).send({ error: error.details[0].message });
    }
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
    const student = await dbCollection.updateOne(
      { _id: request.params.id },
      { $set: request.body }
    );
    if (student.matchedCount === 0) {
      return reply.code(404).send({ error: "Student Not Found" });
    }
    return reply.code(200).send(student);
  } catch (error) {
    console.error("Error updating student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

const deleteItem = (dbCollection) => async (request, reply) => {
  try {
    const student = await dbCollection.deleteOne({ _id: request.params.id });
    if (student.deletedCount === 0) {
      return reply.code(404).send({ error: "Student Not Found" });
    }
    return reply.code(200).send(student);
  } catch (error) {
    console.error("Error deleting student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { getItems, getItem, postItem, updateItem, deleteItem };
