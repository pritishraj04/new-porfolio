<script>
	export let showModal, closeModal;
	export let heading = 'modal'; // boolean

	let dialog; // HTMLDialogElement

	const handleEscape = (e) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			closeModal();
		}
	};

	$: if (dialog) {
		if (showModal) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- on:close={() => (showModal = false)} -->
<dialog
	class="bg-blur bg-blur-primary container"
	bind:this={dialog}
	on:click|self={closeModal}
	on:keydown={handleEscape}
>
	<div on:click|stopPropagation>
		<div class="head">
			<h2 class="secondary-heading">{heading}</h2>
			<!-- svelte-ignore a11y-autofocus -->
			<button
				autofocus
				data-type="ghost"
				class="button"
				aria-label="Close modal"
				on:click={closeModal}
				><iconify-icon icon="solar:close-square-bold" style="font-size: 32px" /></button
			>
		</div>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		border-radius: 10px;
		border: none;
		padding: 1rem 2rem;
		margin-inline: auto;
		margin-top: 5rem;
		max-height: 80vh;
		max-height: 80dvh;
	}
	dialog .head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}
	dialog[open] {
		animation: zoom 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 500ms ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
