<template>
	<div class="modal">
		<div class="modal-background"></div>
		<div class="modal-content">
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
		<button class="modal-close is-large" aria-label="close"></button>
	</div>
	<button class="js-modal-trigger" data-target="modal-js-example">
		Open JS example modal
	</button>
</template>

<script>
export default {
	name: 'ChangeDeliveryAddress',
}
</script>

<style></style>
