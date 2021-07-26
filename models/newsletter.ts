import mongoose, {Document, Model} from "mongoose";
import {NewsletterObj} from "../utils/types";

interface NewsletterDoc extends NewsletterObj, Document {}

const NewsletterSchema = new mongoose.Schema({
	email: { required: true, type: String }, 
}, {
	timestamps: true,
});

export const NewsletterModel = mongoose.models.newsletter || mongoose.model<NewsletterDoc>("newsletter", NewsletterSchema);
