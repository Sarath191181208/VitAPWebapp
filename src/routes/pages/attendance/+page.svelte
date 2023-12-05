<script lang="ts">
import AttendanceInfoCard from "../../../components/AttendanceInfoCard.svelte";
import BarChartIcon from "../../../components/icons/BarChartIcon.svelte";
import { studentData } from "../../../stores/student";

let attendanceData = $studentData?.attendance;
if (attendanceData != undefined && attendanceData.length == 0) {
  attendanceData = undefined;
}
</script>

<h1
  class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-5xl font-bold text-transparent"
>
  <BarChartIcon className="text-3xl" /> Attendance Page
</h1>

{#if attendanceData != undefined}
  {#each Object.values(attendanceData) as item}
    <AttendanceInfoCard timeSlotDetails="{item}" className="m-5" />
  {/each}
{:else}
  <h1 class="text-3xl dark:text-gray-700">-- No attendance data found ! --</h1>
{/if}
