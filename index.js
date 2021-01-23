    function getData(){
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(json => {
            var client = json[0].Price
            var years = json[1].Price
            var policy = json[2].Price
            var certficates = json[3].Price
            
    document.getElementById("clients").innerHTML = client
    document.getElementById("certificates").innerHTML = certficates
    document.getElementById("years").innerHTML = years
    document.getElementById("policy").innerHTML = policy
        })
    }
    getData()
