<template>
	<div id="nav">
		<nav
			class="navbar has-shadow has-centered-logo"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="container">
				<div class="navbar-brand">
					<a
						role="button"
						aria-label="menu"
						area-expanded="false"
						data-target="navbarLocalBakery"
						class="navbar-item"
					>
						<span class="icon is-hidden-desktop">
							<i class="material-icons">menu</i>
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
						class="navbar-item is-hidden-desktop"
						><span class="icon">
							<img
								src="./icons-feather/shopping-cart.svg"
								alt="Shopping Cart"
							/> </span
					></router-link>
				</div>

				<div id="navbarLocalBakery" class="navbar-menu">
					<div class="navbar-start"></div>

					<div class="navbar-end">
						<div class="navbar-item has-dropdown is-hoverable">
							<router-link to="/collections" class="navbar-link"
								>Our Products</router-link
							>

							<div class="navbar-dropdown">
								<router-link to="/collections/cakes" class="navbar-item"
									>Cakes</router-link
								>
								<router-link to="/collections/cupcakes" class="navbar-item"
									>CupCakes</router-link
								>
								<router-link to="/collections/pies" class="navbar-item"
									>Pies</router-link
								>
								<router-link to="/collections/cookies" class="navbar-item"
									>Cookies</router-link
								>
							</div>
						</div>
						<div class="navbar-item"></div>
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
						>
						</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
