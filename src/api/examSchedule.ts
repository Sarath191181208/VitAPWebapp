export async function fetchExamSchedule(
  getExamScheduleUrl: string,
  username: string,
  password: string,
): Promise<ExamSchedule> {
  // create a form data with username and password
  const userNameAndPassword = new FormData();
  userNameAndPassword.append("username", username);
  userNameAndPassword.append("password", password);
  const response = await fetch(getExamScheduleUrl, {
    method: "POST",
    body: userNameAndPassword,
  });
  return await response.json();
}

export interface ExamSchedule{
  [exam: string]: number
}
