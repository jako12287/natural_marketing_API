import { Schema, Document, model } from "mongoose";

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IOffers extends Document {
  photos: string[];
  status: Status;
}

const offerSchema = new Schema<IOffers>({
  photos: { type: [String], required: true },
  status: { type: Schema.Types.String, required: true, enum: Object.values(Status) },
});

const OffersModel = model<IOffers>("Offer", offerSchema);

export default OffersModel;
