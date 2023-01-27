// this JS file can be aslo a txt file , we made it a JS file just to show u the API's objects.

// Login API's >>>
const login_api = {
    "info": {
        "title": "Login API",
        "version": "1.0.0",
        "summary": "User login",
    },
    "path" : "/login",
    "Method": "POST",
    "input": ["email", "password"],
    "content": "application/json",
    "response": {
        "200" : {
            "auth": "true",
            "msg": "Logged in successfully.",
            "data": "the result.rows>>>  user-Role: RM/PM/SM",
            "token": "token"
        },
        "400": {
            "msg": "Something went wrong!"
        },
        "401": {
            "auth": "false",
            "msg": "Unauthorized, no access permissions!"
        }
    }
}


// Projects API's >>>
const projects_api = {
    "info": {
        "title": "Projects API",
        "version": "1.0.0",
        "summary": "Retrieve a list of all projects for the logged in RM",
    },
    "path" : "/projects",
    "Method": "GET",
    "content": "application/json",
    "response": {
        "200" : {
            "msg": "all projects retrieved successfully.",
            "data" : "the result.rows"
        },
        "404": {
            "msg": "No projects found for the provided RM !!"
        },
        "500": {
            "msg": "Unexpected error!!"
        }
    }
};

const delete_project_api = {
    "info": {
        "title": "Projects API",
        "version": "1.0.0",
        "summary": "Delete a specific project by it's unique ID",
    },
    "path" : "/projects/delete/:projectId",
    "Method": "DELETE",
    "input": "projectID",
    "content": "application/json",
    "response": {
        "200" : {
            "msg": "The project has been deleted successfully",
        },
        "404": {
            "msg": "The project could not be found"
        }
    }
};

const edit_project_api = {
    "info": {
        "title": "Projects API",
        "version": "1.0.0",
        "summary": "Edit a specific project by it's unique ID",
    },
    "paths" : "/projects/edit/:projectId",
    "Method": "PUT",
    "input": "projectID",
    "content": "application/json",
    "response": {
        "200" : {
            "msg": "Project updated successfully",
        },
        "404": {
            "msg": "The project could not be found"
        },
        "400": {
            "msg" : "Invalid input"
        }
    }
};
const add_project_api = {
    "info": {
        "title": "Projects API",
        "version": "1.0.0",
        "summary": "add a new project to the projects list",
    },
    "paths" : "/projects/add-project",
    "Method": "post",
    "input": ["projectName", "employeesNum", "date"],
    "content": "application/json",
    "response": {
        "200" : {
            "msg": "Project added successfully",
        },
        "404": {
            "msg": "The project could not be added"
        },
        "400": {
            "msg" : "Invalid input"
        }
    }
};


