<script lang="ts">
import TodaysClass from "./todaysClass.svelte";

</script>

<TodaysClass/>

<!-- create a grid with quick links like acadhistory, attd, profile, timetable  the grid columns are automatic and responseive -->
<div class="grid grid-cols-2 gap-4 my-10">
  <a href="/pages/acadhistory" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Acad History
  </a>
  <a href="/pages/attendance" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Attendance
  </a>
  <a href="/pages/profile" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Profile
  </a>
  <a href="/pages/timetable" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Timetable
  </a>
</div>
