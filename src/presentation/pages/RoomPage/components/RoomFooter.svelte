<script>
	import GazeIcon from '$src/presentation/common/icons/GazeIcon.svelte';
	import Modal from '$src/presentation/components/modals/Modal.svelte';
	import RoomChatModal from './RoomChatModal.svelte';
	import RoomDeviceModal from './RoomDeviceModal.svelte';

	let isChatModal = false;
	let isDeviceModal = false;
	let isAudio = true;
	let isVideo = true;
	let isScreenShare = false;

	const toggleChatModal = () => {
		isChatModal = !isChatModal;
	};

	const toggleDeviceModal = () => {
		isDeviceModal = !isDeviceModal;
	};

	const toggleAudio = () => {
		isAudio = !isAudio;
	};

	const toggleVideo = () => {
		isVideo = !isVideo;
	};

	const toggleScreenShare = () => {
		isScreenShare = !isScreenShare;
	};
</script>

<div class="room-footer">
	<button class="active">
		<GazeIcon icon="close-call" />
	</button>
	<button on:click={toggleVideo} class:active={!isVideo}>
		<GazeIcon icon={isVideo ? 'video-on' : 'video-off'} />
	</button>
	<button on:click={toggleAudio} class:active={!isAudio}>
		<GazeIcon icon={isAudio ? 'mic-on' : 'mic-off'} />
	</button>
	<button on:click={toggleScreenShare} class:active={isScreenShare}>
		<GazeIcon icon={isScreenShare ? 'screen-share-off' : 'screen-share-on'} />
	</button>
	<button on:click={toggleChatModal}>
		<GazeIcon icon="chat" />
	</button>
	<button on:click={toggleDeviceModal}>
		<GazeIcon icon="settings" />
	</button>
</div>

<Modal isOverlayActive={isChatModal} closeModal={toggleChatModal}>
	<RoomChatModal {isChatModal} closeChatModal={toggleChatModal} />
</Modal>

<Modal isOverlayActive={isDeviceModal} closeModal={toggleDeviceModal}>
	<RoomDeviceModal {isDeviceModal} closeModal={toggleDeviceModal} />
</Modal>

<style lang="postcss">
	.room-footer {
		@apply w-full h-[60px] flex justify-center items-center gap-3;

		button {
			@apply h-10 w-10 rounded-full bg-secondary transition-all hover:bg-slate-700;
		}

		button.active {
			@apply bg-red-700;
		}
	}
</style>
