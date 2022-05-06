console.log("into address js")
var fields = [   
    { element: "search", field: "", mode: pca.fieldMode.SEARCH }, 

    { element: "street-address", field: "Line1", mode: pca.fieldMode.POPULATE },   
    { element: "street-address2", field: "Line2", mode: pca.fieldMode.POPULATE },   
    { element: "city", field: "City", mode: pca.fieldMode.POPULATE },   
    { element: "state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },   
    { element: "postcode", field: "PostalCode" },   
    { element: "country", field: "CountryName", mode: pca.fieldMode.COUNTRY }, 

    { element: "multi-unit", field: "{AcMua}", mode: pca.fieldMode.POPULATE },   
    { element: "residential-business", field: "{AcRbdi}", mode: pca.fieldMode.POPULATE }  
],  
options = {   
    key: "JH71-GH19-FF14-BH29"  
},  
control = new pca.Address(fields, options); 