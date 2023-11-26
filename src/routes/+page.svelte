<script lang="ts">
  import { useForm, validators, HintGroup, Hint, email, required, type Validator } from "svelte-use-form";

  const rollNumberValidator: Validator = (value: string) => {
    const pattern = new RegExp(/\d\d\w\w\w\d\d\d\d/);
    console.log(pattern.test(value))
    if (!pattern.test(value)) {
      return {"Invalid roll number": "Please enter a valid roll number"};
    }
  };     

  const form = useForm();
</script>

<form use:form>
  <h1>Login</h1>

  <label for="roll-number">Email: </label>
  <input type="text" name="roll-number" use:validators={[required, rollNumberValidator]} placeholder="Enter your registration number"/>

  <label for="password">Password: </label>
  <input type="password" name="password" use:validators={[required]} placeholder="Enter your password"/>

  <div> 

  <HintGroup for="roll-number">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="Invalid roll number">Please enter a valid roll number</Hint>
  </HintGroup>

  <HintGroup for="password">
    <Hint on="required">This is a mandatory field</Hint>
  </HintGroup>
    </div>

  <button disabled={!$form.valid}>Login</button>
</form>

<!-- <pre> -->
<!-- {JSON.stringify($form, null, " ")} -->
<!-- </pre> -->

  <style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>

