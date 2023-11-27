const rootUrl = "http://127.0.0.1:5000";
const allDetailsUrl = rootUrl + "/api/v1/alldetails";

class Time {
  hours: number;
  minutes: number;
  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
  }

  fromString(time: string) {
    const [hours, minutes] = time.split(":");
    this.hours = parseInt(hours);
    this.minutes = parseInt(minutes);
  }

  asSingleNumber() {
    return this.hours * 60 + this.minutes;
  }

  toString() {
    return `Time ( ${this.hours}:${this.minutes} )`;
  }

  isLessThan(time: Time) {
    return this.asSingleNumber() < time.asSingleNumber();
  }

  isGreaterThan(time: Time) {
    return this.asSingleNumber() > time.asSingleNumber();
  }

  isEqualTo(time: Time) {
    return this.asSingleNumber() === time.asSingleNumber();
  }
}

interface AcademicHistory {
  subjects: Map<string, string> | undefined;
  summary: Map<string, number> | undefined;
}

interface AttendanceInfoSlot {
  attended: number;
  total: number;
  code: string;
  courseName: string;
  faculty: string;
  percentage: number;
  type: string;
}

interface Profile {
  name: string;
  email: string;
  program: string;
  branch: string;
  // ex: School of Computer Science & Engineering
  school: string;
  appNo: string;
  regNo: string;
  proctorName: string;
  proctorEmail: string;
  proctorMobileNumber: string;
  profileImageBase64: string;
}

interface TimeSlot {
  slot: string;
  startTime: string;
  endTime: string;
  class: string;
  courseName: string;
}

function getStartTime(timeSlot: TimeSlot) {
  const startTime = new Time(0, 0);
  startTime.fromString(timeSlot.startTime);
  return startTime;
}

function getEndTime(timeSlot: TimeSlot) {
  const endTime = new Time(0, 0);
  endTime.fromString(timeSlot.endTime);
  return endTime;
}

type TimeTable = { [s: string]: TimeSlot[] } | undefined;

interface Student {
  academic_history: AcademicHistory;
  attendance: AttendanceInfoSlot[] | undefined;
  profile: Profile;
  timetable: TimeTable;
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

export {
  type AttendanceInfoSlot,
  fetchAllDetails,
  getEndTime,
  getStartTime,
  type Student,
  Time,
  type TimeSlot,
  type TimeTable,
};
