import { StateCreator ,create} from "zustand";

type UserState = {
    username: string,
    fullname: string,
    age: number,
    adress: string
};
type UserActions = {
    setAdress: (adress: string) => void;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    adress: "",
    age: 0,
    fullname: "",
    username: "",
    //setAdress: (adress) => set((state) => ({ ...state, adress })),  a éclaicir
    setAdress:(adress)=>set(()=>({adress})),
})

export const useCountStore = create< {nested:{count:number},inc :()=>void}>((set)=>({
    nested: {count:0},
    inc :()=>set((state)=>({
        nested:{...state.nested, count:state.nested.count + 1}
    })),
    
}))