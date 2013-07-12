var baseBBSUrl = 'http://http://95.138.143.82:3002/builds/';
jQuery(document).ready(function($) {
    $('.build-number').each(function(index){
        var project = $(this).attr("data-bamboo-project");
        var plan = $(this).attr('data-bamboo-plan');
        var _elem = $(this);
        $.getJSON(baseBBSUrl+project+'/plans/'+plan+'/status.json',function(data) {
            if (data.number)
            {
                console.log("Build number: "+data.number);
                _elem.html("Build "+data.number);
            }
        })
    });
});