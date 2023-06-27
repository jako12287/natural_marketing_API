import { Schema, Document, model } from "mongoose";

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IProduct extends Document {
  name: string;
  descriptionShort: string;
  descriptionLarge: string;
  price: string;
  photos: string[];
  status: Status;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  descriptionShort: { type: String, required: true },
  descriptionLarge: { type: String, required: true },
  price: { type: String, required: true },
  photos: { type: [String], required: true },
  status: { type: Schema.Types.String, required: true, enum: Object.values(Status) },
});

const ProductModel = model<IProduct>("Product", productSchema);

export default ProductModel;
