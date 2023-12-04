<script lang="ts">
import AttendanceInfoCard from "../../../components/AttendanceInfoCard.svelte";
import { studentData } from "../../../stores/student";

let attendanceData = $studentData?.attendance;
if (attendanceData != undefined && attendanceData.length == 0) {
  attendanceData = undefined;
}
console.log(attendanceData);
</script>

{#if attendanceData != undefined}
  {#each Object.values(attendanceData) as item}
    <AttendanceInfoCard timeSlotDetails={item} className="m-5"/>
  {/each}
{/if}
