const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Fetch movies from the api
app.use("/api/movies", require("./routes/fetchedMovies"));

// Routes for favorites
app.use("/api/favorites", require("./routes/favoritesRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
