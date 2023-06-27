import { Schema, Document, model } from "mongoose";

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IFaq extends Document {
  ask: string;
  answer: string;
  status: Status;
}

const faqSchema = new Schema<IFaq>({
  ask: { type: String, required: true },
  answer: { type: String, required: true },
  status: {
    type: Schema.Types.String,
    required: true,
    enum: Object.values(Status),
  },
});

const FaqModel = model<IFaq>("Faq", faqSchema);

export default FaqModel;
