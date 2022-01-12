// TODO: refactor double links
<template>
	<div id="nav">
		<nav
			class="navbar has-shadow has-centered-logo"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="container">
				<div class="navbar-brand is-hidden-desktop">
					<a
						role="button"
						aria-label="menu"
						area-expanded="false"
						data-target="navbarLocalBakery"
						class="navbar-item"
					>
						<span class="icon menu-item">
							<img src="./icons-feather/menu.svg" alt="Menu" />
						</span>
					</a>
					<router-link to="/" class="navbar-item"
						><img
							src="../public/logo.png"
							style="width=173px; height=29px;"
							alt="Local Bakery logo"
					/></router-link>

					<router-link
						to="/cart"
						role="button"
						aria-label="cart"
						aria-expanded="false"
						class="navbar-item"
						><span class="icon">
							<img
								src="./icons-feather/shopping-cart.svg"
								alt="Shopping Cart"
							/> </span
					></router-link>
				</div>

				<div id="navbarLocalBakery" class="navbar-menu">
					<div class="navbar-start">
						<div class="navbar-item has-dropdown is-hoverable">
							<router-link to="/collections" class="navbar-link"
								>Our Products</router-link
							>

							<div class="navbar-dropdown">
								<router-link
									@click="update"
									to="/collections/cakes"
									class="navbar-item"
									>Cakes</router-link
								>
								<router-link
									@click="update"
									to="/collections/cupcakes"
									class="navbar-item"
									>CupCakes</router-link
								>
								<router-link
									@click="update"
									to="/collections/pies"
									class="navbar-item"
									>Pies</router-link
								>
								<router-link
									@click="update"
									to="/collections/cookies"
									class="navbar-item"
									>Cookies</router-link
								>
							</div>
						</div>
						<router-link to="/collections" class="navbar-item"
							>Order Now</router-link
						>
					</div>

					<div class="navbar-brand is-hidden-touch">
						<a class="navbar-item" href="/">
							<img
								src="../public/logo.png"
								alt="Local Bakery logo"
								style="width=173px; height=29px;"
							/>
						</a>
					</div>

					<div class="navbar-end">
						<a class="navbar-item">
							<span class="icon">
								<img src="./icons-feather/search.svg" alt="Search Site" />
							</span>
						</a>

						<router-link
							to="/login"
							role="button"
							aria-label="Login Page"
							aria-expanded="false"
							class="navbar-item"
						>
							<span class="icon">
								<img src="./icons-feather/user.svg" alt="Login Page" />
							</span>
						</router-link>
						<router-link
							to="/cart"
							role="button"
							aria-label="Shopping Cart"
							aria-expanded="false"
							class="navbar-item"
							><span class="icon">
								<img
									src="./icons-feather/shopping-cart.svg"
									alt="Shopping Cart"
								/> </span
						></router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
	<router-view />
</template>

<script>
export default {
	methods: {
		update() {
			this.$forceUpdate()
		},
	},
}
</script>

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
</style>
