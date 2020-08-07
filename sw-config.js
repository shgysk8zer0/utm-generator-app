/* eslint no-unused-vars: 0 */
/* eslint-env serviceworker */
const config = {
	version: '1.0.1',
	fresh: [
		'https://api.github.com/users/shgysk8zer0',
	].map(url => new URL(url, location.origin).href),
	stale: [
		'/',
		'/js/index.js',
		'/css/index.css',
		'/img/favicon.svg',
		'https://cdn.kernvalley.us/js/std-js/functions.js',
		'https://cdn.kernvalley.us/js/std-js/esQuery.js',
		'https://cdn.kernvalley.us/components/custom-element.js',
		'https://cdn.kernvalley.us/js/std-js/webShareApi.js',
		'https://cdn.kernvalley.us/js/std-js/share-config.js',
		'https://cdn.kernvalley.us/components/share-button.js',
		'https://cdn.kernvalley.us/components/share-target.js',
		'https://cdn.kernvalley.us/components/toast-message.js',
		'https://cdn.kernvalley.us/components/toast-message.html',
		'https://cdn.kernvalley.us/components/toast-message.css',
		'https://cdn.kernvalley.us/components/pwa/install.js',
		'https://cdn.kernvalley.us/components/pwa/prompt.js',
		'https://cdn.kernvalley.us/components/pwa/prompt.html',
		'https://cdn.kernvalley.us/components/pwa/prompt.css',
		'https://cdn.kernvalley.us/components/popup/html-popup.js',
		'https://cdn.kernvalley.us/components/popup/html-popup.html',
		'https://cdn.kernvalley.us/components/popup/html-popup.css',
		'https://cdn.kernvalley.us/components/notification/html-notification.js',
		'https://cdn.kernvalley.us/components/popup/notification-notification.html',
		'https://cdn.kernvalley.us/components/popup/notification-notification.css',
		'https://cdn.kernvalley.us/components/github/user.js',
		'https://cdn.kernvalley.us/components/github/user.html',
		'https://cdn.kernvalley.us/components/github/user.css',
		'https://cdn.kernvalley.us/import.meta.js',
		'https://cdn.kernvalley.us/css/core-css/element.css',
		'https://cdn.kernvalley.us/css/core-css/class-rules.css',
		'https://cdn.kernvalley.us/css/core-css/utility.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/index.css',
		'https://cdn.kernvalley.us/css/core-css/theme/base.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/light.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/dark.css',
		'https://cdn.kernvalley.us/css/core-css/fonts.css',
		'https://cdn.kernvalley.us/css/core-css/scrollbar.css',
		'https://cdn.kernvalley.us/css/core-css/forms.css',
		'https://cdn.kernvalley.us/css/core-css/accordion.css',
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
		'https://cdn.kernvalley.us/img/logos/twitter.svg',
		'https://cdn.kernvalley.us/img/logos/linkedin.svg',
	].map(path => new URL(path, location.origin).href),
	allowed: [
		/^https:\/\/avatars[\d]\.githubusercontent\.com\/u\/\d+\?.*$/,
	]
};
