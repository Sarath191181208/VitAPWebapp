<!-- <script lang="ts"> -->
<!-- import { studentData } from "../../../stores/student"; -->
<!---->
<!-- let profileData = $studentData?.profile; -->
<!---->
<!-- </script> -->
<!---->
<!-- <div class="flex flex-col items-center justify-center"> -->
<!--   <div class="bg-white shadow rounded-lg overflow-hidden"> -->
<!--     <div class="px-6 py-4"> -->
<!--       <div class="flex items-center justify-between"> -->
<!--         <h4 class="text-2xl font-bold text-gray-800">{profileData?.name}</h4> -->
<!--         <span class="text-sm text-gray-500">{profileData?.rollNumber}</span> -->
<!--       </div> -->
<!--       <div class="mt-4"> -->
<!--         <div class="flex items-center justify-between"> -->
<!--           <span class="text-lg font-medium text-gray-800">Branch: {profileData?.branch}</span> -->
<!--           <span class="text-lg font-medium text-gray-800">Semester: {profileData?.proctorEmail}</span> -->
<!--         </div> -->
<!--         <div class="mt-2"> -->
<!--           <div class="w-full flex justify-between items-center"> -->
<!--             <span class="text-gray-500">Section:</span> -->
<!--             <div class="flex items-center"> -->
<!--               <span class="text-lg font-bold text-gray-800">{profileData?.proctorName}</span> -->
<!--             </div> -->
<!--           </div> -->
<!--         </div> -->
<!--       </div> -->
<!--     </div> -->
<!--   </div> -->
<!-- </div> -->
<!---->

<script lang="ts">
  import { studentData } from "../../../stores/student";
  const profile = $studentData?.profile;
</script>

<div class="container bg-white shadow rounded-lg overflow-hidden">
  <div class="flex flex-col items-center justify-center px-6 py-4">
    {#if profile?.profileImageBase64}
      <img src="{profile?.profileImageBase64}" class="w-20 h-20 rounded-full object-cover" alt="Profile">
    {/if}

    <div class="mt-4">
      <h2 class="text-xl font-bold text-gray-800">{profile?.name ?? ""}</h2>
      <p class="text-sm text-gray-500">{profile?.email ?? ""}</p>

      <div class="mt-4 flex flex-col items-start">
        <span class="text-sm font-medium text-gray-700">Program:</span>
        <span class="text-base text-gray-900">{profile?.program ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Branch:</span>
        <span class="text-base text-gray-900">{profile?.branch ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">School:</span>
        <span class="text-base text-gray-900">{profile?.school ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Application Number:</span>
        <span class="text-base text-gray-900">{profile?.appNo ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Registration Number:</span>
        <span class="text-base text-gray-900">{profile?.regNo ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Proctor Name:</span>
        <span class="text-base text-gray-900">{profile?.proctorName ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Proctor Email:</span>
        <span class="text-base text-gray-900">{profile?.proctorEmail ?? ""}</span>

        <span class="mt-2 text-sm font-medium text-gray-700">Proctor Mobile Number:</span>
        <span class="text-base text-gray-900">{profile?.proctorMobileNumber ?? ""}</span>
      </div>
    </div>
  </div>
</div>

