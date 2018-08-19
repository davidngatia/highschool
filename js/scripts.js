function onSubmit(e){
  Logger.log("authMode=%s, source.getId()=%s", e.authMode, e.source.getId());
  var items = e.response.getItemResponses();
  for (i in items){
    Logger.log("getItem().getTitle()=%s, getResponse()=%s", items[i].getItem().getTitle(), items[i].getResponse());
  }
