<script lang="ts">
import { studentData } from "../../../stores/student";
import type { TimeTable, TimeSlot } from "../../../api/allDetails";
import TimeTableCard from "../../../components/TimeTableCard.svelte";

let timeTable: TimeTable = $studentData?.timetable;
$: timeTableAsEntries = Object.entries<TimeSlot[]>(timeTable ?? {});
</script>

<!-- Create a scrollable card container with the timetable  -->
{#if timeTable !== undefined && timeTable !== null}
  {#each ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as dayName}
    {#if timeTable[dayName].length != 0}
      <h1 class="text-5xl">{dayName}</h1>
      {#each timeTable[dayName] as singleSlotEntry}
        <!-- Create a card style component using tailwind-->
        <TimeTableCard singleSlotEntry="{singleSlotEntry}" />
      {/each}
    {/if}
  {/each}
{/if}
