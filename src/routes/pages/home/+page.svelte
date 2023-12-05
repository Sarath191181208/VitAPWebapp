<script lang="ts">
import HomeIcon from "../../../components/icons/HomeIcon.svelte";
import TodaysClass from "./todaysClass.svelte";
</script>

<h1
  class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-5xl font-bold text-transparent"
>
  <HomeIcon className="text-3xl"/> Home Page
</h1>

<TodaysClass />

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
