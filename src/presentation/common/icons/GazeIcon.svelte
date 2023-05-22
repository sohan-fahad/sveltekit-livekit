<script lang="ts">
	import type { GazeIconType } from './gazeIconData';
	import { GazeIconData } from './gazeIconData';
	export let color = '#fff';
	export let stroke = color;
	export let filled: boolean = false;
	export let fillColor: string = filled ? color : 'none';
	export let size: number = 1.5; // default 1em match the parent element
	export let icon: GazeIconType = 'chat';
	export let classes: string = '';
</script>

<svg
	class="icon {classes}"
	viewBox="0 0 24 24"
	fill={fillColor}
	width={size + 'em'}
	height={size + 'em'}
	xmlns="http://www.w3.org/2000/svg"
	{stroke}
>
	{@html GazeIconData[icon]}
</svg>

<style>
	.icon {
		position: relative;
		display: inline-block;
	}
</style>
