<script type="text/javascript" >
$(function() {
   $(".more").click(function() {
      var element = $(this);
      var msg = element.attr("id");
      $("#morebutton").html('<img src="ajax-loader.gif" />');

      $.ajax({
         type: "GET",
         url: "http://api.typepad.com/assets.js?q=ada%20lovelace&max-results=2&callback=ada_callback",
         data: "",
         cache: false,
         success: function(html){

            $("#more_updates").append(html);
            $(".more").remove();

         }
      });
      return false;
   });
});
</script>