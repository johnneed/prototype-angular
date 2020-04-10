import {reports} from "./fake-data";
import {Report} from "../models/report";

let myReports = reports;

// Fake API Call
export const searchReports = (pin) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    const results = Object
      .entries(myReports)
      .filter(([key, report]) => pin && report.pin.startsWith(pin))
      .map(([key, report]) => new Report({...report, id: key}));
    resolve(results);
  }, 100);
});


// Fake API Call
export const deleteReport = (reportId) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    myReports = Object
      .keys(myReports)
      .filter(key => key !== reportId)
      .reduce((acc, key) => ({...acc, [key]: myReports[key]}), {});
    resolve(true);  // Yay! Everything went well!
  }, 250);
});


// Fake API Call
export const saveReport = (report) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    const id = Date.now();
    myReports[id] = {...report, id};
    resolve(id);  // Yay! Everything went well!
  }, 250);
});
