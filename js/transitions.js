$(document).ready(function() {

        $("a.transition").click(function(event){
          event.preventDefault();
          linkLocation = this.href;
          $("body").fadeOut(250, redirectPage);
        });

        function redirectPage() {
          window.location = linkLocation;
        }
});
