	// ассоциативный массив русских слов
	var PairRus = new Map();
	var PairLat = new Map();

	// ссылки на массивы 
	var Ptr = {
		rus: PairRus,
		lat: PairLat
	};

	PairRus.set("привет", {
		info: {type: "verb"},
		translate: {
			lat: "hi", // перевод на латынь
			rus: "привет",
		}
	});

	PairRus.set("мир", {
		info: {type: "noun"},
		translate: {
			lat: "orbis",
			rus: "мир",
		}
	});

	PairRus.set("максим", {
		info: {type: "proper_noun"},
		translate: {
			lat: "Maksim",
			rus: "Максим",
		}
	});


	
