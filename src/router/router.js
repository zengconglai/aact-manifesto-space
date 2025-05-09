import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutPage.vue'
import ExhibitionsOverview from '@/components/ExhibitionsOverviewPage.vue'
import TheBittenPeachOverview from '@/components/TheBittenPeachOverviewPage.vue'
import InterwovenIdentitiesOverview from '@/components/InterwovenIdentitiesOverviewPage.vue'
import Artist from '@/components/ArtistPage.vue'
import BodyPolitics from '@/components/BodyPoliticsPage.vue'
import MadeInQueer from '@/components/MadeInQueerPage.vue'
import YellowPerils from '@/components/YellowPerilsPage.vue'
import RootsAndReconciliation from '@/components/RootsAndReconciliationPage.vue'
import UnseenAndUnspoken from '@/components/UnseenAndUnspoken.vue'
import BetweenTwoWorlds from '@/components/BetweenTwoWorldsPage.vue'
import ResilienceInCommunity from '@/components/ResilienceInCommunityPage.vue'

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
			component: ExhibitionsOverview
		},
		{
			path:'/exhibitions/the-bitten-peach',
			component: TheBittenPeachOverview
		},
		{
			path:'/exhibitions/interwoven-identities',
			component: InterwovenIdentitiesOverview
		},
		{
			path:'/artists',
			component: Artist
		},
		{
			path:'/exhibitions/the-bitten-peach/body-politics',
			component: BodyPolitics
		},
		{
			path:'/exhibitions/the-bitten-peach/made-in-queer',
			component: MadeInQueer
		},
		{
			path:'/exhibitions/the-bitten-peach/yellow-perils',
			component: YellowPerils
		},
		{
			path:'/exhibitions/interwoven-identities/roots-and-reconciliation',
			component: RootsAndReconciliation
		},
		{
			path:'/exhibitions/interwoven-identities/unseen-and-unspoken',
			component: UnseenAndUnspoken
		},
		{
			path:'/exhibitions/interwoven-identities/between-two-worlds',
			component: BetweenTwoWorlds
		},
		{
			path:'/exhibitions/interwoven-identities/resilience-in-community',
			component: ResilienceInCommunity
		}
	]
});

export default router;