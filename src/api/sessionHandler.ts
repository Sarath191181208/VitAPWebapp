import axios from "axios";
import { getCurriculumUrl, getRootUrl, getLoginUrl } from "./urls";

export const restApi = axios.create({
  baseURL: getRootUrl(),
  withCredentials: true,
});

restApi.interceptors.request.use(
  function (config) {
    config.headers.withCredentials = true; // Sending request with credentials
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

let cookie = {
  value: "",
};

async function logIn(
  rootUrl: string,
  username: string,
  password: string,
): Promise<string> {
  const loginUrl = getLoginUrl(rootUrl);
  // use axios to post
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const resp = await restApi.post(loginUrl, formData);
  cookie.value = resp.data.cookie;
  return cookie.value;
}

export interface CurriculumCourse {
  basket_title: string;
  code: string;
  course_title: string;
  credits: number;
  grade: string;
  is_compulsory: boolean;
  registered_semester: string;
  registration_status: boolean;
  type: string;
}

export interface CourseTypes {
  programme_core: Array<CurriculumCourse>;
  programme_elective: Array<CurriculumCourse>;
  university_core: Array<CurriculumCourse>;
  university_elective: Array<CurriculumCourse>;
}

export type Curriculum = {
  credit_info: Array<{ category: string; credits: number }>;
} & CourseTypes;

async function getCurriculum(
  rootUrl: string,
  roll_no: string,
  _cookie: string,
): Promise<Curriculum> {
  console.log({ roll_no, _cookie });
  const curriculumUrl = getCurriculumUrl(rootUrl);
  const formData = new FormData();
  formData.append("roll_no", roll_no);
  formData.append("cookie", _cookie);
  const curriculumJson = await restApi.post(curriculumUrl, formData);
  console.log(curriculumJson.data);
  return curriculumJson.data;
}

export { cookie, logIn, getCurriculum };
