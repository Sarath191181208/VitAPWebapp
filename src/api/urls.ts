import { writable } from "svelte/store";

export const rootUrl = writable<string>("http://127.0.0.1:5000");
let rootUrlValue = "http://127.0.0.1:5000";
loadRootUrlFromCache();

rootUrl.subscribe((value) => {
  if (value) {
    localStorage.setItem("rootUrl-V1", JSON.stringify(value));
  }
  rootUrlValue = value;
});

function loadRootUrlFromCache() {
  // read from local cache
  const cachedRootUrl = localStorage.getItem("rootUrl-V1");
  if (cachedRootUrl) {
    rootUrl.set(JSON.parse(cachedRootUrl));
  }
}

export function getAllDetailsUrl(rootUrl: string) {
  return rootUrl + "/api/v1/alldetails";
}

export function getRootUrl() {
  return rootUrlValue;
}

export function getLoginUrl(rootUrl: string) {
  return rootUrl + "/api/v1/login";
}

export function getCurriculumUrl(rootUrl: string) {
  return rootUrl + "/api/v1/get_curriculum2";
}
