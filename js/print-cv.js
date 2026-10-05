/* Ctrl/Cmd + P prints the CV (cv.html) instead of the website,
 * so visitors can "Save as PDF" to download it. */
(function () {
	var frame = document.getElementById('cv-print-frame');
	var frameReady = false;

	if (frame) {
		frame.addEventListener('load', function () { frameReady = true; });
	}

	function printCv() {
		try {
			if (frame && frameReady) {
				frame.contentWindow.focus();
				frame.contentWindow.print();
				return;
			}
		} catch (e) {
			// iframe not accessible (e.g. opened via file://) - fall through
		}
		window.open('cv.html?print=1', '_blank');
	}

	document.addEventListener('keydown', function (e) {
		var key = (e.key || '').toLowerCase();
		if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && key === 'p') {
			e.preventDefault();
			e.stopPropagation();
			printCv();
		}
	}, true);
})();
