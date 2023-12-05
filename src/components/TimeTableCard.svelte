<script lang="ts">
import type { TimeSlot } from "../api/allDetails";
export let singleSlotEntry: TimeSlot;
</script>

<div
  class="my-2 flex flex-col overflow-hidden rounded-lg bg-white p-6 shadow dark:bg-slate-800 gap-2"
>
  <p class="text-sm font-medium text-indigo-600 dark:text-blue-300">
    {singleSlotEntry.courseName}
  </p>
  <p class="text-xl font-semibold text-gray-900 dark:text-gray-200">
    {singleSlotEntry.startTime} - {singleSlotEntry.endTime}
  </p>
  <p class="text-base text-gray-500 dark:text-gray-300">
    {singleSlotEntry.class}
  </p>
</div>
