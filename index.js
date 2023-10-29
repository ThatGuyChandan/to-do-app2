const express = require("express");
const connectDB = require("./database/connect");
require("dotenv").config();
const tasks = require("./routes/tasks");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("./public"));

// app.get("/hello", (req, res) => {
//   res.send("hello");
// });

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; // Get the MongoDB URI from environment variables
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    await connectDB(mongoURI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit the process with an error code
  }
};

start();
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is listening on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
