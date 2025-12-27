<script>
	import { useStar } from '../store';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let contentRef = null;

	onMount(() => {
		gsap.fromTo(
			contentRef,
			{
				opacity: 0,
				y: 30,
				scale: 0.95
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.6,
				ease: 'elastic.out(1, 0.5)'
			}
		);
	});
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4"
>
	<div bind:this={contentRef} class="w-full max-w-md">
		<div class="rounded-3xl border-4 border-white bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
			<h1
				class="mb-8 bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-center text-5xl font-black text-transparent"
			>
				Paramètres
			</h1>

			<label
				class="flex cursor-pointer items-center gap-4 rounded-2xl border-4 border-gray-200 bg-white p-6 transition-all hover:border-indigo-400 hover:shadow-lg"
			>
				<div class="relative flex h-8 w-8 items-center justify-center">
					<input
						type="checkbox"
						bind:checked={$useStar}
						class="peer h-8 w-8 cursor-pointer appearance-none rounded-lg border-4 border-gray-300 bg-white transition-all checked:border-indigo-500 checked:bg-indigo-500"
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="pointer-events-none absolute size-5 text-white opacity-0 peer-checked:opacity-100"
					>
						<path
							fill-rule="evenodd"
							d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<span class="text-xl font-bold text-gray-800">Activer la case étoile au centre</span>
			</label>

			<p class="mt-6 text-center text-lg text-gray-600">
				La case étoile au centre de la grille compte comme une case déjà cochée.
			</p>
		</div>
	</div>
</div>
