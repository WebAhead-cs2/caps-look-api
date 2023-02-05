const catchAsync = require("../utils/catchAsync")
const ApiError = require("../utils/ApiError")
const db = require("../database/connection");
const { getProjects } = require("../database/models/Project")
    const getProjectsController = catchAsync(async (req, res) => {

        const data = await getProjects();
        if (data) {
            res.status(200).send({
                message: "all projects retrieved successfully.",
                data: data,
            });
        }
    });

    module.exports = {
        getProjectsController,
    }