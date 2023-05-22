<script>
	import RoomParticipants from './RoomParticipants.svelte';
	import RoomScreenShare from './RoomScreenShare.svelte';
</script>

<div class="room-body">
	<div id="conferenceArea" class="conference">
		<RoomScreenShare />
		<RoomParticipants />
	</div>
</div>

<style>
	.room-body {
		@apply flex flex-col p-5 gap-5 h-[calc(100vh-60px)] bg-secondary;
	}
</style>
