
<script lang="ts">
import { studentData } from "../../../stores/student";
import type { TimeTable, TimeSlot } from "../../../api/allDetails";
import { getEndTime } from "../../../api/allDetails";
import TimeTableCard from "../../../components/TimeTableCard.svelte";

export let className: string =  "";

let timeTable: TimeTable = $studentData?.timetable;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const currentTime = d.getHours() * 60 + d.getMinutes();
let today = weekday[d.getDay()];
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
  <h1 class="text-5xl">{today}</h1>
  {#each singleSlotEntryMap as singleSlotEntry}
    <!-- Create a card style component using tailwind-->
    <TimeTableCard singleSlotEntry="{singleSlotEntry}" />
  {/each}
{:else}
  <h1 class="text-5xl">No classes today</h1>
{/if}</div>
