const express = require("express");

const app = express();

// import routes
const authRoutes = require("./routes/auth.routes");

// middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
