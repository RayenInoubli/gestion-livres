import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "", // by default: '1.0.0'
    title: "", // by default: 'REST API'
    description: "", // by default: ''
  },
  servers: [
    {
      url: "", // by default: 'http://localhost:3000'
      description: "", // by default: ''
    },
    // { ... }
  ],
  tags: [
    // by default: empty Array
    {
      name: "", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  components: {
    schemas: {
      bookSchema: {
        $name: "The Hobbit",
        author: "",
        $price: 15.99,
        publicationDate: "1937-09-21T00:00:00.000Z",
        categories: [],
        pages: 310,
        publisher: "George Allen & Unwin",
        inStock: true,
        stockQuantity: 50,
        languages: ["English", "Spanish", "German"],
        ratings: 4.8,
        isDigital: true,
        copiesSold: 1000000,
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);