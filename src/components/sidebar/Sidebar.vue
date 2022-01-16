<template>
	<div class="sidebar" :style="{ width: sidebarWidth }">
		<h1>
			<span v-if="collapsed">
				<div>V</div>
				<div>S</div>
			</span>
			<span v-else>Vue Sidebar</span>
		</h1>

		<SidebarLink to="/" icon="home">Home</SidebarLink>
		<span
			class="collapse-icon"
			:class="{ 'rotate-180': collapsed }"
			@click="toggleSidebar"
		>
			<span class="material-icons"> menu_open </span>
		</span>
	</div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import SidebarLink from './SidebarLink.vue'

export default {
	props: {},
	setup() {
		return { collapsed, toggleSidebar, sidebarWidth }
	},
	components: { SidebarLink },
}
</script>

<style scoped>
.sidebar {
	color: white;
	background-color: black;

	float: left;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 0.5em;

	transition: 0.3s ease;

	display: flex;
	flex-direction: column;
}
.collapse-icon {
	position: absolute;
	bottom: 0;

	color: rgba(255, 255, 255, 0.7);

	transition: 0.2s linear;
}
</style>
