<script>
import HomeIcon from "../../components/icons/HomeIcon.svelte";

</script>
<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
  />
</svelte:head>

<div class="min-h-screen dark:bg-slate-900">
  <div class="mx-auto max-w-xl p-5 pb-20">
    <slot />
  </div>
  <div
    class="fixed bottom-0 w-full bg-white stroke-black shadow dark:bg-black dark:stroke-white dark:text-white"
  >
    <div class="flex justify-around">
      <a
        href="/pages/home"
        class="flex flex-col items-center justify-center py-2"
      >
        <HomeIcon className="text-xl"/>
        <span class="text-xs">Home</span>
      </a>
      <a
        href="/pages/attendance"
        class="flex flex-col items-center justify-center py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="text-xs">Attendance</span>
      </a>
      <a
        href="/pages/timetable"
        class="flex flex-col items-center justify-center py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="text-xs">Timetable</span>
      </a>
      <a
        href="/pages/profile"
        class="flex flex-col items-center justify-center py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="text-xs">Profile</span>
      </a>

      <a
        href="/pages/academic_history"
        class="flex flex-col items-center justify-center py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span class="text-xs">Academic History</span>
      </a>
    </div>
  </div>
</div>
