import express from "express";
import { PORT, mongoDBURL } from "./config.js"; // it will contain the port number
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

//middleware for handling cors
  

app.use("/books",bookRoutes);

/************************************ */

// first executed

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`App is running on the port ${PORT}`); // it will listen the port and runs if localhost:5555 is typed in browser
    });
  })
  .catch((err) => {
    console.log(err);
  });
