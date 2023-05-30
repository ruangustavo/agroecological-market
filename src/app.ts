import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { message: "Hello, world!" };
});

const port = 3333 || process.env.PORT;
app
  .listen({ port })
  .then(() => console.log(`🚀 Server running at port ${port}`));
