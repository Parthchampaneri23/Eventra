import Request from "../models/Request.js";

// Create Request
export const createRequest = async (req, res) => {
    try {
        const request = await Request.create(req.body);

        res.status(201).json({
            success: true,
            message: "Request Sent Successfully",
            request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Requests
export const getRequests = async (req, res) => {
    try {
        const requests = await Request.find();

        res.json({
            success: true,
            requests,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Request Status
export const updateRequestStatus = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
            },
            {
                new: true,
            }
        );

        res.json({
            success: true,
            message: "Request Updated Successfully",
            request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Request
export const deleteRequest = async (req, res) => {
    try {
        await Request.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Request Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};