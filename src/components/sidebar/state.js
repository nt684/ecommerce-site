import { ref, computed } from 'vue'

export const collapsed = ref(false)
// eslint-disable-next-line no-return-assign
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 250
export const SIDEBAR_WIDTH_COLLAPSED = `${SIDEBAR_WIDTH}` * -1
export const sidebarWidth = computed(
	() => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
