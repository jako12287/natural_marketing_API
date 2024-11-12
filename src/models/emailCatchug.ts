import { model, Schema } from "mongoose";

interface EmailCatchugProps extends Document {
  email: string;
  name: string;
  checked: boolean;
}

const EmailCatchugSchema = new Schema<EmailCatchugProps>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    checked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const EmailCatchugModel = model<EmailCatchugProps>("EmailCatchug", EmailCatchugSchema);
export default EmailCatchugModel;
