import { reactive, onMounted } from 'vue';
import axios from 'axios'

export default function () {
    const dogImgList = reactive([]);

    onMounted(() => {
        addDogImgList();
    })

    async function addDogImgList() {

        try {
            await axios.get('https://dog.ceo/api/breeds/image/random')
                .then(
                    (response) => {
                        dogImgList.push(response.data.message);
                    }
                )
        } catch (error) {
            alert(error);
        }
    }

    return { dogImgList, addDogImgList };
}