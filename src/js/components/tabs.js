import GraphTabs from 'graph-tabs';

const cardTabs = document.querySelectorAll('[data-tabs="tabs-card"]')

cardTabs?.forEach((element) => {
	if (element) {
		const tabs = new GraphTabs('tabs-card');
	}
})