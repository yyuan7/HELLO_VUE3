import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        incrementAction(value:number) {
            // console.log(value);
            this.sum += value;
        }
    },
    state(){
        return {
            sum: 6
        }
    }, 
    getters: {
        doubleSum:state => state.sum*2, 
        tripleSum(state) : number {
            return state.sum*3;
        }, 
    }
});