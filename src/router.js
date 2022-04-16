import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/character/:id',
		name: 'main',
		component: () => import('@/components/CharacterMain.vue'),
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router