/* What should the add-on do after it is installed */
function onInstall() {
  onOpen();
}
/* What should the add-on do when a document is opened */
function onOpen() {
  DocumentApp.getUi()
  .createAddonMenu() // Add a new option in the Google Docs Add-ons Menu
  .addItem("Yeeter", "showSidebar")
  .addToUi();  // Run the showSidebar function when someone clicks the menu
}

/* Show a 300px sidebar with the HTML from googlemaps.html */
function showSidebar() {
  var html = HtmlService.createTemplateFromFile("googlemaps")
    .evaluate()
    .setTitle("Yeeter"); // The title shows in the sidebar
  DocumentApp.getUi().showSidebar(html);
}

function updateColor(color) {
  text = DocumentApp.getActiveDocument().getCursor().getSurroundingText();
  if (text.getForegroundColor() != color) text.setForegroundColor(color);
}