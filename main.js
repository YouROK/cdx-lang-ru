// Registers the Russian table with the i18n plugin.
function setup(cdx) {
  if (cdx.worker) return;

  var table;
  try {
    table = JSON.parse(cdx.sys.readFile(cdx.dir + "/i18n/ru.json"));
  } catch (e) {
    cdx.log.error("Failed to load the Russian catalog: " + e);
    return;
  }

  try {
    cdx.bus.request("i18n:register", { id: cdx.id, tables: { ru: table } });
  } catch (e) {
    cdx.log.warn("The i18n plugin is not available: " + e);
  }
}
