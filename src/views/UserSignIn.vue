<template>
	<!-- TODO: Make create profile page -->
	<!-- TODO: Add forgot password page -->
	<!-- TODO: Add User Sign In -->
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-half">
					<h1 class="title is-1">Sign in</h1>
					<form class="box">
						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input
									class="input"
									type="email"
									placeholder="e.g. alex@example.com"
								/>
							</div>
						</div>

						<div class="field">
							<label class="label">Password</label>
							<div class="control">
								<input class="input" type="password" placeholder="********" />
							</div>
						</div>

						<button class="button is-primary is-fullwidth is-uppercase">
							Sign in
						</button>
						<div class="field is-grouped">
							<p class="control">
								<router-link to="#" class="navbar-item icon-text">
									Forgot password
								</router-link>
							</p>
							<p class="control">
								<router-link to="#" class="navbar-item icon-text">
									Create Account
								</router-link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'UserSignIn',
}
</script>

<style scoped></style>
