import { model, Schema } from "mongoose";

interface IpSaveProps extends Document {
  ip: string;
  city: string;
  country: string;
  originPage: string;
}

const IpSaveSchema = new Schema<IpSaveProps>(
  {
    ip: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    originPage: { type: String },
  },
  {
    timestamps: true,
  }
);

const IpSaveModel = model<IpSaveProps>("IpSave", IpSaveSchema);
export default IpSaveModel;
