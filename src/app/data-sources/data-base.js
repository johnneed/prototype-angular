import { reports } from "./fake-data";
import { Report } from "../models/report";

// Fake API Call
export const fetchReports = (query) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    const results = Object
      .entries(reports)
      .filter(([key, report]) => query && query.pin && report.pin.startsWith(query.pin))
      .map(([key, report]) => new Report({...report, id: key}));
    resolve(results);
  }, 100);
});


// Fake API Call
export const deleteReport = (report) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    resolve(true);  // Yay! Everything went well!
  }, 250);
});


// Fake API Call
export const saveReport = (report) => new Promise((resolve, reject) => {
  window.setTimeout(function () {
    resolve(true);  // Yay! Everything went well!
  }, 1250);
});
