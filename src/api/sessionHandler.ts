import { getCurriculumUrl, getLoginUrl, rootUrl } from "./urls";

let cookie: string = "";

async function logIn(username: string, password: string) {
  rootUrl.subscribe(async (value) => {
    const loginUrl = getLoginUrl(value);
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const cookieJson = await fetch(loginUrl, {
      method: "POST",
      body: formData,
    });
    // cons.log({ co kie: c: cookien.headers.get("set-cookie") }) }
    // cookie = cookieJson.headers.get("set-cookie") || "";
  });
}

async function getCurriculum(roll_no: string) { 
    rootUrl.subscribe(async (value) => {
        const curriculumUrl = getCurriculumUrl(value);
      const formData = new FormData();
      formData.append("roll_no", roll_no);
        const curriculumJson = await fetch(curriculumUrl, {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "application/json",
                "Cookie": cookie,
            },
        });
    });
}

export { cookie, logIn, getCurriculum};
