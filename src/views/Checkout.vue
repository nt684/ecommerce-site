<template>
	<div class="container">
		<section class="section">
			<nav class="level">
				<div class="level-item">
					<div>
						<p class="heading is-size-3">Your Order is almost ready</p>
					</div>
				</div>
			</nav>
			<div class="columns is-centered">
				<div class="column is-one-third">
					<div class="box">
						<div class="block">
							<div
								class="has-background-primary has-text-white has-text-centered padding-bottom"
							>
								<p>Bike</p>
							</div>
						</div>

						<!--  text  -->
						<div class="block">
							<div class="has-text-centered is-size-5 order-text">
								<p>We Received your Order</p>
							</div>
						</div>

						<!-- button -->
						<div class="buttons is-centered">
							<button class="button is-primary is-centered">Track Order</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Checkout',
}
</script>

<style scoped>
.order-text {
	padding-bottom: 2em;
}
</style>
