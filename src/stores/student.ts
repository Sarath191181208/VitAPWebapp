import { writable } from "svelte/store";
import type { Student } from "../api/allDetails";

export const studentData = writable<Student | null>(null);

// write to local cache
studentData.subscribe((value) => {
  if (value) {
    localStorage.setItem("studentData-V1", JSON.stringify(value));
  }
});

// read from local cache
const cachedStudent = localStorage.getItem("studentData-V1");
if (cachedStudent) {
  studentData.set(JSON.parse(cachedStudent));
}
