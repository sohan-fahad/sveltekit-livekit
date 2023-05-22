<script lang="ts">
	export let isOverlayActive = false;
	export let closeModal: () => void;
</script>

<button
	id="overlay"
	class="overlay"
	class:active={isOverlayActive}
	class:inactive={!isOverlayActive}
	on:click={closeModal}
/>
<slot />

<style lang="postcss">
	.overlay {
		@apply flex items-center justify-center h-screen fixed top-0 left-0 transition-opacity ease-in-out duration-300 z-20;
		transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
	}

	.overlay.active {
		@apply w-full h-full bg-[#00000080] opacity-100;
	}

	.overlay.inactive {
		@apply w-0 opacity-0;
	}
</style>
