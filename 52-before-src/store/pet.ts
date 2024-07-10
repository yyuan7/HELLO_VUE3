import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { reactive } from 'vue';

// Composition Style
export const usePetStore = defineStore('pet', () => {

    const dogImgList = reactive(JSON.parse(localStorage.getItem('dogImgList') as string) || []);

    async function addDogImgAction() {
        try {
            await axios.get('https://dog.ceo/api/breeds/image/random')
                .then(
                    (response) => {
                        const {data:{message}} = response;
                        let obj = {
                            id: nanoid(),
                            message,
                        };
                        // this.dogImgList.push(obj);
                        this.dogImgList.unshift(obj);
                    }
                )
        } catch (error) {
            alert(error);
        }
    }
    return { dogImgList, addDogImgAction }
})


// // Option Style
// import { defineStore } from 'pinia'
// import axios from 'axios'
// import { nanoid } from 'nanoid'

// export const usePetStore = defineStore('pet', {
//     actions: {
//         async addDogImgAction() {
//             try {
//                 await axios.get('https://dog.ceo/api/breeds/image/random')
//                     .then(
//                         (response) => {
//                             const {data:{message}} = response;
//                             let obj = {
//                                 id: nanoid(),
//                                 message,
//                             };
//                             // this.dogImgList.push(obj);
//                             this.dogImgList.unshift(obj);
//                         }
//                     )
//             } catch (error) {
//                 alert(error);
//             }
//         }
//     },
//     state() {
//         return {
//             // dogImgList: [],
//             // retrieve the dogImgList from local browser, use [] in case null
//             dogImgList: (JSON.parse(localStorage.getItem('dogImgList') as string) || []),
//         }
//     }
// })