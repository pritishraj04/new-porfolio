<script>
	import { fade } from 'svelte/transition';
	import 'iconify-icon';
	import Logo from '$lib/components/Logo.svelte';
	import { onMount } from 'svelte';
	import { currentTheme } from '$lib/stores';
	let isMenuOpen = false;
	let scrollY;

	const handleCloseMenu = () => {
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	};

	onMount(() => {
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const hasUserSetTheme =
			document.documentElement.dataset.theme == 'dark' ||
			document.documentElement.dataset.theme == 'light';

		if (!hasUserSetTheme) {
			updateTheme(userPrefersDarkMode ? 'dark' : 'light');
		}
		$currentTheme = document.documentElement.dataset.theme;
	});

	const updateTheme = (theme) => {
		if (theme) {
			document.documentElement.dataset.theme = theme;
			document.cookie = `colortheme=${theme};max-age=31536000;path="/"`;
			$currentTheme = theme;
		}
	};

	const themes = [
		{ name: 'light', icon: '/img/svgs/moon-sunny.svg' },
		{ name: 'dark', icon: '/img/svgs/sunny-moon.svg' }
	];
</script>

<svelte:window bind:scrollY />

<header class={scrollY > 100 || isMenuOpen ? 'bg-primary' : ''}>
	<div class="container" style={scrollY > 100 ? 'padding-top: 1.5rem;' : ''}>
		<div class="logo"><a href="/"><Logo theme={$currentTheme} /></a></div>
		<div class="flex">
			<nav>
				<ul data-role="list">
					<li class={isMenuOpen ? 'flex navigation bg-primary' : 'flex navigation nav-hidden'}>
						<div><a class="link" href="/#about" on:click={handleCloseMenu}>About</a></div>
						<div><a class="link" href="/#works" on:click={handleCloseMenu}>Works</a></div>
					</li>
					<li><a class="button" href="#contact">Contact me</a></li>
					<li>
						{#each themes as theme}
							{#if $currentTheme !== theme.name}
								<button
									class="button theme-button"
									data-type="ghost"
									on:click={() => updateTheme(theme.name)}
									><img src={theme.icon} alt="" style="width: 32px;" /></button
								>
							{/if}
						{/each}
					</li>
				</ul>
			</nav>
			<button
				class="hamburger-button button"
				data-type="ghost"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				><iconify-icon
					transition:fade
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
		z-index: 9999;
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
		user-select: none;
	}
	.theme-button {
		user-select: none;
	}
	.theme-button:hover {
		filter: none;
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
			top: 90px;
			padding: 0;
			transition: height 300ms, padding 500ms;
		}
	}
</style>
