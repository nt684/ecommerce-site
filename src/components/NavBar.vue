<template>
	<nav
		class="navbar has-shadow is-fixed-top"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a href="/" class="navbar-item">
				<p class="is-size-4">Local Bakery</p>
			</a>

			<div class="is-hidden-desktop field is-grouped">
				<router-link to="/sign-in" class="navbar-item icon-text">
					<a class="icon-text navbar-item">
						<span class="icon">
							<i class="material-icons"> account_circle </i>
						</span>
						<span>Sign in</span>
					</a>
				</router-link>
				<router-link to="/cart" class="navbar-item icon-text">
					<a class="icon-text navbar-item">
						<span class="icon">
							<i class="material-icons">
								<i class="material-icons"> shopping_cart </i>
							</i>
						</span>
						<span>Cart</span>
					</a>
				</router-link>
			</div>
		</div>

		<div id="navbarLocalBakery" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item" href="/"> Products </a>
			</div>

			<div class="navbar-end">
				<router-link to="/sign-in" class="navbar-item icon-text">
					<span class="icon">
						<i class="material-icons"> account_circle </i>
					</span>
					<span>Sign in</span>
				</router-link>

				<router-link to="/cart" class="navbar-item icon-text">
					<span class="icon">
						<i class="material-icons">
							<i class="material-icons"> shopping_cart </i>
						</i>
					</span>
					<span>Cart</span>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style scoped>
.navbar-brand {
	justify-content: space-between;
}
</style>
