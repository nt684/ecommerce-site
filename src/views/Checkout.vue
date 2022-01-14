<template>
	<!-- TODO: make form sizes smaller: zipcode, expiration date, csc -->
	<!-- TODO: place  expiration date & csc on one line -->
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-half">
					<h1 class="title is-1">Checkout</h1>
					<form class="box login-box">
						<!-- Delivery Address -->
						<div class="block">
							<h3 class="subtitle">Delivery Address</h3>
							<div class="field">
								<label class="label">Street Name</label>
								<div class="control">
									<input class="input" type="email" placeholder="Street Name" />
								</div>
							</div>
							<div class="field">
								<label class="label">City</label>
								<div class="control">
									<input class="input" type="text" placeholder="City" />
								</div>
							</div>

							<div class="field">
								<label class="label">Zipcode</label>
								<div class="control">
									<input class="input" type="text" placeholder="xxxxx" />
								</div>
							</div>
						</div>
						<hr class="divide-line" />
						<!-- payment -->
						<div class="block">
							<h3 class="subtitle">Payment Information</h3>
							<div class="field">
								<label class="label">Card Number</label>
								<div class="control">
									<input
										class="input"
										type="email"
										placeholder="xxxx xxxx xxxx xxxx"
									/>
								</div>
							</div>
							<div class="field">
								<label class="label">Expiration Date</label>
								<div class="control">
									<input class="input" type="text" placeholder="mm/yy" />
								</div>
							</div>
							<div class="field">
								<label class="label">Card security code (CSC)</label>
								<div class="control">
									<input class="input" type="text" placeholder="xxx" />
								</div>
							</div>

							<router-link to="/confirm-order" class="navbar-item icon-text">
								<button class="button is-primary is-fullwidth is-uppercase">
									Confirm Order
								</button>
							</router-link>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
