<template>
	<nav
		class="navbar has-shadow is-fixed-top"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item">
				<p class="is-size-4">Local Bakery</p>
			</router-link>
			<router-link to="/" class="navbar-item"> Products </router-link>

			<div class="is-hidden-desktop field is-grouped">
				<router-link to="/sign-in" class="navbar-item">
					<span class="icon">
						<i class="material-icons"> account_circle </i>
					</span>
				</router-link>
				<a class="navbar-item">
					<span class="icon" @click="toggleSidebar">
						<i class="material-icons"> shopping_cart </i>
					</span>
				</a>
			</div>
		</div>

		<div id="navbarLocalBakery" class="navbar-menu">
			<div class="navbar-end">
				<router-link to="/sign-in" class="navbar-item">
					<span class="icon">
						<i class="material-icons"> account_circle </i>
					</span>
				</router-link>
				<a class="navbar-item">
					<span class="icon" @click="toggleSidebar">
						<i class="material-icons"> shopping_cart </i>
					</span>
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
import { collapsed, toggleSidebar } from './sidebar/state'

export default {
	name: 'NavBar',
	setup() {
		return { collapsed, toggleSidebar }
	},
}
</script>

<style scoped>
.navbar-brand {
	justify-content: space-between;
}
.shopping-cart-button {
	border: 0;
}
</style>
