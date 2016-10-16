export interface RootState {
    user: UserState,
    page: PageState
}

export interface UserState {
    name: string,
    error: ''
}

export interface PageState {
    year: number,
    photos: string[],
    fetching: boolean
}

export type Year = number
