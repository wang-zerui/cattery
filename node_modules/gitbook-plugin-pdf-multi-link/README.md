This is a quick and dirty fork from : [show0k/gitbook-plugin-download-pdf-link](https://github.com/show0k/gitbook-plugin-download-pdf-link)

# Gitbook plugin download-pdf-link
[![npm](https://img.shields.io/npm/v/gitbook-plugin-download-pdf-link.svg)](https://www.npmjs.com/package/gitbook-plugin-download-pdf-link)
[![npm](https://img.shields.io/npm/dt/gitbook-plugin-download-pdf-link.svg)](https://www.npmjs.com/package/gitbook-plugin-download-pdf-link)


GitBook Plugin to add a link on every page to download PDF.

To use this plugin, you have to modify your book.json configuration file.
```js
{
  "plugins": ["pdf-multi-link"],
  "pluginsConfig": {
    "download-pdf-link": {
      "base": "https://www.gitbook.com/book/poppy-project/poppy-docs/",
      "label"
      }: {
          "en": "Download PDF",
          "fr": "Télécharger le PDF"
      }
    }
  }
}
```

but if you need to serve different pdf :
```js
{
  "plugins": ["pdf-multi-link"],
  "pluginsConfig": {
    "download-pdf-link": {
      "base": { 
        "en":"https://www.gitbook.com/book/poppy-project/poppy-docs/en.pdf",
        "fr":"https://www.gitbook.com/book/poppy-project/poppy-docs/fr.pdf",
      },
      "label"
      }: {
          "en": "Download PDF",
          "fr": "Télécharger le PDF"
      }
    }
  }
}
```

you can remove the final '/' with `"link": true`
If you are trying it on your desktop, run `gitbook install` to download and install the plugin, and `gitboook serve .` to run the rendering.

To see this plugin in action, you can see [this example](https://docs.poppy-project.org).



----
This plugin comes from the original plugin [gitbook-plugin-downloadpdf](https://plugins.gitbook.com/plugin/download-pdf) which was broken for multilingual books.
