import {UserType} from "../HW8";


export type ActionsType = SortNameACType | AgeCheckACType

type SortNameACType = ReturnType<typeof sortNameAC>
export const sortNameAC = (sort: 'up' | 'down' = 'up') => {
    return {
        type: 'sort',
        payload: sort
    } as const
}

type AgeCheckACType = ReturnType<typeof ageCheckAC>
export const ageCheckAC = (age: number = 18) => {
    return {
        type: 'check',
        payload: age
    } as const
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state]
            let sortedUsers = newState.sort((x, y) => x.name.localeCompare(y.name))
            if (action.payload === 'down') return sortedUsers
            if (action.payload === 'up') return sortedUsers.reverse()
            return newState
        }
        case 'check': {
            // need to fix
            let newState = [...state]
            return newState.filter(el=> el.age > action.payload)
        }
        default: return state
    }
}