<script lang="ts">
import { page } from "$app/stores";
import { studentData } from "$stores/student";
const subjectDetails = $page.url.searchParams.get("subjectDetails");
if (subjectDetails == null) {
  window.location.href = "./attendance";
}
const [code, courseName] = subjectDetails?.split("__") ?? ["", ""];
const attd = $studentData?.attendance;
const attendanceData = Object.values(attd ?? []).filter(
  (item) => item.code == code && item.courseName == courseName,
)[0];
</script>

<h1 class="text-3xl dark:text-gray-700 mb-8">{code} - {courseName}</h1>

<!-- show the attendanceData.histor -->
{#if attendanceData != undefined}
  {#each attendanceData.history as item}
    <div class="m-2 flex flex-row place-items-center justify-between rounded-md p-5 shadow dark:bg-gray-800 min-w-0">
      <div>
        <h1 class="text-xl dark:text-white">{item["Attendance Date"]}</h1>
        <h2 class="text-xl text-gray-600 dark:text-gray-700">
          {item["Day And Timing"]}
        </h2>
      </div>
      <!-- if Attendance Status: "Present"  show green p else if starting letter isn't a 
show string with purple color else show absent with red color-->
      {#if item["Attendance Status"] == "Present"}
        <p class="text-green-500 dark:text-green-400">
          {item["Attendance Status"]}
        </p>
      {:else if item["Attendance Status"][0] != "A"}
        <p class="text-purple-500 dark:text-purple-400">
          {item["Attendance Status"]}
        </p>
      {:else}
        <p class="text-red-500 dark:text-red-400">
          {item["Attendance Status"]}
        </p>
      {/if}
    </div>
  {/each}
{:else}
  <h1 class="text-3xl dark:text-gray-700">-- No attendance data found ! --</h1>
{/if}
