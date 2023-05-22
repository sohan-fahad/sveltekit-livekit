<script>
	import RoomBody from './components/RoomBody.svelte';
	import RoomFooter from './components/RoomFooter.svelte';
</script>

<div class="room">
	<RoomBody />
	<RoomFooter />
</div>

<style>
	.room {
		@apply h-screen w-full bg-primary;
	}
</style>
