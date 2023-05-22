<script>
	import RoomPage from '$src/presentation/pages/RoomPage/RoomPage.svelte';
	import { onMount } from 'svelte';

	async function add() {
		const response = await fetch('/api/token', {
			method: 'POST',
			body: JSON.stringify({ roomName: '10', participantName: 'Sohan' }),
			headers: {
				'content-type': 'application/json'
			}
		});

		let res = await response.json();

		console.log(res);
	}

	onMount(() => {
		add();
	});
</script>

<RoomPage />

<style lang="postcss">
</style>
