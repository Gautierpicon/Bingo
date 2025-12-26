<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();

	function togglePage() {
		if ($page.url.pathname === '/') {
			window.location.href = '/parametres';
		} else {
			window.location.href = '/';
		}
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<button
	onclick={togglePage}
	class="fixed top-4 right-4 z-50 rounded-full bg-gray-200 p-3 text-2xl hover:bg-gray-300 md:text-3xl"
	aria-label="Paramètres"
>
	⚙️
</button>

{@render children()}
