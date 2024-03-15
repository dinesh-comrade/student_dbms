const fastify = require("fastify")({ logger: true });
const PORT = 6000;

fastify.register(require("../routes/routes"));

async function fastifyServer() {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

fastifyServer();
