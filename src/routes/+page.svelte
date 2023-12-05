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

<form use:form>
  <h1>Login</h1>

  <label for="roll_number">Roll Number: </label>
  <input
    type="text"
    name="roll_number"
    use:validators="{[required]}"
    placeholder="Enter your registration number"
  />

  <label for="password">Password: </label>
  <input
    type="password"
    name="password"
    use:validators="{[required]}"
    placeholder="Enter your password"
  />

  <div>
    <HintGroup for="roll_number">
      <Hint on="required">This is a mandatory field</Hint>
      <Hint on="Invalid roll number">Please enter a valid roll number</Hint>
    </HintGroup>

    <HintGroup for="password">
      <Hint on="required">This is a mandatory field</Hint>
    </HintGroup>
  </div>

  <button
    type="submit"
    on:click|preventDefault="{() =>
      getUserData($form.values.roll_number, $form.values.password)}"
  ></button>
</form>

<!--show userdetails using iteration-->
