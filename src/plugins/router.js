import Vue from 'vue';
import VueRouter from 'vue-router';
import projects from '@/components/Projects';

Vue.use(VueRouter);

const routes = [
	{
		name: 'base',
		path: '/',
		component: projects
	},
	{
		name: 'project',
		path: '/:id/',
		component: projects
	},
	{
		name: 'projectAndRepo',
		path: '/:id/:repository/',
		component: projects
	}
];

export default new VueRouter({
	base: '/',
	mode: 'history',
	routes: routes
});
