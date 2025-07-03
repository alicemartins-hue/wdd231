
const yearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;
