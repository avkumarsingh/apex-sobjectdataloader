var Helper = (function () {

	function initEvents() {
    /*if($(window).scrollTop() > 200){
       $('.index-banner').css({'height': '400'}); 
     }else{
         $('.index-banner').css({'height': '572'}); 
     }*/
        
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll > 100){
            
                $('.index-banner').stop().animate({height: "100px"},200);
                }else{
            $('.index-banner').stop().animate({height: "572px"},200);
            }
        });
        
        $('select').material_select();
        
        $('.reset a').click(function(){
            $(".search-input").val("");
            $('.select_1').prop('selectedIndex',0);
            $('.select2').hide();
            $('.select3').hide();
        });
        
        $('span.caret').hide();
        
        $('.select2').hide();
        $('.select3').hide();
        
        $( ".select_1" ).change(function() {
            $('.select2').show();
        });
        
         $( ".select_2" ).change(function() {
            $('.select3').show();
        });
	}

	return {
		initEvents: initEvents
	}
})();