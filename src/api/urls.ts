import { writable } from "svelte/store";

export const rootUrl = writable<string>("http://127.0.0.1:5000");
loadRootUrlFromCache();

rootUrl.subscribe((value) => {
  if (value) {
    localStorage.setItem("rootUrl-V1", JSON.stringify(value));
  }
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
