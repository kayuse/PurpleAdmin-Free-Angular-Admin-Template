import { Verse } from "./verse.model"

export interface Hymn{
    id : number
    created_at : string
    updated_at : string
    title : string
    number : number
    extra : string
    user_id : number
    chorus : string
    language : string
    verses : Array<Verse>
}