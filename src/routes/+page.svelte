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
import { fetchAllDetails, getFilteredTimeTable, type Student } from "../api/allDetails";
import { getAllDetailsUrl, rootUrl } from "../api/urls";
import CloseSvg from "../components/icons/CloseSvg.svelte";
import { unamePassword } from "$stores/usernamePassword";
import { performLogin } from "./actions";

let errorMessage: string | null;
let allDetailsUrl = getAllDetailsUrl($rootUrl);
let showLoader = false;

const getUserData = async (
  username: string | undefined,
  password: string | undefined,
) => {
  if (!username || !password) {
    return;
  }
  try {
    showLoader = true;
    await performLogin(allDetailsUrl, username, password);
    window.location.href = "/pages/home";
  } catch (error) {
    console.log(error);
    errorMessage = error.message;
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
  <p class="mt-2 dark:text-gray-300">
    An open source UI wrapper around the open source <a
      class="text-blue-900 underline dark:text-blue-600"
      href="https://github.com/Sarath191181208/VTOP_API">VTOP API</a
    >
    to make it easier to use. This is an alternative to the UI flutter wrapper
    <a
      class="text-blue-900 underline dark:text-blue-600"
      href="https://github.com/Sarath191181208/vtop_app">vtop app</a
    >, later formalized as <b> VITAP-App </b>. This project aims to seperate the
    dependency of running on our server while giving the users to control their
    own server and use it out of their own accord. Link to the github
    <a
      class="text-blue-900 underline dark:text-blue-600"
      href="https://github.com/Sarath191181208/VitAPWebapp">VitAPWebapp</a
    >. The project is under MIT License therefore you are free to change it as
    you please.
  </p>
  <form use:form>
    <div class="mx-auto my-4 mt-10 grid max-w-xl grid-cols-2 grid-rows-2 gap-2">
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
        class="col-span-2 mx-0 my-4 max-w-[150px] rounded border-2 border-purple-600 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text px-4 py-2 text-black text-transparent hover:border-transparent hover:bg-clip-padding dark:text-white"
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
  <details>
    <summary class="text-center dark:text-white">Advance Configuration</summary>
    <div class="mt-4 dark:text-white" >
      <div class="grid max-w-xl grid-cols-2 grid-rows-2 gap-2 mx-auto">
        Change the root url of the api
        <input
          type="text"
          name="root_url"
          use:validators="{[required]}"
          placeholder="Enter the root url"
          class="dark:bg-slate-900 dark:text-white"
          bind:value={$rootUrl}
        />
      </div>
      </div>
  </details>
</div>

{#if showLoader}
  <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
{/if}

{#if errorMessage}
  <div
    class="fixed bottom-0 right-0 m-4 flex flex-row rounded bg-red-500 p-4 text-center text-white"
  >
    {errorMessage}
    <!--create a close button-->
    <button class="translate-y-[2px]" on:click="{() => (errorMessage = null)}">
      <CloseSvg />
    </button>
  </div>
{/if}
