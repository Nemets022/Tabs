window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	//	Your block menu Only css class
	let blockMenu = 'info-header',
		//	Your tab
		tabs = 'info-header-tab',
		//  Your content block
		content = 'info-tabcontent';


	let info = document.querySelector('.' + blockMenu),
		tab = document.querySelectorAll('.' + tabs),
		tabContent = document.querySelectorAll('.' + content);

	// TAB CONTENT
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	//TAB CLICK
	info.addEventListener('click', function (e) {
		let target = e.target;
		if (target && target.classList.contains(tabs)) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});


});