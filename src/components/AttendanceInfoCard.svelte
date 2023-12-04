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

<div class="bg-white shadow rounded-lg overflow-hidden {className}">
  <div class="px-6 py-4">
    <div class="flex items-center justify-between">
      <h4 class="text-2xl font-bold text-gray-800">{courseName}</h4>
      <span class="text-sm text-gray-500">{code}</span>
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium text-gray-800">Faculty: {faculty}</span>
        <span class="text-lg font-medium text-gray-800">Type: {type}</span>
      </div>
      <div class="mt-2">
        <div class="w-full flex justify-between items-center">
          <span class="text-gray-500">Attendance:</span>
          <div class="flex items-center">
            <span class="text-lg font-bold text-gray-800">{attended}</span>
            <span class="mx-2 text-gray-500">/</span>
            <span class="text-lg font-bold text-gray-800">{total}</span>
          </div>
          <span class="text-gray-500">({percentage}%)</span>
        </div>
      </div>
    </div>
  </div>
</div>
