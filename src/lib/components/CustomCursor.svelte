<script>
	import { spring } from 'svelte/motion';
	let innerWidth;
	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.03,
			damping: 0.23
		}
	);
	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 1,
			damping: 1
		}
	);
	let size = spring(1);

	function handleMousemove(e) {
		coords1.set({ x: e.clientX, y: e.clientY });
		if (e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
			size.set(0);
		} else {
			size.set(1);
		}
		e.stopPropagation();
		e.cancelBubble = true;
		coords2.set({ x: e.clientX, y: e.clientY });
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

<div
	class="custom-cursor"
	on:mousemove={handleMousemove}
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
>
	<slot />
	{#if innerWidth > 780}
		<div
			class="small-circle"
			style={`left: ${$coords2.x}px; top: ${$coords2.y}px;; scale: ${$size}`}
		/>
		<div
			class="big-circle"
			style={`left: ${$coords1.x}px; top: ${$coords1.y}px;; scale: ${$size}`}
		/>
	{/if}
</div>
