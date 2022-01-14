<template>
	<div class="container">
		<section class="section">
			<h1 class="title is-1">Checkout</h1>
			<h3 class="subtitle">Payment Information</h3>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Card Number</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input class="input"
								   type="text"
								   placeholder="xxxx xxxx xxxx xxxx" />
						</div>
					</div>
				</div>
				<div class="field-label is-normal">
					<label class="label">Expiration Date</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input class="input"
								   type="text"
								   placeholder="mm/yyyy" />
						</div>
					</div>
				</div>
				<div class="field-label is-normal">
					<label class="label">Security Code</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input class="input"
								   type="text"
								   placeholder="xxx" />
						</div>
					</div>
				</div>
				<div class="buttons">
					<a class="button is-primary" href="/delivery">Confirm Order</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
