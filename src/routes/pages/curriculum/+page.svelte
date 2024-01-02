<script lang="ts">
import { studentData } from "$stores/student";
import { unamePassword } from "$stores/usernamePassword";
import { getCurriculum, logIn } from "../../../api/sessionHandler";
import { rootUrl } from "../../../api/urls";
import Curriculum from "./Curriculum.svelte";
const usernameAndPassword = $unamePassword;
</script>

<div class="dark:text-white">
  {#if usernameAndPassword === null}
    <h1 class="text-5xl">No username and password found !</h1>
  {:else}
    {#await logIn($rootUrl, usernameAndPassword.username, usernameAndPassword.password)}
      <h1 class="text-5xl">Trying to logIn....</h1>
    {:then cookie}
      {#if $studentData !== null && $studentData.profile?.regNo !== undefined}
        {#await getCurriculum($rootUrl, $studentData.profile.regNo, cookie)}
          <h1 class="text-5xl">Trying to get curriculum....</h1>
        {:then curriculum}
          <Curriculum curriculum="{curriculum}" />
        {:catch error}
          <h1 class="text-5xl">Error: {error.message}</h1>
        {/await}
      {:else}
        <h1 class="text-5xl">Student data already isn't found !</h1>
      {/if}
    {:catch error}
      <h1 class="text-5xl">Error loggin you in</h1>
    {/await}
  {/if}
</div>
