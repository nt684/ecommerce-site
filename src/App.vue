<template>
	<NavBar />
	<router-view />
	<Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
	},
}
</script>

<style lang="scss">
@charset "utf-8";
@import '../node_modules/bulma/bulma.sass';

.product__description {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.container {
	padding-top: 3em;
}

html {
	position: relative;
	min-height: 100%;
}
body {
	margin: 0 0 100px; /* bottom = footer height */
}
</style>
