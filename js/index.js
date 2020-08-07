document.forms.utm.hidden = false;

document.forms.utm.addEventListener('submit', async event => {
	event.preventDefault();
	const data = new FormData(event.target);

	const url = new URL(data.get('url'));
	data.delete('url');

	Array.from(data.entries()).forEach(([key, value]) => {
		if (typeof value !== 'string' || value === '') {
			data.delete(key);
		}
	});

	url.search = `?${new URLSearchParams(data)}`;
	document.getElementById('out').value = url.href;

	customElements.whenDefined('html-notification').then(async () => {
		const HTMLNotificationElement = customElements.get('html-notification');
		new HTMLNotificationElement('URL Generated', {
			body: 'What would you like to do next?',
			icon: '/img/favicon.svg',
			tag: 'clipboard',
			requireInteraction: true,
			vibrate: [800, 0, 800],
			data: { url, form: event.target.name },
			actions: [{
				title: 'Share it',
				action: 'share',
			}, {
				title: 'Copy it',
				action: 'copy',
			}, {
				title: 'Reset form',
				action: 'reset',
			}]
		}).addEventListener('notificationclick', async ({ action, notification }) => {
			switch(action) {
				case 'copy':
					if (('clipboard' in navigator) && navigator.clipboard.writeText instanceof Function) {
						Promise.all([
							navigator.clipboard.writeText(notification.data.url),
							customElements.whenDefined('html-popup'),
						]).then(async () => {
							const Popup = customElements.get('html-popup');
							const popup = new Popup('URL copied', { timer: 5000, autoRemove: true });
							document.body.append(popup);
							await notification.close();
							popup.show();
						});
					} else {
						alert('Clipboard API not supported');
					}
					break;

				case 'share':
					if ((navigator.canShare instanceof Function) && navigator.canShare({url: 'https://example.com' })) {
						const url = notification.data.url;
						notification.close();
						await navigator.share({ url });
					} else {
						alert('Share API not supported');
					}
					break;

				case 'reset':
					notification.close();
					document.forms[notification.data.form].reset();
					break;
			}
		});
	});
});
