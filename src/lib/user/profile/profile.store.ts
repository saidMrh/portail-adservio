import { writable } from 'svelte/store'
import type{ ProfileAttrs } from './profile.type'

export const signin = writable(0);

export const profile = writable<ProfileAttrs>({
    username: '',
    website: '',
    email: '',
    avatar_url: ''
});
