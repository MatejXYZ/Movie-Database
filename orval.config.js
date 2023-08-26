const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  movies: {
    output: {
      mode: "tags",
      target: "src/api/queries",
      schemas: "src/api/models",
      client: "react-query",
      override: {
        query: {
          useQuery: true,
        },
      },
    },
    input: {
      target: "https://www.omdbapi.com/swagger.json",
    },
  },
};
