$(function(){

	function translate(){
			
		From = $('.selectFrom').val();
		FromLang = Ptr[From]; // база перевода
		To = $('.selectTo').val();

		text = $("#text").val();
		words = text.toLowerCase().replace(/[,.?!:]/g, "").split(' ');

		for(var option in words) {
			word_from = words[option];

			word = FromLang.get(word_from);
			if (word) {

				// если слово есть в базе
				if (word.translate.hasOwnProperty(To)){

					// если можно перевести это слово
					word_translate = word.translate[To];
					text = text.toLowerCase().replace(word_from, word_translate);

				}

			}
		}

		$("#translate").val(text);

		return false;
	}


	$("form").submit(translate);
	$("#text").blur(translate);

});