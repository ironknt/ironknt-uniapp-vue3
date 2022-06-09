import { createSSRApp } from "vue";
import App from "./App.vue";
import uView from './uni_modules/vk-uview-ui';
import 'animate.css';
import * as Pinia from 'pinia';

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	app.use(uView);
	return {
		app,
	};
}
