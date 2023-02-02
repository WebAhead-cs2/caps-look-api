// init an express app
const express = require("express");
const cors = require("cors");

const router = require("./router");
const { errorConverter, errorHandler } = require("./middleware/error");

const app = express();

// cors is a middleware that allows us to specify which domains are allowed to access our API
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.use(errorConverter);
app.use(errorHandler);
const site = require("./database/models/site");
const Absence = require("./database/models/absence");
const Application = require("./database/models/application");
const Capacity = require("./database/models/capacity");
const Employee = require("./database/models/employee");
const Employee_absence = require("./database/models/employee_absence");
const Homepage = require("./database/models/homepage");
const Iteration = require("./database/models/iteration");
const Job = require("./database/models/job");
const Milestone = require("./database/models/milestone");
const Project = require("./database/models/project");
const Reports = require("./database/models/reports");
const Scrum = require("./database/models/scrum");

app.listen(process.env.PORT || 4000, function () {
  console.log("Listening on port http://localhost:4000 !");
});

app.post("/createSite", async (req, res) => {
  const { country_id, location } = req.body;
  site.createSite(country_id, location);
});
app.post("/editSite", async (req, res) => {
  const { site_id, name, country } = req.body;
  site.editSite(site_id, name, country);
});
app.post("/deleteSite", async (req, res) => {
  const { site_id } = req.body;
  site.deleteSite(site_id);
});
app.get("/getSites", async (req, res) => {
  let siteTable = site.getSites();
  res.send(JSON.stringify({ site: siteTable }));
});
//************************************** */
app.post("/createAbsence", async (req, res) => {
  const { name, site_id, mandatory_optional, start_date, end_date } = req.body;
  Absence.createAbsence(
    name,
    site_id,
    mandatory_optional,
    start_date,
    end_date
  );
});
app.post("/editAbsence", async (req, res) => {
  const { id, name, site_id, mandatory_optional, start_date, end_date } =
    req.body;
  Absence.editAbsence(
    id,
    name,
    site_id,
    mandatory_optional,
    start_date,
    end_date
  );
});
app.post("/deleteAbsence", async (req, res) => {
  const { id } = req.body;
  Absence.deleteAbsence(id);
});
app.get("/getAbsences", async (req, res) => {
  let AbsenceTable = Absence.getAbsences();
  res.send(JSON.stringify({ Absence: AbsenceTable }));
});
//************************************** */
app.post("/createApplication", async (req, res) => {
  const { application_name, project_id } = req.body;
  Application.createApplication(application_name, project_id);
});
app.post("/editApplication", async (req, res) => {
  const { id, application_name, project_id } = req.body;
  Application.editApplication(id, application_name, project_id);
});
app.post("/deleteApplication", async (req, res) => {
  const { id } = req.body;
  Application.deleteApplication(id);
});
app.get("/getApplications", async (req, res) => {
  let ApplicationTable = Application.getApplications();
  res.send(JSON.stringify({ Application: ApplicationTable }));
});
//************************************** */
app.post("/createCapacity", async (req, res) => {
  const { productivity, availability, employee_id, total_capacity } = req.body;
  Capacity.createCapacity(
    productivity,
    availability,
    employee_id,
    total_capacity
  );
});
app.post("/editCapacity", async (req, res) => {
  const { id, productivity, availability, employee_id, total_capacity } =
    req.body;
  Capacity.editCapacity(
    id,
    productivity,
    availability,
    employee_id,
    total_capacity
  );
});
app.post("/deleteCapacity", async (req, res) => {
  const { id } = req.body;
  Capacity.deleteCapacity(id);
});
app.get("/getCapacitys", async (req, res) => {
  let CapacityTable = Capacity.getCapacitys();
  res.send(JSON.stringify({ Capacity: CapacityTable }));
});
//************************************** */
app.post("/createEmployee_absence", async (req, res) => {
  const { employee_id, absence } = req.body;
  Employee_absence.createEmployee_absence(employee_id, absence);
});
app.post("/editEmployee_absence", async (req, res) => {
  const { id, employee_id, absence } = req.body;
  Employee_absence.editEmployee_absence(id, employee_id, absence);
});
app.post("/deleteEmployee_absence", async (req, res) => {
  const { id } = req.body;
  Employee_absence.deleteEmployee_absence(id);
});
app.get("/getEmployee_absences", async (req, res) => {
  let Employee_absenceTable = Employee_absence.getEmployee_absences();
  res.send(JSON.stringify({ Employee_absence: Employee_absenceTable }));
});
//************************************** */
app.post("/createEmployee", async (req, res) => {
  const {
    first_name,
    idnumber,
    mail,
    phone,
    productivety,
    site_id,
    job_id,
    accesstier,
    project_id,
    scrum_id,
  } = req.body;
  Employee.createEmployee(
    first_name,
    idnumber,
    mail,
    phone,
    productivety,
    site_id,
    job_id,
    accesstier,
    project_id,
    scrum_id
  );
});
app.post("/editEmployee", async (req, res) => {
  const {
    id,
    first_name,
    idnumber,
    mail,
    phone,
    productivety,
    site_id,
    job_id,
    accesstier,
    project_id,
    scrum_id,
  } = req.body;
  Employee.editEmployee(
    id,
    first_name,
    idnumber,
    mail,
    phone,
    productivety,
    site_id,
    job_id,
    accesstier,
    project_id,
    scrum_id
  );
});
app.post("/deleteEmployee", async (req, res) => {
  const { id } = req.body;
  Employee.deleteEmployee(id);
});
app.get("/getEmployees", async (req, res) => {
  let EmployeeTable = Employee.getEmployees();
  res.send(JSON.stringify({ Employee: EmployeeTable }));
});
//************************************** */
app.post("/createIteration", async (req, res) => {
  const { name, project_id, index, start_date, end_date } = req.body;
  Iteration.createIteration(name, project_id, index, start_date, end_date);
});
app.post("/editIteration", async (req, res) => {
  const { id, name, project_id, index, start_date, end_date } = req.body;
  Iteration.editIteration(id, name, project_id, index, start_date, end_date);
});
app.post("/deleteIteration", async (req, res) => {
  const { id } = req.body;
  Iteration.deleteIteration(id);
});
app.get("/getIterations", async (req, res) => {
  let IterationTable = Iteration.getIterations();
  res.send(JSON.stringify({ Iteration: IterationTable }));
});
//************************************** */
app.post("/createJob", async (req, res) => {
  const { job_id, name } = req.body;
  Job.createJob(job_id, name);
});
app.post("/editJob", async (req, res) => {
  const { job_id, name } = req.body;
  Job.editJob(job_id, name);
});
app.post("/deleteJob", async (req, res) => {
  const { job_id } = req.body;
  Job.deleteJob(job_id);
});
app.get("/getJobs", async (req, res) => {
  let JobTable = Job.getJobs();
  res.send(JSON.stringify({ Job: JobTable }));
});
//************************************** */
app.post("/createMilestone", async (req, res) => {
  const { name, date, project_id, description } = req.body;
  Milestone.createMilestone(name, date, project_id, description);
});
app.post("/editMilestone", async (req, res) => {
  const { id, name, date, project_id, description } = req.body;
  Milestone.editMilestone(id, name, date, project_id, description);
});
app.post("/deleteMilestone", async (req, res) => {
  const { id } = req.body;
  Milestone.deleteMilestone(id);
});
app.get("/getMilestones", async (req, res) => {
  let MilestoneTable = Milestone.getMilestones();
  res.send(JSON.stringify({ Milestone: MilestoneTable }));
});
//************************************** */
app.post("/createProject", async (req, res) => {
  const { name, start_date, pi_count } = req.body;
  Project.createProject(name, start_date, pi_count);
});
app.post("/editProject", async (req, res) => {
  const { id, name, start_date, pi_count } = req.body;
  Project.editProject(id, name, start_date, pi_count);
});
app.post("/deleteProject", async (req, res) => {
  const { id } = req.body;
  Project.deleteProject(id);
});
app.get("/getProjects", async (req, res) => {
  let ProjectTable = Project.getProjects();
  res.send(JSON.stringify({ Project: ProjectTable }));
});
//************************************** */
app.post("/createScrum", async (req, res) => {
  const { name, scrum_master, application_id, project_id } = req.body;
  Scrum.createScrum(name, scrum_master, application_id, project_id);
});
app.post("/editScrum", async (req, res) => {
  const { id, name, scrum_master, application_id, project_id } = req.body;
  Scrum.editScrum(id, name, scrum_master, application_id, project_id);
});
app.post("/deleteScrum", async (req, res) => {
  const { id } = req.body;
  Scrum.deleteScrum(id);
});
app.get("/getScrums", async (req, res) => {
  let ScrumTable = Scrum.getScrums();
  res.send(JSON.stringify({ Scrum: ScrumTable }));
});
//************************************** */
app.get("/getProductivityEmployees", async (req, res) => {
  let ProductivityEmployeeTable = Reports.ProductivityEmployee();
  res.send(JSON.stringify({ ProductivityEmployee: ProductivityEmployeeTable }));
});
//************************************** */
