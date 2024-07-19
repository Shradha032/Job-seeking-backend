import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
   title: {
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3, "Job title must contain at least 3 characters!"],
    maxLength: [50, "Job title cannot exceed 50 characters!"],
   },
   description: {
    type: String,
    required: [true, "Please provide job description"],
    minLength: [50, "Job description must contain at least 50 characters!"],
    maxLength: [650, "Job description cannot exceed 650 characters!"],
   },
   category: {
    type: String,
    required: [true, "Job category is requitred!"],
   },
   country: {
    type: String,
    required: [true, "Job Country is required!"]
   },
   city: {
    type: String,
    required: [true, "Job City is required!"]
   },
   location: {
   type: String,
    required: [true, "Please provide exact location!"],
    minLength: [3, "Job location must contain at least 3 characters!"],
   },
   fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain atleast 4 digits!"],
    maxLength: [9, "Fixed salary cannot exceed 9 digits!"]
   },
   salaryFrom: {
    type: Number,
    minLength: [4, "Salary From must contain atleast 4 digits!"],
    maxLength: [9, "Salary From cannot exceed 9 digits!"]
   },
   salaryTo: {
    type: Number,
    minLength: [4, "Salary To must contain atleast 4 digits!"],
    maxLength: [9, "Salary To cannot exceed 9 digits!"]
   },
   expired: {
    type: Boolean,
    default: false
   },
   jobPostedOn: {
    type: Date,
    default: Date.now,
   },
   postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
   },
});

export const Job = mongoose.model("Job", jobSchema);