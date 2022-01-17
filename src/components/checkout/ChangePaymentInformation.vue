<template>
	<!-- TODO: make edit model just change out info based -->
	<div class="modal">
		<div class="modal-background"></div>
		<div class="modal-content">
			<div class="field">
				<label class="label">Card Number</label>
				<div class="control">
					<input class="input" type="email" placeholder="xxxx xxxx xxxx xxxx" />
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
