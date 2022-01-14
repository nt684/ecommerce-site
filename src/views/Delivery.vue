<template>
	<!-- TODO: Add delivery map -->
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-half">
					<h1 class="title is-1">Your order is almost ready</h1>

					<div class="box">
						<div class="block">
							<div class="padding-bottom">
								<span class="icon-text">
									<span class="icon has-text-primary">
										<span class="material-icons"> delivery_dining </span>
									</span>
									<span> <strong>We Received your Order</strong></span>
								</span>
							</div>
						</div>

						<!--  text  -->
						<div class="block">
							<p class="body is-size-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<!-- button -->
						<button class="button is-primary is-fullwidth is-uppercase">
							Track delivery
						</button>
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

.icon {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
