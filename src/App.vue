<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/products">Our Products</router-link> |
		<router-link to="/products/devils-food-cake"
			>Products Detail Test</router-link
		>
		|
		<router-link to="/cart">Your Cart</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
@charset "utf-8";
@import '../node_modules/bulma/bulma.sass';
</style>
