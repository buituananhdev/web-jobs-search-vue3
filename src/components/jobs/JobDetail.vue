<template>
    <div>
        <h4 class="text-xl font-bold text-[#263a4d]">{{ job.title }}</h4>
        <input type="number" hidden="hidden" value="= job.getJobId()%>" name="jobId" id="jobId" />
        <div class="job-content flex gap-5 mb-2">
            <b>Công ty:</b>
            <p>{{ job.company }}</p>
        </div>
        <div class="job-content flex gap-10 py-1 mb-4">
            <div class="job-salary px-3 py-2 flex gap-[16px] items-center">
                <img
                    src="@/assets/icons/icn_money.svg"
                    alt="salary"
                    class="flex flex-col items-center justify-center gap-10 h-[40px] w-[40px] p-2 bg-gradient-to-r from-green-500 to-teal-700 rounded-full"
                />
                <div>
                    <p>Mức lương:</p>
                    <p class="font-semibold">{{ job.salary }}</p>
                </div>
            </div>
            <div class="job-location px-3 py-2 flex gap-[16px] items-center">
                <img
                    src="@/assets/icons/icn_address.svg"
                    alt="salary"
                    class="flex flex-col items-center justify-center gap-10 h-[40px] w-[40px] p-2 bg-gradient-to-r from-green-500 to-teal-700 rounded-full"
                />
                <div>
                    <p>Địa điểm:</p>
                    <p>{{ job.address }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(['job'])
</script>
