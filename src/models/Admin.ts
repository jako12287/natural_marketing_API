import mongoose, { Schema, Document } from "mongoose";

export interface AdminModel extends Document {
  email: string;
  password: string;
}

const adminSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model<AdminModel>("Admin", adminSchema);

export default Admin;
