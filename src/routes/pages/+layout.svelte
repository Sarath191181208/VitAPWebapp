<script>
import HomeIcon from "../../components/icons/HomeIcon.svelte";
import BarChartIcon from "../../components/icons/BarChartIcon.svelte"
import CalenderIcon from "../../components/icons/CalenderIcon.svelte"
import SettingsIcon from "../../components/icons/SettingsIcon.svelte";
import AcademicsIcon from "../../components/icons/AcademicsIcon.svelte"
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
        <HomeIcon className="text-xl" />
        <span class="text-xs">Home</span>
      </a>
      <a
        href="/pages/attendance"
        class="flex flex-col items-center justify-center py-2"
      >
        <BarChartIcon className="text-xl"/>
        <span class="text-xs">Attendance</span>
      </a>
      <a
        href="/pages/timetable"
        class="flex flex-col items-center justify-center py-2"
      >
        <CalenderIcon className="text-xl"/>
        <span class="text-xs">Timetable</span>
      </a>
      <a
        href="/pages/settings"
        class="flex flex-col items-center justify-center py-2"
      >
        <SettingsIcon className="text-xl"/>
        <span class="text-xs">Settings</span>
      </a>

      <a
        href="/pages/academic_history"
        class="flex flex-col items-center justify-center py-2"
      >
        <AcademicsIcon className="text-xl"/>
        <span class="text-xs">Academic History</span>
      </a>
    </div>
  </div>
</div>
