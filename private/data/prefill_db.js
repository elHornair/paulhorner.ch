var dataToWrite = [
	{title: 'Beefburger (2 Stück)', price: 26, avg_weight: 250, sold_out: false},
	{title: 'Chineoise', price: 55, avg_weight: 500, sold_out: false},
	{title: 'Entrecote', price: 75, avg_weight: 500, sold_out: false},
	{title: 'Filet', price: 92, avg_weight: 1200, sold_out: false},
	{title: 'Geschnetzeltes', price: 26, avg_weight: 400, sold_out: false},
	{title: 'Hackfleisch', price: 23, avg_weight: 400, sold_out: false},
	{title: 'Hohrücken (2 Stück)', price: 59, avg_weight: 400, sold_out: false},
	{title: 'Haxen', price: 28, avg_weight: 0, sold_out: false},
	{title: 'Ragout', price: 26, avg_weight: 400, sold_out: false},
	{title: 'Rindsbauernwurst zum Kochen', price: 40, avg_weight: 200, sold_out: false},
	{title: 'Rindsbraten', price: 38, avg_weight: 900, sold_out: false},
	{title: 'Jägerplätzli (2-3 Stück)', price: 47, avg_weight: 450, sold_out: false},
	{title: 'Saftplätzli (3-4 Stück)', price: 44, avg_weight: 300, sold_out: false},
	{title: 'Siedfleisch', price: 28, avg_weight: 900, sold_out: false},
	{title: 'Huftsteak (2 Stück)', price: 59, avg_weight: 400, sold_out: false},
	{title: 'Trockenfleisch', price: 85, avg_weight: 350, sold_out: false},
	{title: 'Trockenfleisch geschnitten', price: 90, avg_weight: 100, sold_out: false},
	{title: 'Salami', price: 56, avg_weight: 120, sold_out: false},
	{title: 'Hochländerli', price: 49, avg_weight: 190, sold_out: false},
	{title: 'Hürliwürstli Snack (2 Stück)', price: 50, avg_weight: 50, sold_out: false},
	{title: 'Whiskywurst', price: 49, avg_weight: 190, sold_out: false},
	{title: 'Cervelat', price: 20, avg_weight: 200, sold_out: false},
	{title: 'Bratwurst (2 Stück)', price: 26, avg_weight: 260, sold_out: false},
	{title: 'T-Bone', price: 78, avg_weight: 0, sold_out: false},
	{title: 'Côte de Boeuf', price: 69, avg_weight: 0, sold_out: false},
	{title: 'Ochsenschwanz, Zunge, Innereien', price: 20, avg_weight: 0, sold_out: false},
];

dataToWrite.forEach((item) => {
	db.collection('shop_items').add(item);
});
