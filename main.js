// Get the address and put it in an object.
function checkAddress() {
	var address = {}
	address.address1 = document.getElementById('address1').value;
	address.city = document.getElementById('city').value;
	address.country = document.getElementById('country').value;
	address.stateProvince = document.getElementById('stateProvince').value;

	var verifyUrl = 'https://geo.idbcore.com/address/verify?city=' +
									 address.city+
									 '&country='+
									 address.country+
									 '&secondary=&state='+
									 address.stateProvince+
									 '&street='+
									 address.address1+
									 '&zipcode='

	document.getElementById("pre").innerHTML = verifyUrl;



}
