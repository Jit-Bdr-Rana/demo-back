import swaggerJsDocs from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";
const options: Options = {
  definition: {
    info: {
      title: "myApp",
      version: "1.1",
      description: "demo app",
    },
    basePath: "/api",
  },
  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJsDocs(options);
