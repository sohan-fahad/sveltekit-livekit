<script lang="ts">
	import GazeIcon from '$src/presentation/common/icons/GazeIcon.svelte';

	export let isChatModal: boolean;
	export let closeChatModal: () => void;
</script>

<aside class="chat-modal" class:active={isChatModal}>
	<div class="chat-box-header">
		<div class="user-info-wrapper">
			<img src="./user-avatar.jpg" alt="" />
			<div class="user-info">
				<h3>Sohan Fahad</h3>
				<p>
					<span class="h-2 w-2 rounded-full bg-green-600" />
					<span>Online</span>
				</p>
			</div>
		</div>
		<button on:click={closeChatModal}>
			<GazeIcon icon="right-arrow" stroke="var(--color-grey)" />
		</button>
	</div>
	<div class="chat-box-body">
		<div class="local-message">
			<img src="./user-avatar.jpg" alt="" />
			<div class="name-message">
				<div class="name-time">
					<p class="name">Sohan (You)</p>
					<span class="time"> 12:45 PM </span>
				</div>
				<p class="message">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim adipisci
					laudantium tempore quod commodi mollitia aspernatur, dicta corporis tempora animi
				</p>
			</div>
		</div>

		<div class="remote-message">
			<img src="./user-avatar.jpg" alt="" />
			<div class="name-message">
				<div class="name-time">
					<p class="name">Other</p>
					<span class="time"> 12:45 PM </span>
				</div>
				<p class="message">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim adipisci
					laudantium tempore quod commodi mollitia aspernatur, dicta corporis tempora animi
				</p>
			</div>
		</div>
		<div class="remote-message">
			<img src="./user-avatar.jpg" alt="" />
			<div class="name-message">
				<div class="name-time">
					<p class="name">Other</p>
					<span class="time"> 12:45 PM </span>
				</div>
				<p class="message">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim adipisci
					laudantium tempore quod commodi mollitia aspernatur, dicta corporis tempora animi
				</p>
			</div>
		</div>
	</div>

	<div class="chat-box-footer">
		<div class="message-box-wapper">
			<input type="text" placeholder="Enter your message" />
			<button>
				<GazeIcon icon="send" stroke="var(--color-grey)" />
			</button>
		</div>
	</div>
</aside>

<style lang="postcss">
	.chat-modal {
		@apply h-screen w-full sm:w-80 flex items-center justify-center flex-col bg-white fixed z-30 right-0 top-0 translate-x-full transition-transform duration-200 ease-linear;

		.chat-box-header {
			@apply w-full h-[60px] border-b-2 border-gray-300 border-opacity-50 flex justify-between items-center px-5;

			.user-info-wrapper {
				@apply w-full overflow-hidden h-full flex items-center;

				img {
					@apply w-12 h-12 rounded-full;
				}

				.user-info {
					@apply text-left leading-3;

					h3 {
						@apply text-sm font-medium;
					}

					p {
						@apply text-xs flex items-center gap-1;
					}
				}
			}
		}

		.chat-box-body {
			@apply w-full h-[calc(100vh-120px)] pl-5 py-5 flex flex-col gap-4 overflow-y-scroll;
			.local-message {
				@apply flex justify-start max-w-[95%];
			}

			.remote-message {
				@apply flex flex-row-reverse justify-end max-w-[95%] text-right;
			}

			img {
				@apply w-10 h-10 rounded-full;
			}
			.name-message {
				@apply flex flex-col bg-gray-200 p-2 rounded-md;

				.name-time {
					@apply leading-3 mb-2;
					.name {
						@apply text-xs font-medium;
					}
					.time {
						@apply text-[10px] text-gray-600;
					}
				}

				.message {
					@apply text-sm;
				}
			}

			&::-webkit-scrollbar {
				@apply w-1;
			}

			&::-webkit-scrollbar-thumb {
				@apply bg-gray-400 rounded-md;
			}
		}

		.chat-box-footer {
			@apply h-[60px] p-5 w-full relative;
			.message-box-wapper {
				@apply w-full h-full relative rounded-md;

				input {
					@apply h-full bg-transparent w-5/6 text-sm;

					&:focus {
						@apply outline-none;
					}
				}

				button {
					@apply absolute right-1 top-0;
				}
			}
		}
	}

	.chat-modal.active {
		@apply translate-x-0;

		.chat-box-footer {
			box-shadow: -3px 5px 8px black;
		}
	}
</style>
