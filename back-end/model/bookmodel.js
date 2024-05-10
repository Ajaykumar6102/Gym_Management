import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    Pack:{
      type: Number,
      required: true,
      default: 0,
    },
    coach:{
      type: String,
      required: true,
      
    },
    mode:{
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
