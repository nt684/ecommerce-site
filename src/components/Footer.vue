<template>
	<footer class="footer is-fixed-bottom">
		<div class="content has-text-centered">
			<p>
				<strong>Local Bakery</strong> by <a href="/">Jeremy Thomas</a>. The
				source code is licensed
				<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
				website content is licensed
				<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					>CC BY NC SA 4.0</a
				>.
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped>
.footer {
	position: absolute;
	left: 0;
	bottom: 0;
	height: 100px;
	width: 100%;
}
</style>
