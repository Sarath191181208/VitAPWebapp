async function fetchAllDetails(
  alldetailsUrl: string,
  username: string,
  password: string,
): Promise<Student> {
  // create a form data with username and password
  const userNameAndPassword = new FormData();
  userNameAndPassword.append("username", username);
  userNameAndPassword.append("password", password);
  const response = await fetch(alldetailsUrl, {
    method: "POST",
    body: userNameAndPassword,
  });
  return await response.json();
}

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
  subjects: { [key: string]: string } | undefined;
  summary: { [key: string]: number } | undefined;
}

interface AttendanceInfoSlot {
  history: { [date: string] : string};
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

function filterSameTimeSlots(timeSlots: TimeSlot[]): TimeSlot[] {
  const filteredTimeSlots: TimeSlot[] = [];

  // filter the time slots
  for (let i = 0; i < timeSlots.length; i++) {
    if (i === 0) {
      filteredTimeSlots.push(timeSlots[i]);
    } else {
      const previousTimeSlot = filteredTimeSlots[filteredTimeSlots.length - 1];
      const previousEndTime = getEndTime(previousTimeSlot);
      const currentTimeSlot = timeSlots[i];
      const currentStartTime = getStartTime(currentTimeSlot);
      const isOverlapping = previousEndTime.isGreaterThan(currentStartTime) || previousEndTime.isEqualTo(currentStartTime);
      const isSameCourse = previousTimeSlot.courseName === currentTimeSlot.courseName;
      if (!isOverlapping || !isSameCourse) {
        filteredTimeSlots.push(currentTimeSlot);
        continue;
      }
      // create a new time slot with the same start time as the previous time slot
      // and end time as the current time slot
      const newTimeSlot = {
        ...currentTimeSlot,
        startTime: previousTimeSlot.startTime,
        slot: previousTimeSlot.slot.includes(currentTimeSlot.slot) ? previousTimeSlot.slot : `${previousTimeSlot.slot}+${currentTimeSlot.slot}`,
      };
      filteredTimeSlots[filteredTimeSlots.length - 1] = newTimeSlot;
    }
  }

  return filteredTimeSlots;
}

function getFilteredTimeTable(timeTable: TimeTable): TimeTable {
  const filteredTimeTable: TimeTable = {};
  if (timeTable === undefined) {
    return undefined;
  }
  for (const day in timeTable) {
    const timeSlots = timeTable[day];
    timeSlots.sort((a, b) => {
      const startTimeA = getStartTime(a);
      const startTimeB = getStartTime(b);
      if (startTimeA.isLessThan(startTimeB)) {
        return -1;
      } else if (startTimeA.isGreaterThan(startTimeB)) {
        return 1;
      } else {
        return 0;
      }
    });
    filteredTimeTable[day] = filterSameTimeSlots(timeSlots);
  }
  return filteredTimeTable;
}

export {
  type AttendanceInfoSlot,
  fetchAllDetails,
  getEndTime,
  getStartTime,
  getFilteredTimeTable,
  type Student,
  Time,
  type TimeSlot,
  type TimeTable,
};
