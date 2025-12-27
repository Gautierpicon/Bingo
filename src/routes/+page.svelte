<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let titleRef = null;
	let buttonsRef = [];

	onMount(() => {
		gsap.fromTo(
			[titleRef, ...buttonsRef.filter(Boolean)],
			{
				opacity: 0,
				y: 50,
				scale: 0.9
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				stagger: 0.2,
				ease: 'elastic.out(1, 0.5)'
			}
		);
	});

	function createGame() {
		window.location.href = '/create';
	}

	function joinGame() {
		window.location.href = '/join';
	}
</script>

<div
	class="relative flex min-h-screen flex-col items-center justify-center gap-12 bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 p-4"
>
	<h1
		bind:this={titleRef}
		class="mb-4 text-center text-8xl font-black text-white drop-shadow-lg md:text-9xl"
	>
		BINGO
	</h1>

	<div class="flex w-full max-w-lg flex-col gap-6 md:flex-row">
		<button
			bind:this={buttonsRef[0]}
			onclick={createGame}
			class="group relative transform rounded-3xl border-4 border-white bg-linear-to-br from-green-400 to-green-600 px-8 py-6 text-xl font-black text-white shadow-[0_8px_0_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_12px_0_rgba(0,0,0,0.3)] active:scale-95 active:shadow-none md:text-2xl"
		>
			<span class="relative z-10 flex items-center justify-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-8"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
						clip-rule="evenodd"
					/>
				</svg>
				Créer une partie
			</span>
		</button>

		<button
			bind:this={buttonsRef[1]}
			onclick={joinGame}
			class="group relative transform rounded-3xl border-4 border-white bg-linear-to-br from-blue-400 to-blue-600 px-8 py-6 text-xl font-black text-white shadow-[0_8px_0_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_12px_0_rgba(0,0,0,0.3)] active:scale-95 active:shadow-none md:text-2xl"
		>
			<span class="relative z-10 flex items-center justify-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-8"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
						clip-rule="evenodd"
					/>
				</svg>
				Rejoindre une partie
			</span>
		</button>
	</div>

	<a
		href="https://github.com/Gautierpicon/Bingo"
		target="_blank"
		rel="noopener noreferrer"
		class="fixed right-4 bottom-4 rounded-full bg-white/10 p-2 shadow-md backdrop-blur-sm transition-all hover:scale-110"
		aria-label="GitHub Repository"
	>
		<img src="src/lib/assets/github.png" alt="GitHub" class="size-7 md:size-8" />
	</a>
</div>
