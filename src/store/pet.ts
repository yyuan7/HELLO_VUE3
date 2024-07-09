import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const usePetStore = defineStore('pet', {
    actions: {
        async addDogImgAction() {
            try {
                await axios.get('https://dog.ceo/api/breeds/image/random')
                    .then(
                        (response) => {
                            const {data:{message}} = response;
                            let obj = {
                                id: nanoid(),
                                message,
                            };
                            this.dogImgList.unshift(obj);
                        }
                    )
            } catch (error) {
                alert(error);
            }
        }
    },
    state() {
        return {
            dogImgList: [],
        }
    }
})