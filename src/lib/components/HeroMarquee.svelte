<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/splide-extension-auto-scroll/dist/js/splide-extension-auto-scroll.min.js';

	const marqElements = [
		{
			src: '/img/svgs/html.svg',
			alt: 'HTML Logo'
		},
		{
			src: '/img/svgs/css.svg',
			alt: 'CSS Logo'
		},
		{
			src: '/img/svgs/sveltekit.svg',
			alt: 'Svelte Logo'
		},
		{
			src: '/img/svgs/reactjs.svg',
			alt: 'ReactJS Logo'
		},
		{
			src: '/img/svgs/supabase.svg',
			alt: 'Supabase Logo'
		},
		{
			src: '/img/svgs/mongodb.svg',
			alt: 'MongoDB Logo'
		},
		{
			src: '/img/svgs/nodejs.svg',
			alt: 'NodeJS Logo'
		},
		{
			src: '/img/svgs/expressjs.svg',
			alt: 'ExpressJS Logo'
		}
	];
	const marqueeOption = {
		pagination: false,
		arrows: false,
		gap: '1rem',
		type: 'loop',
		drag: 'free',
		focus: 'center',
		autoScroll: {
			speed: 0.5
		},
		perPage: 8,
		breakpoints: {
			1220: {
				perPage: 6
			},
			930: {
				perPage: 4
			},
			620: {
				perPage: 3
			},
			370: {
				perPage: 2
			}
		}
	};
</script>

<div class="marquee">
	<div class="marquee-inner">
		<Splide extensions={{ AutoScroll }} options={marqueeOption} aria-labelledby="Marquee">
			{#each marqElements as marq}
				<SplideSlide>
					<img class="marqImages" src={marq.src} alt={marq.alt} />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>

<style>
	.marquee {
		margin-block: 1.96rem 0.76rem;
	}
	.marqImages {
		width: 4rem;
	}
</style>
