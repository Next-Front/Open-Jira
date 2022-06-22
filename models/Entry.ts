import mongoose, { Model, Schema } from "mongoose";
import { Entry } from '../interfaces/entry';

export interface IEntry extends Entry {}

const EntrySchema = new Schema({
  
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number
  },
  status : {
    type: String,
    enum: {
      values: ["pending", "in-progress", "done"],
      message: "Status is either pending, in-progress or done"
    }
  }

}, { timestamps: true });

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model("Entry", EntrySchema);

export default EntryModel;