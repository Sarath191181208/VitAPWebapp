<script lang="ts">
import type { CurriculumCourse } from "../../../api/sessionHandler";

export let subject: CurriculumCourse;
</script>

<div
  class="{`relative max-h-40 rounded-lg bg-white shadow-lg dark:bg-slate-800 ${
    subject.registration_status === true ? 'opacity-50' : ''
  } `}">
  <div class="flex h-full flex-col px-6 py-4">
    <div class="flex justify-between align-middle">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
        {subject.code}
      </h1>
      <span class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {subject.credits}
      </span>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {subject.course_title}
    </p>
    <!-- show compulsary in a very small text -->
    {#if subject.is_compulsory}
      <div
        class="mt-2 flex flex-grow align-text-bottom text-xs text-gray-600 dark:text-gray-400">
        <span class="self-end">
          <span class="text-xs font-bold text-red-500">*</span>Compulsory
        </span>
      </div>
    {/if}
  </div>
</div>
