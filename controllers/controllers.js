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
    const student = await dbCollection.findOne({ _id: request.params.id });
    if (!student) {
      return reply.code(404).send({ error: "Student not found" });
    }
    return reply.code(200).send(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { getItems };
