import { model, Schema } from "mongoose";

interface NewsProps extends Document {
  name: string;
  email: string;
  checked: boolean;
}

const NewsSchema = new Schema<NewsProps>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  checked: { type: Boolean, default: false },
});

const SaveEmailsModel = model<NewsProps>("News", NewsSchema);
export default SaveEmailsModel;
