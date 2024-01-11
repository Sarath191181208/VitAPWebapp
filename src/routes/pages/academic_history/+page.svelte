<script lang="ts">
import AcademicsIcon from "../../../components/icons/AcademicsIcon.svelte";
import SettingsIcon from "../../../components/icons/SettingsIcon.svelte";
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

const sortedSubjectByGrades = Object.entries(acadHistory.subjects).sort(
  ([_null, gradeAchievedA], [_nul, gradeAchievedB]) => {
    const gradeA = gradeAchievedA.charCodeAt(0);
    const gradeB = gradeAchievedB.charCodeAt(0);
    if (gradeA == "S".charCodeAt(0) ){
      return -1;
    }
    if (gradeA < gradeB) {
      return -1;
    }
    if (gradeA > gradeB) {
      return 1;
    }
    return 0;
  },
);
</script>

<h1
  class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-5xl font-bold text-transparent">
  <AcademicsIcon className="text-5xl" /> Academics Page
</h1>

{#if acadHistory === undefined || acadHistory === null}
  <h1 class="text-5xl dark:text-white">No Academic History Found</h1>
{:else}
  {#if acadHistory.summary !== undefined && acadHistory.summary !== null}
    <h1 class="mb-2 text-2xl dark:text-white">Summary</h1>
    {#each sortedSummaryKeys as summaryKey}
      <div class="flex flex-row justify-between">
        <h1 class="text-base dark:text-white">{summaryKey}</h1>
        <h1 class="text-sm dark:text-white">
          {acadHistory.summary[summaryKey]}
        </h1>
      </div>
    {/each}
  {/if}
  <div class="m-5"></div>
  {#if acadHistory.subjects !== undefined && acadHistory.subjects !== null}
    <h1 class="mb-2 text-3xl dark:text-white">Academic History</h1>
    {#each sortedSubjectByGrades as [subjectName, gradeAchieved]}
      <div class="flex flex-row justify-between">
        <h1 class="text-base dark:text-white">{subjectName}</h1>
        <h1 class="text-sm dark:text-white">{gradeAchieved}</h1>
      </div>
    {/each}
  {/if}
{/if}
