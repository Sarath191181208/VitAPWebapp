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

<div class="my-10 grid grid-cols-2 gap-4">
  <a
    href="/pages/acadhistory"
    class="rounded bg-gray-500 px-4 py-2 font-bold text-white transition hover:bg-gray-700"
  >
    Acad History
  </a>
  <a
    href="/pages/attendance"
    class="rounded bg-gray-500 px-4 py-2 font-bold text-white transition hover:bg-gray-700"
  >
    Attendance
  </a>
  <a
    href="/pages/settings"
    class="rounded bg-gray-500 px-4 py-2 font-bold text-white transition hover:bg-gray-700"
  >
    Settings
  </a>
  <a
    href="/pages/timetable"
    class="rounded bg-gray-500 px-4 py-2 font-bold text-white transition hover:bg-gray-700"
  >
    Timetable
  </a>
</div>
