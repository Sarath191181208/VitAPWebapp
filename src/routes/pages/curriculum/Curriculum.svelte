<script lang="ts">
import type { CourseTypes, Curriculum } from "../../../api/sessionHandler";
import ListTile from "./ListTile.svelte";
import SubjectCard from "./SubjectCard.svelte";
import {
  compare,
  getCourseScore,
  getSummedCredits,
  toNamableKey,
} from "./utils";
export let curriculum: Curriculum;
let creditInfo = curriculum.credit_info;
let curriculumKeys = Object.keys(curriculum).filter(
  (k) => k !== "credit_info",
) as (keyof CourseTypes)[];
let summedCredits = getSummedCredits(curriculumKeys, curriculum);
let summedTotalCredits = Object.values(summedCredits).reduce(
  (a, c) => a + c,
  0,
);
let totalCreditsInfo = creditInfo[creditInfo.length - 1];
let currentCategory = curriculumKeys[0];

for (let key of curriculumKeys) {
  let category = curriculum[key];
  category.sort((a, b) => compare(getCourseScore(a), getCourseScore(b)));
}

let searchString = "";
$: filteredCurriculum = curriculumKeys.reduce((acc, key) => {
  let category = curriculum[key];
  let filteredCategory = category.filter((subject) => {
    let search = searchString.toLowerCase();
    return (
      subject.code.toLowerCase().includes(search) ||
      subject.course_title.toLowerCase().includes(search)
    );
  });
  acc[key] = filteredCategory;
  return acc;
}, {} as Curriculum);
$: {
  console.log(filteredCurriculum);
}
</script>

<h1
  class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-5xl font-bold text-transparent">
  Curriculum Page
</h1>

{#each curriculumKeys as curr_key, i}
  <ListTile
    key="{toNamableKey(curr_key)}"
    value="{`${summedCredits[curr_key]}/${creditInfo[i].credits}`}" />
{/each}
<ListTile
  key="Total Credits"
  value="{`${summedTotalCredits}/${totalCreditsInfo.credits}`}" />

<!-- create a search box -->
<input
  type="search"
  placeholder="Search for a course"
  bind:value="{searchString}"
  class="mt-8 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-slate-800 dark:text-white" />

{#if searchString.length > 0}
  <!-- Search Category view -->
  {#each Object.keys(filteredCurriculum) as singleCategory}
    {@const subjectList = filteredCurriculum[singleCategory]}
    <!-- keep a header for the category name -->
    {#if subjectList.length > 0}
      <div class="my-8 text-3xl">
        {toNamableKey(singleCategory)}
      </div>
      <div
        class="mt-2 grid grid-cols-1 gap-2 min-[440px]:grid-cols-2 sm:grid-cols-2">
        {#each subjectList as subject}
          <SubjectCard subject="{subject}" />
        {/each}
      </div>
    {/if}
  {/each}
{:else}
  <!-- Change programme scrollable div -->
  <div class="mt-8 overflow-x-auto dark:text-white">
    <div class="flex gap-x-10">
      {#each curriculumKeys as curr_key, i}
        <button
          class:font-bold="{curr_key === currentCategory}"
          on:click="{() => (currentCategory = curr_key)}">
          {toNamableKey(curr_key)}
        </button>
      {/each}
    </div>
  </div>

  <!-- Subjects card list -->
  <div
    class="mt-8 grid grid-cols-1 gap-2 min-[350px]:grid-cols-2 sm:grid-cols-2">
    {#each curriculum[currentCategory] as subject}
      <SubjectCard subject="{subject}" />
    {/each}
  </div>
{/if}
