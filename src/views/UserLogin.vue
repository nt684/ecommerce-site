<template>
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-half">
					<h1 class="title is-1">Login</h1>
					<form class="box login-box">
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

						<button class="button is-primary is-fullwidth">Sign in</button>
						<nav class="level is-mobile">
							<div class="level-left">
								<router-link to="/forgotpassword" class="navbar-item icon-text">
									Forgot password
								</router-link>

								<router-link to="/forgotpassword" class="navbar-item icon-text">
									Create Account
								</router-link>
							</div>
						</nav>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'UserLogin',
}
</script>

<style scoped></style>
