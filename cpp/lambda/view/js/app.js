$(document).foundation();

$(function(){
	$("#primary-color").keyup(function(){
		var text = $(this).val();

		if (text.indexOf(">") !== -1) {
			text = text.replace(">", "λ");
			$(this).val(text);
		}
		
	});

	function parseStrokeToArray(text){
		terms = text.split(" ");
		return terms;
	}

	$("#lambdaclick").on("click", function(){
		$(".intermediate").val("");

		var text = $("#primary-color").val();
		text = text.replace(/[()]/g, "");

		terms = parseStrokeToArray(text);

		while(terms[0].indexOf("λ") !== -1) {

			for(var i=0; i<terms.length; ++i){
				if (terms[i].indexOf("λ") !== -1) {
					// лямбда-выражение
					// минимум = 1
					var count = terms[i].match(/[λ]/g).length; 
					var x = 0;

					for(var j=i+1; j <= i + count; ++j){

                        // не нашли нужное количество переменных
						if (terms[j].indexOf("λ") !== -1 ) break;
						else x++;

					}

					if (x == count) {

						// последующие элементы нужные числа
						var textarea = terms[i];

						terms[i] = terms[i].replace(/[λ]/g, "").split(".");

						var textarea2 = terms[i][terms[i].length-1];
						var textarea3 = "";

						for(var k=1; k <= count; ++k){
							textarea += " " + terms[i+k].replace(/[()]/g, "") + " ";
							
							var symbolforreplace = terms[i][k-1];
							textarea3 += 
									symbolforreplace +
									" = " + 
									terms[i+k].replace(/[()]/g, "")
									 + "\n";

							terms[i][terms[i].length-1] = 
								terms[i][terms[i].length-1]
								.replace(new RegExp(terms[i][k-1], 'g'), terms[i+k]);

						}

						var textarea4 = terms[i][terms[i].length-1];

						terms[i] = String( eval(terms[i][terms[i].length-1]) );
						
						if (terms[i] < 0) terms[i] = "(" + String(terms[i]) + ")";
						else terms[i] = String(terms[i]);

						terms.splice(i+1, count);

						var t = $(".intermediate").val();
						t += textarea + "\n" + 
							 textarea3 + 
							 textarea2 + 
							 " => " + 
							 textarea4 + 
							 " => " + 
							 terms[i].replace(/[()]/g, "") + 
							 "\n\n";

						$(".intermediate").val(t);
						
					}

				} 
				
			}

		}

		$(".resultlambda").val(terms);

		
	});
})
