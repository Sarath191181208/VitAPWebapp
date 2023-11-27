const rootUrl = "http://127.0.0.1:5000";
const allDetailsUrl = rootUrl + "/api/v1/alldetails";

interface AcademicHistory {
  subjects: Map<string, string> | undefined;
  summary: Map<string, number> | undefined;
}

interface AttendanceInfoSlot {
  attended: number;
  totalClasses: number;
  code: string;
  courseName: string;
  faculty: string;
  percentage: number;
  typeOfClass: string;
}

interface Attendance {
  attendance: AttendanceInfoSlot[] | undefined;
}

interface Profile {
  name: string;
  rollNumber: string;
  branch: string;
  proctorName: string;
  proctorEmail: string;
}

interface TimeSlot {
  slot: string;
  startTime: string;
  endTime: string;
  classRoom: string;
  courseName: string;
}

interface TimeTable {
  timeTable: Map<string, TimeSlot[]> | undefined;
}

export interface Student {
  academicHistory: AcademicHistory;
  attendance: Attendance;
  profile: Profile;
  timeTable: TimeTable;
}

async function fetchAllDetails(
  username: string,
  password: string,
): Promise<Student> {
  // create a form data with username and password
  const userNameAndPassword = new FormData();
  userNameAndPassword.append("username", username);
  userNameAndPassword.append("password", password);
  const response = await fetch(allDetailsUrl, {
    method: "POST",
    body: userNameAndPassword,
  });
  return await response.json();
}

export { fetchAllDetails };
