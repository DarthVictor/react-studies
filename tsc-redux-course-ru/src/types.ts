export interface RootState {
    user: UserState,
    page: PageState
}

export interface UserState {
    name: string
}

export interface PageState {
    year: number,
    photos: string[]
}

export type Year = number
