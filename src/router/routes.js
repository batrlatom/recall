import WelcomeWizard from './../components/WelcomeWizard'
import HomeView from './../components/HomeView'
import SensorsBase from './../components/SensorsBase'
import MarketplaceBase from './../components/MarketplaceBase'

export
const routes = [
	{
		name: 'home',
		path: '/',
		component: WelcomeWizard
	},
	{
		name: 'app',
		path: '/app',
		component: HomeView
	},
	{
		name: 'sensors',
		path: '/sensors',
		component: SensorsBase
	},
	{
		name: 'marketplace',
		path: '/marketplace',
		component: MarketplaceBase
	}
]
