$(document).on('ready', function() {
	// init function
	(function() {
		Helper.initEvents();
		
	})();
});
var Helper = (function () {

    function initEvents() {
        $('select option').click(function(){
            if($(this).siblings().hasClass('ques-content-selected') == false){
                $(this).addClass('ques-content-selected');
            }
            else{
                $(this).siblings('.ques-content-selected').removeClass('ques-content-selected');
                $(this).addClass('ques-content-selected');
            }
            $(this).addClass('ques-content-selected');
        })
        
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15,
            onSet: function (ele) {
                if(ele.select){
                    //$('.search-input').focus();
                }
            },
            onClose: function(){
               $('.btn-submit').focus();
           }
        });
        
        if($(window).width() < 1024){
            $('#recent').css('display','none');
        }
        
        $('select').material_select();
        
        $('.reset a').click(function(){
            $(".search-input").val("");
            $('.select_1').prop('selectedIndex',0);
        });

        $('span.caret').hide();

        $('.border-cover-1').hide();

        $('.border-cover-2').hide();


        $( ".select_1" ).change(function(event) {
            var displayFlag = this.value;
            $('.border-cover-2').hide();
            if ( displayFlag == 1){
                $('.select_prod').show();
                $('.select_plat').hide();
            }else if(displayFlag == 2){
                $('.select_plat').show();
                $('.select_prod').hide();
            }
            event.stopPropagation();
        });
        
        $( ".select_2_prod" ).change(function() {
            $('.border-cover-2').show();
        });
        
        $(".push-down-button").click(function() {
            $('html, body').animate({
                scrollTop: $("#main-banner").offset().top
            }, 200);
        });
        
        /*$(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll > 100){
            
                $('.index-banner').stop().animate({height: "100px"},200);
                }else{
            $('.index-banner').stop().animate({height: "572px"},200);
            }
        });*/
        
        $('.collapsible #question-head').click(function(){
            if($(window).width()>1024){
                $('.collapsible-body #filter-category').css('display','block');
                $('.collapsible-body #filter-region').css('display','block');
                $('.collapsible-body #filter-date').css('display','block');
            }
        });
        
        $('#recent-searches-head').click(function(){
            $('.down').toggleClass('up');    
            $('#recent-ques-head #recent-searches-body').replaceWith($('#recent'));
            if($('#recent').css('display') == 'none'){
                $('#recent').css('display','block');
            }
            else{
                $('#recent').css('display','none');
            }
            
        });
        $('.question-result').click(function(){
            if(!$(this).parent().siblings().find('.transdown').is('.transup') == false){
                $(this).parent().siblings().find('.transup').removeClass('transup')
            }
            $(this).find('.transdown').toggleClass('transup');    
        });

        $('#question-head').click(function(){
            $('.expand').toggleClass('collapse'); 
        });


        $('div').on("click",".filter-cross-img", function (e) {
            e.preventdefault;
            $(this).parents('.filter-cls').css('display','none');
        });
        
    }

    return {
        initEvents: initEvents
    }
    
})();