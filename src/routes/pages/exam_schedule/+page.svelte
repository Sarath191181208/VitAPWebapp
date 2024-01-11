<!-- <script lang="ts"> -->
<!-- import { unamePassword } from "$stores/usernamePassword"; -->
<!-- import { fetchExamSchedule } from "../../../api/examSchedule"; -->
<!-- import { rootUrl } from "../../../api/urls"; -->
<!-- import { getExamScheduleUrl } from "../../../api/urls"; -->
<!-- const examScheduleUrl = getExamScheduleUrl(rootUrl); -->
<!-- const unamePassword = $unamePassword; -->
<!-- </script> -->
<!---->
<!-- <div class="dark:text-white"> -->
<!--   {#if usernameAndPassword === null} -->
<!--     <h1 class="text-5xl">No username and password found !</h1> -->
<!--   {:else} -->
<!--     {#await fetchExamSchedule(examScheduleUrl, unamePassword.username, unamePassword.password)} -->
<!--     {:then examSchedule} -->
<!--     {:catch error} -->
<!--        -->
<!--     {/await} -->
<!--   {/if} -->
<!-- </div> -->
