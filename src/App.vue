<template>
	<NavBar />
	<Sidebar />
	<div :style="{ 'margin-right': sidebarWidth }">
		<router-view />
	</div>
	<Footer />
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { sidebarWidth } from './components/sidebar/state'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
		Sidebar,
	},
	setup() {
		return { sidebarWidth }
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
	margin: 0 0 100px;
}
</style>
