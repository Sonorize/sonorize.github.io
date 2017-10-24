function googleApiClientReady() {
  gapi.client.setApiKey("AIzaSyB04SN1r0eQXLugq551J8RM66CRxDXcpdY");
  gapi.client.load("youtube", "v3", function() {
    searchA();
    //API do YouTube pronta
  });
}
function tplawesome(e,t){res=e;for(let n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function searchA() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       //Preparando a requsição
       let request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
       });
       //Executando a requsição
       request.execute(function(response) {
          let results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });

    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}
