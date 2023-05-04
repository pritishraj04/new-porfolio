<script>
	import { spring } from 'svelte/motion';
	let innerWidth;
	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);
	let size = spring(1);

	function handleMousemove(e) {
		coords.set({ x: e.clientX, y: e.clientY });
		if (e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
			size.set(0);
		} else {
			size.set(1);
		}
		e.stopPropagation();
		e.cancelBubble = true;
	}
	function handleMouseDown(e) {
		size.set(2);
		e.stopPropagation();
		e.cancelBubble = true;
	}
	function handleMouseUp(e) {
		size.set(1);
		e.stopPropagation();
		e.cancelBubble = true;
	}
</script>

<svelte:window bind:innerWidth />

<div on:mousemove={handleMousemove} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>
	<slot />
	{#if innerWidth > 780}
		<div class="circle" style={`left: ${$coords.x}px; top: ${$coords.y}px;; scale: ${$size}`} />
	{/if}
</div>
