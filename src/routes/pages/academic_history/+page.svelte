<script lang="ts">
import { studentData } from "../../../stores/student";
const acadHistory = $studentData?.academic_history;
const sortedSummaryKeys = [
  "S",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "CGPA",
  "CreditsEarned",
  "CreditsRegistered",
];
</script>

{#if acadHistory === undefined || acadHistory === null}
  <h1 class="text-5xl">No Academic History Found</h1>
{:else}
  {#if acadHistory.summary !== undefined && acadHistory.summary !== null}
    <h1 class="mb-2 text-5xl">Summary</h1>
    {#each sortedSummaryKeys as summaryKey}
      <div class="flex flex-row justify-between">
        <h1 class="text-base">{summaryKey}</h1>
        <h1 class="text-sm">{acadHistory.summary[summaryKey]}</h1>
      </div>
    {/each}
  {/if}
  <div class="m-5"></div>
  {#if acadHistory.subjects !== undefined && acadHistory.subjects !== null}
    <h1 class="mb-2 text-5xl">Academic History</h1>
    {#each Object.entries(acadHistory.subjects) as [subjectName, gradeAchieved]}
      <div class="flex flex-row justify-between">
        <h1 class="text-base">{subjectName}</h1>
        <h1 class="text-sm">{gradeAchieved}</h1>
      </div>
    {/each}
  {/if}
{/if}
