import mongoose from "mongoose";

const talentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        skills: {
            type: String,
            required: true,
        },

        experience: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        available: {
            type: Boolean,
            default: true,
        },

        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Talent", talentSchema);