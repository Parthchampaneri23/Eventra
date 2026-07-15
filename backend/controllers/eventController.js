import Event from "../models/Event.js";

// Create Event
export const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);

        res.status(201).json({
            success: true,
            message: "Event Created Successfully",
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Events
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        res.json({
            success: true,
            events,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Single Event
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        res.json({
            success: true,
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Event
export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "Event Updated Successfully",
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Event
export const deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Event Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};