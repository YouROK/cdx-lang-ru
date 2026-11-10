# Russian Translation - cdx plugin

Russian (`ru`) interface translation for [cdx](https://github.com/YouROK/cdx).

The plugin registers one translation table with the `i18n` plugin:

- web dashboard pages, panels, and JSON Schema settings;
- permission prompts shown in the CLI.

## Install

The `i18n` plugin must be enabled; it loads first (`order: 0`).

Install the release archive from a tag:

```bash
cdx plugins install https://github.com/YouROK/cdx-lang-ru/releases/download/0.0.1/lang-ru-0.0.1.zip
```

Reload plugins, open the **Translations** page, and select `ru`.

## Layout

```
lang-ru/
  manifest.json
  main.js
  i18n/ru.json
```

`main.js` reads `i18n/ru.json` from the plugin directory and sends it to the `i18n` plugin over the bus. The plugin has no build step and no panel.

## Release

A tag push builds and publishes the zip:

```bash
git tag 0.0.1
git push origin 0.0.1
```

The workflow checks the manifest, the script syntax, the translation table, and the tag, then attaches `lang-ru-<tag>.zip` to the GitHub release.
