import type { User } from '$lib/types';
import PocketBase, { Admin, Record } from 'pocketbase';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		interface Locals {
			pb: PocketBase;
			user: User;
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
