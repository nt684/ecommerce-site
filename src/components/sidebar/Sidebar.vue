<template>
	<div class="sidebar" :style="{ width: sidebarWidth }">
		<ShoppingCart />
	</div>
</template>

<script>
import ShoppingCart from '@/components/sidebar/ShoppingCart.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
	setup() {
		return { collapsed, toggleSidebar, sidebarWidth }
	},
	components: { ShoppingCart },
}
</script>

<style scoped>
.sidebar {
	background-color: rgb(255, 255, 255);
	float: left;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	outline: 1px solid rgb(196, 196, 196);
	transition: 0.3s ease;

	display: flex;
	flex-direction: column;
}

.collapse-icon {
	position: absolute;
	bottom: 0;

	color: rgba(0, 0, 0, 0.7);

	transition: 0.2s linear;
}
</style>
