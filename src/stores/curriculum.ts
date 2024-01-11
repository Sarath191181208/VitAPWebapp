import { writable } from "svelte/store";
import type { Curriculum } from "../api/sessionHandler";

const key = "curriculum-V1"
export const curriculum = writable<Curriculum | null>(null);
loadCurriculumDataFromCache();

// write to local cache
curriculum.subscribe((value) => {
  localStorage.setItem(key, JSON.stringify(value));
});

function loadCurriculumDataFromCache() {
  // read from local cache
  const cachedCurriculum = localStorage.getItem(key);
  if (cachedCurriculum) {
    curriculum.set(JSON.parse(cachedCurriculum));
  }
}
