<style>
:global(.touched:invalid) {
  border-color: red;
  outline-color: red;
}
</style>

<script lang="ts">
import {
  useForm,
  validators,
  HintGroup,
  Hint,
  required,
} from "svelte-use-form";
import { studentData } from "../stores/student";
import { fetchAllDetails, type Student } from "../api/allDetails";

// let userData: Student | undefined = undefined;

// const rolNumberValidator: Validator = (value: string) => {
//   const pattern = new RegExp(/\d\d\w\w\w\d\d\d\d/);
//   if (!pattern.test(value)) {
//     return { "Invalid roll number": "Please enter a valid roll number" };
//   }
// };

const getUserData = async (
  username: string | undefined,
  password: string | undefined,
) => {
  if (!username || !password) {
    return;
  }
  try {
    let userDetails: Student = await fetchAllDetails(username, password);
    studentData.set(userDetails);
    window.location.href = "/pages/home";
  } catch (error) {
    console.log(error);
  }
};

const form = useForm();
</script>

<div class="min-h-screen p-4 dark:bg-slate-900">
  <h1
    class="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text pb-4 text-5xl font-bold text-transparent"
  >
    VIT-AP Webapp
  </h1>
    <p class="dark:text-gray-300 mt-2">
    An open source UI wrapper around the open source <a class="underline text-blue-900 dark:text-blue-600" href="https://github.com/Sarath191181208/VTOP_API">VTOP API</a> to make it easier to use. This is an alternative to the UI flutter wrapper <a class="underline text-blue-900 dark:text-blue-600" href="https://github.com/Sarath191181208/vtop_app">vtop app</a>, later formalized as <b> VITAP-App </b>. This project aims to seperate the dependency of running on our server while giving the users to control their own server and use it out of their own accord. Link to the github <a class="underline text-blue-900 dark:text-blue-600" href="https://github.com/Sarath191181208/VitAPWebapp">VitAPWebapp</a>. The project is under MIT License therefore you are free to change it as you please. 
  </p>
  <form use:form>
    <div class="mx-auto my-4 grid max-w-xl grid-cols-2 grid-rows-2 gap-2 mt-10">
      <label for="roll_number" class="dark:text-white">*Roll Number: </label>
      <input
        type="text"
        name="roll_number"
        use:validators="{[required]}"
        placeholder="Enter your registration number"
        class="dark:bg-slate-900 dark:text-white"
      />

      <label for="password" class="dark:text-white">*Password: </label>
      <input
        type="password"
        name="password"
        use:validators="{[required]}"
        placeholder="Enter your password"
        class="dark:bg-slate-900 dark:text-white"
      />

      <!--submit button-->
      <button
        type="submit"
        on:click|preventDefault="{() =>
          getUserData($form.values.roll_number, $form.values.password)}"
        class="col-span-2 py-2 px-4 rounded text-black dark:text-white max-w-[150px] mx-0 my-4 border-2 border-purple-600 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:bg-clip-padding hover:border-transparent"
      >
        Submit
      </button>
    </div>

    <div class="mt-8 text-sm dark:text-white">
      <HintGroup for="roll_number">
        <Hint on="required">Roll number is a mandatory field</Hint>
        <Hint on="Invalid roll number">Please enter a valid roll number</Hint>
      </HintGroup>

      <HintGroup for="password">
        <Hint on="required">Password is a mandatory field</Hint>
      </HintGroup>
    </div>

    <button
      type="submit"
      on:click|preventDefault="{() =>
        getUserData($form.values.roll_number, $form.values.password)}"
    ></button>
  </form>
</div>
<!--show userdetails using iteration-->
