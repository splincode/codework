module.exports = {
	roles: [

		{	
			IF: (fact) => (fact.indexOf("-смертен") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-смертен/g, '');
				return { "$h" : alias }
			},
			EXCLUDE: false
		},

		{	
			IF: (fact) => (fact.indexOf("-человек") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-человек/g, '');
				return { "$p" : alias }
			},
			EXCLUDE: false
		},


		// проверка связей
		{
			IF: ['$h-смертен', '$p-человек'],
			THEN: "$p-смертен",
			EXCLUDE: false
		},

		// проверка наличия первого катета
		{	
			IF: (fact) => (fact.indexOf("-катет") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-катет/g, '');
				return { "$1" : alias }
			},
			EXCLUDE: false
		},

		// проверка наличия второго катета
		{	
			
			IF: (fact) => (fact.indexOf("-катет") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-катет/g, '');
				return { "$2" : alias }
			},
			EXCLUDE: false
		},

		// проверка наличия гипотенузы
		{	
			
			IF: (fact) => (fact.indexOf("-гипотенуза") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-гипотенуза/g, '');
				return { "$3" : alias }
			},
			EXCLUDE: false
		},

		// проверка наличия трех сторон
		{
			IF: ['$1-катет', '$2-катет', '$3-гипотенуза'],
			THEN: "$1$2$3-прямоугольный треугольник",
			EXCLUDE: false
		},

		// проверка сущестования правильного прямоугольного треугольника по его сторонам
		{	
			MODE: 'EVAL',
			IF: ["$1$2$3-прямоугольный треугольник", "f($1, $2, $3) = ($1<$2+$3) * ($2<$1+$3) * ($3<$1+$2); f($1, $2, $3) "],
			THEN: "$1$2$3-прямоугольный треугольник правильный, для которого справедлива формула: $1 ^ 2 + $2 ^ 2 = $3 ^ 2",
			EXCLUDE: false
		},

		// первый корень для теоремы Виета
		{
			IF: (fact) => (fact.indexOf("-корень") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-корень/g, '');
				return { "$x1" : alias }
			},
			EXCLUDE: false
		},

		// второй корень для теоремы Виета
		{
			IF: (fact) => (fact.indexOf("-корень") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-корень/g, '');
				return { "$x2" : alias }
			},
			EXCLUDE: false
		},

		// свободный член p
		{
			IF: (fact) => (fact.indexOf("-свободный_член_уравнения") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-свободный_член_уравнения/g, '');
				return { "$p" : alias }
			},
			EXCLUDE: false
		},

		// свободный член q
		{
			IF: (fact) => (fact.indexOf("-свободный_член_уравнения") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-свободный_член_уравнения/g, '');
				return { "$q" : alias }
			},
			EXCLUDE: false
		},

		// проверка наличия необходимых параметров
		{
			IF: ['$x1-корень', '$x2-корень', '$p-свободный_член_уравнения', '$q-свободный_член_уравнения'],
			THEN: "ax^2 + $px + $q = 0, определили уравнение по теореме Виета (a = 1)",
			EXCLUDE: false
		},

	]
};