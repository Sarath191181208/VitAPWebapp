<script lang="ts">
  import type { AttendanceInfoSlot } from "../api/allDetails";
  export let timeSlotDetails : AttendanceInfoSlot;
  export let className: string = "";
  let {
    courseName,
    code,
    faculty,
    type,
    attended,
    total,
    percentage
  } = timeSlotDetails;
</script>

<div class="bg-white shadow rounded-lg overflow-hidden {className} dark:bg-slate-800">
  <div class="px-6 py-4">
    <div class="flex items-center justify-between">
      <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-300">{courseName}</h4>
      <span class="text-sm text-gray-500 dark:text-gray-200">{code}</span>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium text-gray-800 dark:text-gray-500">Faculty: {faculty}</span>
        <span class="text-lg font-medium text-gray-800 dark:text-gray-600">Type: {type}</span>
      </div>
      <div class="mt-2">
        <div class="w-full flex justify-between items-center">
          <span class="text-gray-500 dark:text-gray-200">Attendance:</span>
          <div class="flex items-center">
            <span class="text-lg font-bold text-gray-800 dark:text-gray-200">{attended}</span>
            <span class="mx-2 text-gray-500">/</span>
            <span class="text-lg font-bold text-gray-800 dark:text-gray-400">{total}</span>
          </div>
          <span class="text-gray-500 dark:text-gray-200">({percentage}%)</span>
        </div>
      </div>
    </div>
  </div>
</div>
