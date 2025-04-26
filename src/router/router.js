import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutPage.vue'
import TheBittenPeachOverview from '@/components/TheBittenPeachOverviewPage.vue'
import InterwovenIdentitiesOverview from '@/components/InterwovenIdentitiesOverviewPage.vue'
import Artist from '@/components/ArtistPage.vue'
import BodyPolitics from '@/components/BodyPoliticsPage.vue'
import MadeInQueer from '@/components/MadeInQueerPage.vue'
import YellowPerils from '@/components/YellowPerilsPage.vue'

const history = createWebHistory();
const router = createRouter({
	history,
	routes:[
		{
			path:'/',
			component: Home
		},
		{
			path:'/about-us',
			component: About
		},
		{
			path:'/exhibitions',
			component: TheBittenPeachOverview
		},
		{
			path:'/exhibition-2',
			component: InterwovenIdentitiesOverview
		},
		{
			path:'/artists',
			component: Artist
		},
		{
			path:'/exhibitions/body-politics',
			component: BodyPolitics
		},
		{
			path:'/exhibitions/made-in-queer',
			component: MadeInQueer
		},
		{
			path:'/exhibitions/yellow-perils',
			component: YellowPerils
		},
	]
});

export default router;