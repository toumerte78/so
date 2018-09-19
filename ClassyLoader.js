$(function(){
    $('.icon-large').hide();
    $('.download').hide();

    var time = 10
    
    $('.loader').ClassyLoader({
        width: 250,
        height: 250,
        animate: true,
        displayOnLoad: true,
        percentage: 100,
        speed: 100,
        roundedLine: false,
        showRemaining: true,
        fontFamily: 'Helvetica',
        fontSize: '50px',
        showText: true,
        diameter: 80,
        fontColor: 'rgba(25, 25, 25, 0.6)',
        lineColor: '#ff5722',
        remainingLineColor: 'rgba(55, 55, 55, 0.4)',
        lineWidth: 5
    });
    
    setInterval(function(){
        if(time == 0){
            $('.icon-large').show();
            $('.loader').hide();
            $('.download').show();
			$("#btn-download").delay().fadeIn();
			
        }
        time--;
    }, 1070);
})
