import type { CourseTypes, Curriculum, CurriculumCourse } from "../../../api/sessionHandler";

export function compare(a, b): number {
  if (b < a) {
    return -1;
  } else if (a === b) {
    return 0;
  }
  return 1;
}

export function getSummedCredits(
  courseKeys: (keyof CourseTypes)[],
  courses: CourseTypes,
) {
  let summedCredits: Record<keyof Curriculum, number> = {};
  for (let key of courseKeys) {
    let _key = key as keyof typeof courses;
    let val = courses[_key].reduce(
      (acc: number, curr: CurriculumCourse) =>
        acc + (curr.registration_status ? curr.credits : 0),
      0,
    );
    summedCredits[_key] = val;
  }
  return summedCredits;
}

export function getCourseScore(course: CurriculumCourse) {
  let score = 0;
  if (course.registration_status === true) {
    score -= 100;
  }
  if (course.is_compulsory === true) {
    score += 10;
  }
  score += course.credits;
  return score;
}

export function toNamableKey(key: string) {
  return key
    .replace(/_([a-z])/g, (_, letter) => " " + letter.toUpperCase())
    .replace(/^./, (letter) => letter.toUpperCase());
}
