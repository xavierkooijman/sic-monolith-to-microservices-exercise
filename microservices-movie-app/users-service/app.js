const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.models");

// Use environment variable when available for security
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const app = express();
app.use(express.json());


// Routes
app.use("/users", require("./routes/user.routes"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
