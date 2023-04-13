<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import 'iconify-icon';
	import Logo from '$lib/components/Logo.svelte';
	let currentTheme;
	let isMenuOpen = false;
	$: currentTheme = $page.data.theme;
	let scrollY;

	const handleCloseMenu = () => {
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	};

	const submitUpdateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = [
		{ name: 'light', icon: 'line-md:moon-filled-alt-to-sunny-filled-loop-transition' },
		{ name: 'dark', icon: 'line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition' }
	];
</script>

<svelte:window bind:scrollY />

<header class={scrollY > 100 || isMenuOpen ? 'bg-primary' : ''}>
	<div class="container" style={scrollY > 100 ? 'padding-top: 1.5rem;' : ''}>
		<div class="logo"><a href="/"><Logo theme={currentTheme} /></a></div>
		<div class="flex">
			<nav>
				<ul data-role="list">
					<li class={isMenuOpen ? 'flex navigation bg-primary' : 'flex navigation nav-hidden'}>
						<div><a class="link" href="#about" on:click={handleCloseMenu}>About</a></div>
						<div><a class="link" href="#works" on:click={handleCloseMenu}>Works</a></div>
					</li>
					<li><a class="button" href="#contact">Contact me</a></li>
					<li>
						<form method="POST" use:enhance={submitUpdateTheme}>
							{#each themes as theme}
								{#if currentTheme !== theme.name}
									<button
										class="button"
										data-type="ghost"
										formaction="/?/setTheme&theme={theme.name}&redirectTo={$page.url.pathname}"
										><iconify-icon icon={theme.icon} style="font-size: 32px;" /></button
									>
								{/if}
							{/each}
						</form>
					</li>
				</ul>
			</nav>
			<button
				class="hamburger-button button"
				data-type="ghost"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				><iconify-icon
					icon={isMenuOpen
						? 'line-md:menu-to-close-alt-transition'
						: 'line-md:close-to-menu-alt-transition'}
					style="font-size: 32px"
				/></button
			>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
	}
	header .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2.844rem;
		padding-bottom: 1.5rem;
		transition: padding-top 300ms;
	}
	.flex {
		display: flex;
		gap: 2.5rem;
		align-items: center;
	}
	nav ul {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}
	.hamburger-button {
		display: none;
	}
	@media screen and (max-width: 680px) {
		.flex {
			gap: 0.7rem;
		}
		.hamburger-button {
			display: block;
		}
		nav ul {
			gap: 0.7rem;
		}
		.navigation {
			flex-direction: column;
			position: absolute;
			height: 100vh;
			height: 100dvh;
			gap: 1.3rem;
			padding-top: 1.3rem;
			top: 90px;
			left: 0;
			width: 100%;
			transition: height 300ms, padding 500ms;
		}
		.nav-hidden {
			height: 0;
			overflow: hidden;
			position: absolute;
			top: 90px;
			padding: 0;
		}
	}
</style>
