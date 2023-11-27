<script lang="ts">
import type { TimeSlot } from "../api/allDetails";
export let singleSlotEntry: TimeSlot;
</script>

<div class="my-2 flex flex-col overflow-hidden rounded-lg bg-white p-6 shadow">
  <p class="text-sm font-medium text-indigo-600">
    {singleSlotEntry.courseName}
  </p>
  <a href="#" class="mt-2 block">
    <p class="text-xl font-semibold text-gray-900">
      {singleSlotEntry.startTime} - {singleSlotEntry.endTime}
    </p>
    <p class="mt-3 text-base text-gray-500">
      {singleSlotEntry.class}
    </p>
  </a>
</div>
