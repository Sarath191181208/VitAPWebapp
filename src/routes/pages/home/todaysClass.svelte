<script lang="ts">
import { studentData } from "../../../stores/student";
import type { TimeTable, TimeSlot } from "../../../api/allDetails";
import { getEndTime } from "../../../api/allDetails";
import TimeTableCard from "../../../components/TimeTableCard.svelte";
import { getCurrentTime, getToday } from "../../../currentDateTime";
import Carousel from "../../../components/Carousel.svelte";

export let className: string = "";

let timeTable: TimeTable = $studentData?.timetable;
let today = getToday();
let currentTime = getCurrentTime();
let singleSlotEntryMap: TimeSlot[] | undefined =
  timeTable?.[today] ?? undefined;
//collect all entries for the current day and are not yet over
singleSlotEntryMap = singleSlotEntryMap?.filter(
  (singleSlotEntry) =>
    currentTime <= getEndTime(singleSlotEntry).asSingleNumber(),
);
// sort the entries by start time
singleSlotEntryMap = singleSlotEntryMap?.sort((a, b) => {
  if (a.startTime < b.startTime) {
    return -1;
  }
  if (a.startTime > b.startTime) {
    return 1;
  }
  return 0;
});
// if len is 0 then set to undefined
if (singleSlotEntryMap?.length == 0) {
  singleSlotEntryMap = undefined;
}
</script>

<div class=" {className}">
  <!-- Create a scrollable card container with the timetable  -->
  {#if singleSlotEntryMap != undefined && singleSlotEntryMap.length != 0}
    <h1 class="mb-5 text-2xl dark:text-gray-400">{today}</h1>
    <Carousel perPage={1}>
      {#each singleSlotEntryMap as singleSlotEntry}
        <!-- Create a card style component using tailwind-->
        <TimeTableCard className="h-44 m-1"  singleSlotEntry="{singleSlotEntry}" />
      {/each}
    </Carousel>
  {:else}
    <h1 class="text-2xl dark:text-gray-500">-- No classes today --</h1>
  {/if}
</div>
