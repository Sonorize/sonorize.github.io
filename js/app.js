$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    //Preparando a requisição
    let request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
        maxResults: 3,
        order: "viewCount",
        publishedAfter: "2015-01-0100:00:00Z"
    });
    //Executando requisição
    request.execute(function(response) {
      let results = response.results;
      $.each(results.itens, function(index, item) {
        console.console.log(item);
      });
    });
  });
});

function init() {
  gapi.client.setApiKey("AIzaSyCmreUnb71DAq_J9UnpKeguFA8oiJqb4qQ");
  gapi.client.load("youtube", "v3", function() {
    //API YouTube Pronta
  });
}
