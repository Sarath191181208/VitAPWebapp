<script lang="ts">
import SettingsIcon from "../../../components/icons/SettingsIcon.svelte";
import { studentData} from "../../../stores/student";
const profile = $studentData?.profile;
</script>

<h1
  class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-5xl font-bold text-transparent">
  <SettingsIcon className="text-3xl" /> Settings Page
</h1>

<div
  class="container overflow-hidden rounded-lg bg-white shadow dark:bg-slate-800 my-4 px-5 pb-5">
  <div class="my-4">
    <div class="flex items-start">
      <h2
        class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-3xl font-bold text-transparent">
        Settings
      </h2>
    </div>
  </div>
  <button
    class="red rounded-md px-4 py-2 text-white font-medium tracking-wide bg-red-500 hover:bg-red-600"
    on:click={() => {
      $studentData = null;
      window.location.href = "/";
    }}>
    Logout
  </button>
</div>

<!-- profile -->
<div
  class="container overflow-hidden rounded-lg bg-white shadow dark:bg-slate-800">
  <div class="flex flex-col items-center justify-center px-3 py-1">
    {#if profile?.profileImageBase64}
      <img
        src="{profile?.profileImageBase64}"
        class="h-20 w-20 rounded-full object-cover"
        alt="User Face" />
    {/if}

    <div class="my-4">
      <div class="flex items-start">
        <h2
          class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text pb-4 text-3xl font-bold text-transparent">
          Profile
        </h2>
      </div>
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
        {profile?.name ?? ""}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-300">
        {profile?.email ?? ""}
      </p>

      <div class="mt-4 flex flex-col items-start">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-200"
          >Program:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.program ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Branch:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.branch ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >School:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.school ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Application Number:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.appNo ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Registration Number:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.regNo ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Proctor Name:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.proctorName ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Proctor Email:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.proctorEmail ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >Proctor Mobile Number:</span>
        <span class="text-base text-gray-900 dark:text-gray-400"
          >{profile?.proctorMobileNumber ?? ""}</span>
      </div>
    </div>
  </div>
</div>
