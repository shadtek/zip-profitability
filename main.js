// Get the address and put it in an object.
function getAddress() {
	var address = {}
	address.address1 = document.getElementById('address1').value;
	address.city = document.getElementById('city').value;
	address.country = document.getElementById('country').value;
	address.stateProvince = document.getElementById('stateProvince').value;

	document.getElementById("pre").innerHTML = address.address1 + ' ' + address.city + ' ' + address.country + ' ' + address.stateProvince;  

	//alert(address.address1 + ' ' + address.city + ' ' + address.country + ' ' + address.stateProvince);
}

