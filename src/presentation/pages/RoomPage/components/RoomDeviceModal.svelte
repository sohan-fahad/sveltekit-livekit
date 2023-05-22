<script lang="ts">
	export let isDeviceModal = false;
	export let closeModal: () => void;
</script>

<div class="device-modal" class:active={isDeviceModal}>
	<h1>Hello, I am a modal!</h1>
</div>

<style lang="postcss">
	.device-modal {
		@apply fixed z-30 top-5 sm:top-3 left-[5%] w-[90%] sm:left-1/4 lg:left-1/3 p-5 bg-white sm:w-96 rounded-md opacity-0;
		transform: scale(0.9);
		transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
	}
	.device-modal.active {
		opacity: 1;
		visibility: visible;
		transform: scale(1);
		transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
	}
</style>
