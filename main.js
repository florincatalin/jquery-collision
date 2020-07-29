$(document).ready(function() {
		
		$('#div2').draggable({
            refreshPositions: true
        });
		

        function collision($div1, $div2) {
            var x1 = $div1.offset().left;
            var y1 = $div1.offset().top;
            var h1 = $div1.outerHeight(true);
            var w1 = $div1.outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var y2 = $div2.offset().top;
            var h2 = $div2.outerHeight(true);
            var w2 = $div2.outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;
            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }

        setInterval(() => {
            if (collision($('#div1'),$('#div2'))) { 
				var interval = null;
				var div1poz = $("#div1").offset();
				var div2poz = $("#div2").offset();
				
				var div1height = $("#div1").height();
				var div2height = $("#div2").height();
				var div1width = $("#div1").width();
				var div2width = $("#div2").width();	

				var difh = (div1height - div2height)/2;
				var difw = (div1width - div2width)/2;
				
				$('#div2').draggable("disable");				
				clearInterval(interval);	
				var susdiv1 = div1poz.top + difh;
				var stgdiv1 = div1poz.left + difw;

				$("#div2").offset({top: susdiv1, left: stgdiv1})	
			}
            else {
//				$('#div1').text("?")
			}
        },50);

});
