/*eslint-env browser*/
const getDomElements = () => {
    form = window.document.getElementById("empForm");
    employeeId = window.document.getElementById("id");
    fullName = window.document.getElementById("name");
    extension = window.document.getElementById("ext");
    email = window.document.getElementById("email");
    department = window.document.getElementById("department");
};

const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("ID: ", employeeId.value);
    console.log("Name: ", fullName.value);
    console.log("Extension: ", extension.value);
    console.log("Email: ", email.value);
    console.log("Department: ", department.value);
};

window.addEventListener("load", () => {
    getDomElements();
    form.addEventListener("submit", handleFormSubmission);
});
