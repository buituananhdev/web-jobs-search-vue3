<template>
    <div class="container">
        <h2>Danh sách ứng viên</h2>
        <div v-if="isEmpty" class="w-full flex flex-col justify-center items-center">
            <img class="w-[400px]" src="@/assets/icons/not-found.svg" />
            <p class="text-[grey]">Không có dữ liệu</p>
        </div>
        <ul v-else class="responsive-table">
            <li class="table-header">
                <div class="col col-1">STT</div>
                <div class="col col-2">Tên</div>
                <div class="col col-3">Email</div>
                <div class="col col-4">Phone</div>
            </li>
            <li v-for="(candidate, index) in listCandidates" class="table-row" :key="candidate.candidate_id">
                <div class="col col-1" data-label="Job Id">{{ index + 1 }}</div>
                <div class="col col-2" data-label="Customer Name">{{ candidate.name }}</div>
                <div class="col col-3" data-label="Amount">{{ candidate.email }}</div>
                <div class="col col-4" data-label="Payment Status">{{ candidate.phone }}</div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCandidateByJobId } from '@/services/job.service'

const listCandidates = ref([])
const isEmpty = ref(false)
const getListCandidates = async () => {
    try {
        const id = useRoute().params.id
        const res = await getCandidateByJobId(id)
        if (!res) {
            isEmpty.value = true
            return
        }
        isEmpty.value = false
        listCandidates.value = res.data.candidates
    } catch (error) {
        console.error(error)
    }
}
onMounted(() => {
    getListCandidates()
})
</script>
<style scoped>
body {
    font-family: 'lato', sans-serif;
}

.container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}

h2 {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;
    font-weight: 600;

    small {
        font-size: 0.5em;
    }
}

.responsive-table {
    li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .table-header {
        background-color: #009634;
        font-size: 14px;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .table-row {
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    .col-1 {
        flex-basis: 10%;
    }

    .col-2 {
        flex-basis: 40%;
    }

    .col-3 {
        flex-basis: 25%;
    }

    .col-4 {
        flex-basis: 25%;
    }

    @media all and (max-width: 767px) {
        .table-header {
            display: none;
        }

        li {
            display: block;
        }

        .col {
            flex-basis: 100%;
        }

        .col {
            display: flex;
            padding: 10px 0;

            &:before {
                color: #6c7a89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
        }
    }
}
</style>
