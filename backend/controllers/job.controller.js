import { job } from "./models/job.model.js";


export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body
    } catch (error) {
        console.log(error);
    }
}