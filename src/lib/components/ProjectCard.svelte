<script>
	export let src,
		projectType,
		projectName,
		projectLink = '/';
</script>

<a class="project-link" href={projectLink}>
	<div class="work-cover" style={`background-image: url("${src}");`}>
		<div class="work-details bg-blur-primary">
			<h3 class="ternary-heading" style="text-align: center;">{projectType}</h3>
			<h3 class="secondary-heading" style="text-align: center;">{projectName}</h3>
		</div>
	</div>
</a>

<style>
	.project-link {
		width: 100%;
	}
	.work-cover {
		height: 470px;
		width: 100%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		position: relative;
	}
	.work-details {
		position: absolute;
		bottom: 10%;
		left: 50%;
		width: 100%;
		padding-block: 20px;
		transform: translateX(-50%);
		backdrop-filter: blur(10px);
	}
</style>
