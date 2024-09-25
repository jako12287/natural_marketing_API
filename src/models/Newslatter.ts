import { model, Schema } from "mongoose";

interface NewsProps extends Document {
  email: string;
}

const NewsSchema = new Schema<NewsProps>({
  email: { type: String, required: true, unique: true },
});

const NewsModel = model<NewsProps>("News", NewsSchema);
export default NewsModel;
