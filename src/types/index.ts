export interface PersonInterface {
    name: string; 
    id: string; 
    age?: number; 
}

export type People = Array<PersonInterface>