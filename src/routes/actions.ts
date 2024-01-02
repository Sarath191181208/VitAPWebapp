import { studentData } from "$stores/student";
import { unamePassword } from "$stores/usernamePassword";
import { fetchAllDetails, getFilteredTimeTable, type Student } from "../api/allDetails";

export async function performLogin(url: string, username: string, password: string) {
let userDetails: Student = await fetchAllDetails(
      url,
      username,
      password,
    );
    unamePassword.set({ username, password });
    let nonRepeatedTimeTable = getFilteredTimeTable(userDetails.timetable);
    userDetails.timetable = nonRepeatedTimeTable;
    studentData.set(userDetails);
}