var dataToWrite = [
	{title: 'Beefburger', price: 26, avg_weight: 240, sold_out: false},
	{title: 'Bratwurst', price: 25, avg_weight: 500, sold_out: false},
	{title: 'Chineoise', price: 55, avg_weight: 500, sold_out: false},
	{title: 'Entrecote', price: 68, avg_weight: 650, sold_out: false},
	{title: 'Filet', price: 90, avg_weight: 1000, sold_out: true},
	{title: 'Geschnetzeltes', price: 24, avg_weight: 400, sold_out: false},
	{title: 'Hackfleisch', price: 22, avg_weight: 400, sold_out: false},
	{title: 'Hohrücken', price: 57, avg_weight: 700, sold_out: false},
	{title: 'Plätzli a la Minute', price: 47, avg_weight: 450, sold_out: false},
	{title: 'Ragout', price: 25, avg_weight: 400, sold_out: false},
	{title: 'Rindsbauernwurst zum Kochen', price: 40, avg_weight: 250, sold_out: false},
	{title: 'Rindsbraten', price: 38, avg_weight: 900, sold_out: false},
	{title: 'Saftplätzli', price: 44, avg_weight: 400, sold_out: false},
	{title: 'Siedfleisch', price: 26, avg_weight: 1000, sold_out: false},
	{title: 'Steak a la Minute', price: 49, avg_weight: 500, sold_out: false},
	{title: 'Trockenfleisch', price: 82, avg_weight: 300, sold_out: false},
	{title: 'Trockenfleisch geschnitten', price: 86, avg_weight: 100, sold_out: false},
	{title: 'Hochländerli', price: 45, avg_weight: 190, sold_out: false},
	{title: 'Hürliwurst Paar', price: 46, avg_weight: 160, sold_out: false},
	{title: 'Whiskywurst', price: 45, avg_weight: 150, sold_out: false}
];

dataToWrite.forEach((item) => {
	db.collection('shop_items').add(item);
});
