<script lang="ts">
	import { CommentIcon } from '$lib/components/icons';

	import { getImageURL } from '$lib/utils';
	import type { Project } from '$lib/types';
	import ConfirmDeleteModal from '$lib/components/ConfirmDeleteModal.svelte';

	export let project: Project;
</script>

<div class="bg-base-100 w-full h-28 p-4 flex items-center justify-between">
	<div class="avatar">
		<div class="w-20 rounded">
			<img
				src={getImageURL(project.collectionName, project.id, project.thumbnail, '80x80')}
				alt="Project thumbnail"
			/>
		</div>
	</div>
	<div class="flex flex-col w-full ml-4 h-full justify-between">
		<div>
			<a href="/projects/{project.id}" class="font-semibold text-lg">{project.name}</a>
			<p>{project.tagline}</p>
		</div>
		<div class="flex items-center">
			<span class="text-md">
				<CommentIcon />
			</span>
			<div>
				<p class="ml-1 text-sm font-medium">0</p>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-end w-full space-x-2">
		<a href="/projects/{project.id}/edit" class="btn btn-outline">Edit Project</a>
		<ConfirmDeleteModal {project} />
	</div>
</div>
