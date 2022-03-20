require(["gitbook", "jQuery"], function (gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        const conf = config['pdf-multi-link'];
        const lang = gitbook.state.innerLanguage;
        let label = conf.label;
        let base = conf.base;
        if (lang) {
            // label can be a unique string for multi-languages site
            if (typeof label === 'object') label = label[lang];
            if (typeof base === 'object') base = base[lang];
        }
        const multilingual = conf.multilingual || false
        const file = conf.file || false
        if (!file) {
            if (base.slice(-1) !== "/") {
                base += "/"
            }
        }

        gitbook.toolbar.createButton({
            icon: 'fa fa-file-pdf-o',
            text: label,
            onClick: function () {
                window.open(base)
            }
        })
    })
})
