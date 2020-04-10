import {searchResults1, searchResults3} from "./fake-data";


const scoreMe = (query, result) => {
  const matchables = Object.keys(query).filter(key => typeof query[key] !== "undefined" && query[key] !== null);
  return matchables.reduce((sum, matchable) => JSON.stringify((result[matchable] || "")).toLowerCase().includes(JSON.stringify(query[matchable]).toLowerCase()) ? sum + 1 : sum, 0);
};


const matchUs = (query, data) => {
  const foo = data
    .map(datum => ({
      score: scoreMe(query, datum),
      result: datum
    }))
    .sort((a, b) => b.score - a.score);
  return foo;
};



// Fake Subject API Call
export const searchSubjects = (query = {}) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(function () {
      const results = {
        provider: "Search Provider 3",
        response: searchResults3.subjects,
        count: searchResults3.subjects.length
      };
      resolve(results);  // Yay! Everything went well!
    }, 250);
  });
};


// Fake Vehicle API Call
export const searchVehicles = (query = {}) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(function () {
      const results = {
        provider: "Search Provider 3",
        response: searchResults3.vehicles,
        count: searchResults3.vehicles.length
      };
      resolve(results);  // Yay! Everything went well!
    }, 250);
  });
};
