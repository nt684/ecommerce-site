<template>
	<nav
		class="navbar has-shadow is-fixed-top"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a href="/products/" class="navbar-item">
				<p class="is-size-4">Local Bakery</p>
			</a>

			<div class="is-hidden-desktop field is-grouped">
				<a class="icon-text navbar-item">
					<span class="icon">
						<i class="material-icons"> account_circle </i>
					</span>
					<span>Sign in</span>
				</a>
				<a class="icon-text navbar-item">
					<span class="icon">
						<i class="material-icons">
							<i class="material-icons"> shopping_cart </i>
						</i>
					</span>
					<span>Cart</span>
				</a>
			</div>
		</div>

		<div id="navbarLocalBakery" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item" href="/products/#cakes"> Cakes </a>
				<a class="navbar-item" href="/products/#cookies"> Cookies </a>
				<a class="navbar-item" href="/products/#cupcakes"> Cupcakes </a>
				<a class="navbar-item" href="/products/#pies"> Pies </a>
			</div>

			<div class="navbar-end">
				<router-link to="/login" class="navbar-item icon-text">
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

	<router-view />
</template>

<style lang="scss">
@charset "utf-8";
@import '../node_modules/bulma/bulma.sass';

.navbar-brand {
	justify-content: space-between;
}

.product__description {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.container {
	padding-top: 3em;
}
</style>
