module.exports = {
	roles: [
		{	
			// получение первого катета
			IF: (fact) => (fact.indexOf("-катет") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-катет/g, '');
				return { "$1" : alias }
			},
			EXCLUDE: false
		},
		{	
			// получение второго катета
			IF: (fact) => (fact.indexOf("-катет") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-катет/g, '');
				return { "$2" : alias }
			},
			EXCLUDE: false
		},
		{	
			// получение второго катета
			IF: (fact) => (fact.indexOf("-гипотенуза") != -1 ) ? true : false,
			THEN: (fact) => {
				let alias = fact.replace(/-гипотенуза/g, '');
				return { "$3" : alias }
			},
			EXCLUDE: false
		},
		{
			// проверка наличия трех сторон
			IF: ['$1-катет', '$2-катет', '$3-гипотенуза'],
			THEN: "$1$2$3-прямоугольный треугольник",
			EXCLUDE: false
		}
	]
};