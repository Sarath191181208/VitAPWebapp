<script lang="ts">
export let key: string;
export let value: string;
</script>

<div class="flex flex-row justify-between">
  <h1 class=" pl-1 text-lg dark:text-gray-400">{key}</h1>
  <div class="flex flex-row justify-between">
    <p class="text-md font-semibold text-gray-900 dark:text-gray-200">
      {value}
    </p>
  </div>
</div>
