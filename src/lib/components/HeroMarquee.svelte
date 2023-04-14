<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/splide-extension-auto-scroll/dist/js/splide-extension-auto-scroll.min.js';

	const marqElements = [
		{
			src: '/img/svgs/html.svg',
			alt: 'HTML'
		},
		{
			src: '/img/svgs/css.svg',
			alt: 'CSS'
		},
		{
			src: '/img/svgs/sveltekit.svg',
			alt: 'Svelte'
		},
		{
			src: '/img/svgs/reactjs.svg',
			alt: 'ReactJS'
		},
		{
			src: '/img/svgs/supabase.svg',
			alt: 'Supabase'
		},
		{
			src: '/img/svgs/mongodb.svg',
			alt: 'MongoDB'
		},
		{
			src: '/img/svgs/nodejs.svg',
			alt: 'NodeJS'
		},
		{
			src: '/img/svgs/expressjs.svg',
			alt: 'ExpressJS'
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
					<img class="marqImages" src={marq.src} alt={`${marq.alt} Logo`} />
					<p class="paragraph" style="text-align: center;">{marq.alt}</p>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>

<style>
	.marquee {
		margin-top: 1.56rem;
	}
	.marqImages {
		width: 4rem;
		margin-bottom: 0.7rem;
		margin-inline: auto;
	}
</style>
