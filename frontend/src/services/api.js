// services/api.js
const BASE_URL = import.meta.env.VITE_BASE_URL;

// const headers = {
//   "Content-Type": "application/json",
//   "x-api-key": import.meta.env.VITE_API_KEY
// };


export const fetchHealthStatus = () => { // here we are using curly brackets so we need to return explicitly
  return fetch(`${BASE_URL}/health`).then(res => res.json());
}
export const fetchProfile = () =>
  fetch(`${BASE_URL}/get-profile`).then(res => res.json());

export const createAndUpdatePRofile = (method, action, profile) =>
  fetch(`${BASE_URL}/${action}-profile`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "api-access-key": import.meta.env.VITE_API_KEY
    },
    body: JSON.stringify(profile)
  }).then(res => res.json())

export const auth = (secret) =>
  fetch(`${BASE_URL}/auth`, {
    headers: {
      "Content-Type": "application/json",
      "api-access-key": secret
    },
  }).then(res => {
    if (!res.ok) {
      return res.json().then(err => {
        throw err; 
      });
    }
    return res.json();
  });

export const fetchSkills = (tag) =>
  fetch(`${BASE_URL}/skills?tag=${tag}`).then(res => res.json());

export const fetchProjects = (tech) =>
  fetch(`${BASE_URL}/projects?skill=${tech}`).then(res => res.json());

export const globalSearch = (q) =>
  fetch(`${BASE_URL}/get-profile-sections?q=${q}`).then(res => res.json());
