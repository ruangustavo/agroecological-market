import { app } from "./server";
import { env } from "@/env";

app
  .listen({ port: env.PORT })
  .then(() => console.log(`🚀 Server running at port ${env.PORT}`));
