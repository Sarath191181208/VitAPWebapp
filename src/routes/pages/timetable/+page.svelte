<script lang="ts">
import { studentData } from "../../../stores/student";
import type { TimeTable } from "../../../api/allDetails";
import TimeTableCard from "../../../components/TimeTableCard.svelte";

let timeTable: TimeTable = $studentData?.timetable;

// make the timeTable variable undefined if the timeTable is empty
if (timeTable !== undefined && timeTable !== null) {
  let isEmpty = true;
  let sum = 0
  for (let dayName in timeTable) {
    sum += timeTable[dayName].length;
  }
  isEmpty = sum === 0;
  if (isEmpty) {
    timeTable = undefined;
  }
}
</script>

<!-- Create a scrollable card container with the timetable  -->
{#if timeTable !== undefined && timeTable !== null }
  {#each ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as dayName}
    {#if timeTable[dayName] !== undefined && timeTable[dayName].length != 0}
      <h1 class="text-5xl">{dayName}</h1>
      {#each timeTable[dayName] as singleSlotEntry}
        <!-- Create a card style component using tailwind-->
        <TimeTableCard singleSlotEntry="{singleSlotEntry}"/>
      {/each}
    {/if}
  {/each}
{:else}
  <h1 class="text-5xl">No time-table found !</h1>
{/if}
