import { ref, computed } from 'vue';

export default function () {
    const sum = ref(0);
    const sumTenTime = computed(() => {
        return sum.value * 10;
    });
    const handleSum = () => {
        sum.value += 1;
    }

    return { sum, handleSum, sumTenTime };
}
