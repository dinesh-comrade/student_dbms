// async function routes(fastify, options) {
//   fastify.get("/", async (request, reply) => {
//     const result = await client
//       .db(dbName)
//       .collection(collectionName)
//       .find({})
//       .toArray();
//     return result;
//   });

// fastify.post("/", async (request, reply) => {
//   const result = await client
//     .db(dbName)
//     .collection(collectionName)
//     .insertOne(request.body);
//   return result;
// });

// fastify.get("/:id", async (request, reply) => {
//   const result = await client
//     .db(dbName)
//     .collection(collectionName)
//     .findOne({ _id: request.params.id });
//   return result;
// });

// fastify.put("/:id", async (request, reply) => {
//   const result = await client
//     .db(dbName)
//     .collection(collectionName)
//     .updateOne({ _id: request.params.id }, { $set: request.body });
//   return result;
// });

// fastify.delete("/:id", async (request, reply) => {
//   const result = await client
//     .db(dbName)
//     .collection(collectionName)
//     .deleteOne({ _id: request.params.id });
//   return result;
// });
// }

// module.exports = routes;
