import Talent from "../models/Talent.js";

// Add Talent
export const createTalent = async (req, res) => {
    try {
        const talent = await Talent.create(req.body);

        res.status(201).json({
            success: true,
            message: "Talent Added Successfully",
            talent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Talents
export const getTalents = async (req, res) => {
    try {
        const talents = await Talent.find();

        res.json({
            success: true,
            talents,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Single Talent
export const getTalentById = async (req, res) => {
    try {
        const talent = await Talent.findById(req.params.id);

        res.json({
            success: true,
            talent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Talent
export const updateTalent = async (req, res) => {
    try {
        const talent = await Talent.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "Talent Updated Successfully",
            talent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Talent
export const deleteTalent = async (req, res) => {
    try {
        await Talent.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Talent Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};