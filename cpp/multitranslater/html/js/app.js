$(function(){

	function translate(){
			
		From = $('.selectFrom').val();
		FromLang = Ptr[From]; // база перевода
		To = "lat";

		text = $("#text").val();
		words = text.toLowerCase().replace(/[,.?!:]/g, "").split(' ');
		adverb = 0;
		
		for(var option in words) {
			word_from = words[option];

			word = FromLang.get(word_from);
			if (word) {

				// если слово есть в базе
				if (word.translate.hasOwnProperty(To)){

					// если можно перевести это слово
					if (word.info.type == 'adverb') {
						
						if (adverb > 0) {
							adverb = 0;

							if (word.info.hasOwnProperty('article')) {
								if (word.info.article.hasOwnProperty(To))
									article = word.info.article[To];
								else article = "";
							}
							else 
								article = "";

							word_translate = article + word.translate[To];
						} else word_translate = word.translate[To];
						
						adverb++;

					} else {
						word_translate = word.translate[To];
					}
					console.log(word_translate)
					text = text.toLowerCase().replace(word_from, word_translate);

				}

			}
		}

		$("#textBetween").val(text);


		From = "lat";
		FromLang = Ptr[From]; // база перевода
		To = $(".selectTo").val();

		text = $("#textBetween").val();
		words = text.toLowerCase().replace(/[,.?!:]/g, "").split(' ');
		adverb = 0;
		
		for(var option in words) {
			word_from = words[option];

			word = FromLang.get(word_from);
			if (word) {

				// если слово есть в базе
				if (word.translate.hasOwnProperty(To)){

					// если можно перевести это слово
					if (word.info.type == 'adverb') {
						
						if (adverb > 0) {
							adverb = 0;

							if (word.info.hasOwnProperty('article')) {
								if (word.info.article.hasOwnProperty(To))
									article = word.info.article[To];
								else article = "";
							}
							else 
								article = "";

							word_translate = article + word.translate[To];
						} else word_translate = word.translate[To];
						
						adverb++;

					} else {
						word_translate = word.translate[To];
					}
					console.log(word_translate)
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