module.exports = {
	roles: [
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
		}
	]
};