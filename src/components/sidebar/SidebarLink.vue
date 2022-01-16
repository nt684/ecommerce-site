<template>
	<router-link :to="to" class="link" :class="{ active: isActive }">
		<span class="icon material-icons">{{ icon }}</span>

		<transition name="fade">
			<span v-if="!collapsed">
				<slot />
			</span>
		</transition>
	</router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}
.fade-enter,
.fade-lead-to {
	opacity: 0;
}
</style>

<style>
.link {
	display: flex;
	align-items: center;

	cursor: pointer;
	position: relative;
	user-select: none;
	margin: 0.1em 0;
	padding: 0.4em;
	border-radius: 0.25em;
	height: 1.5em;

	color: blue;
	text-decoration: none;
}
.link:hover {
	background-color: red;
}
.link:active {
	background-color: teal;
}
.link .icon {
	flex-shrink: 0;
	width: 25px;
	margin-right: 10px;
}
</style>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
	props: {
		to: { type: String, required: true },
		icon: { type: String, requierd: true },
	},
	setup(props) {
		const route = useRoute()
		const isActive = computed(() => route.path === props.to)
		return { isActive, collapsed }
	},
}
</script>
