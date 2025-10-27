const app = require("./app");
const logger = require("./logger");
const PORT = 5002;

app.listen(PORT, () => {
  logger.info({ port: PORT }, `Reviews service started successfully`);
  console.log(`Server running on port http://localhost:${PORT}/reviews`);
});