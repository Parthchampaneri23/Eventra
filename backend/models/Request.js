import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
    {
        clientName: {
            type: String,
            required: true,
        },

        clientEmail: {
            type: String,
            required: true,
        },

        talentName: {
            type: String,
            required: true,
        },

        eventName: {
            type: String,
            required: true,
        },

        eventDate: {
            type: String,
            required: true,
        },

        message: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: ["Pending", "Accepted", "Rejected"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Request", requestSchema);