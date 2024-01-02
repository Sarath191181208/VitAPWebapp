
import { writable } from "svelte/store";

export interface UsernamePassword {
    username: string;
    password: string;
}
const localCacheKey = "unamePassword-V1";
export const unamePassword = writable<UsernamePassword | null>(null);
loadUnamePasswordFromCache();

// write to local cache
unamePassword.subscribe((value) => {
  if (value) {
    localStorage.setItem(localCacheKey, JSON.stringify(value));
  }
});

function loadUnamePasswordFromCache() {
  // read from local cache
  const cachedDetails = localStorage.getItem(localCacheKey);
  if (cachedDetails) {
    unamePassword.set(JSON.parse(cachedDetails));
  }
}