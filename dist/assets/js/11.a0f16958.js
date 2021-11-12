(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{397:function(e,t,a){"use strict";a.r(t);var r=a(54),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vkg"}},[e._v("#")]),e._v(" VKG")]),e._v(" "),a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),a("p",[e._v("The Open Data Hub Virtual Knowledge Graph is available as a SPARQL endpoint.\nHere we describe its schema (its structure).")]),e._v(" "),a("h3",{attrs:{id:"how-to-read-the-diagrams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-read-the-diagrams"}},[e._v("#")]),e._v(" How to read the diagrams")]),e._v(" "),a("h4",{attrs:{id:"default-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-prefix"}},[e._v("#")]),e._v(" Default prefix")]),e._v(" "),a("p",[e._v("By default, classes and properties use "),a("code",[e._v("http://schema.org/")]),e._v(" as prefix.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("You can dereference the URLs of classes and properties to see their official documentation. For instance, have a look at "),a("a",{attrs:{href:"http://schema.org/Hotel",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://schema.org/Hotel"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"arrows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrows"}},[e._v("#")]),e._v(" Arrows")]),e._v(" "),a("p",[e._v("Black arrows are for object properties. White arrows denotes a sub-class relationship.")]),e._v(" "),a("h4",{attrs:{id:"cardinalities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cardinalities"}},[e._v("#")]),e._v(" Cardinalities")]),e._v(" "),a("p",[e._v("Cardinalities are provided by data and object properties. Cardinalities of 1 are kept most of the time implicit, expect for highlighting something counter-intuitive.")]),e._v(" "),a("p",[e._v("Cardinalities of object properties follow the "),a("a",{attrs:{href:"https://www.quora.com/How-do-we-read-cardinality-in-a-UML-diagram-or-in-E-A-diagram",target:"_blank",rel:"noopener noreferrer"}},[e._v('"look across" notation'),a("OutboundLink")],1),e._v(" like in UML diagrams.")]),e._v(" "),a("p",[e._v("For instance, in the accommodation diagram, for each "),a("code",[e._v("Accommodation")]),e._v(" instance, there is exactly one "),a("code",[e._v("LodgingBusiness")]),e._v(" instance accessible through the object property "),a("code",[e._v("schema:containedInPlace")]),e._v(". On the opposite direction, for each "),a("code",[e._v("LodgingBusiness")]),e._v(" instance there are 0 or n instances of "),a("code",[e._v("Accommodation")]),e._v(" that points to it through the object property "),a("code",[e._v("schema:containedInPlace")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v('If the cardinalities are 1 for all the data properties ("attributes"), be ready to sometimes get some empty strings and other incorrect default values (e.g. an altitude of 0 m in South-Tyrol).')]),e._v(" "),a("p",[e._v("These data quality issues are not cleaned at the VKG level on purpose so as to be able to illustrate and report them. Instead they should be cleaned directly at the data source level.")])]),e._v(" "),a("h3",{attrs:{id:"accommodation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accommodation"}},[e._v("#")]),e._v(" Accommodation")]),e._v(" "),a("p",[a("img",{attrs:{src:"diagrams/odh-lodging-business.png",alt:"Accommodation diagram"}})]),e._v(" "),a("h3",{attrs:{id:"food-establishments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#food-establishments"}},[e._v("#")]),e._v(" Food establishments")]),e._v(" "),a("p",[a("img",{attrs:{src:"diagrams/odh-food-establishment.png",alt:"Food establishment diagram"}})]),e._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("p",[a("img",{attrs:{src:"diagrams/odh-event.svg",alt:"Event diagram"}})]),e._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[e._v("#")]),e._v(" Endpoint")]),e._v(" "),a("p",[e._v("The public endpoint of the ODH VKG is found "),a("a",{attrs:{href:"https://sparql.opendatahub.bz.it/portal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"example-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-queries"}},[e._v("#")]),e._v(" Example queries")]),e._v(" "),a("p",[e._v("When navigating to the ODH VKG endpoint, you will notice that the portal contains some example queries. These queries provide an understanding of what data can be retrieved, and how. Let's take a closer look at a couple of them that are relevant to your challenge:")]),e._v(" "),a("h3",{attrs:{id:"regular-queries-nearby-lodgingbusiness-and-foodestablishment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-queries-nearby-lodgingbusiness-and-foodestablishment"}},[e._v("#")]),e._v(" "),a("code",[e._v("Regular Queries / Nearby LodgingBusiness and FoodEstablishment")])]),e._v(" "),a("p",[e._v("This query is a good example of how the location of the user can be utilized to find points of interest near to them.")]),e._v(" "),a("h3",{attrs:{id:"regular-queries-lodging-businesses-in-castelrotto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-queries-lodging-businesses-in-castelrotto"}},[e._v("#")]),e._v(" "),a("code",[e._v("Regular Queries / Lodging businesses in Castelrotto")])]),e._v(" "),a("p",[e._v("Castelrotto is a municipality of South Tyrol that is defined by geographical bounding points. Utilizing user location can serve as a good start to filter and drill down on some data that you can deliver. For more examples on municipalities, please see "),a("code",[e._v("Mobility / Municipality")])]),e._v(" "),a("h3",{attrs:{id:"mobility-observations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobility-observations"}},[e._v("#")]),e._v(" "),a("code",[e._v("Mobility / Observations")])]),e._v(" "),a("p",[e._v("This query shows how sensor data can be accessed.")]),e._v(" "),a("h3",{attrs:{id:"tourism-and-mobility-restaurants-nearby-water-above-18c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tourism-and-mobility-restaurants-nearby-water-above-18c"}},[e._v("#")]),e._v(" "),a("code",[e._v("Tourism and Mobility / Restaurants nearby water above 18c")])]),e._v(" "),a("p",[e._v("This query is a combination of sensor temperature and restaurant location, which can be a guide on how to combine different aspects that can come from the user context.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-your-local-instance-of-the-vkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-local-instance-of-the-vkg"}},[e._v("#")]),e._v(" Setting up your local instance of the VKG")]),e._v(" "),a("p",[e._v("It is possible to have the VKG locally and query directly from your localhost. If this is desired or necessary, please refer to the "),a("a",{attrs:{href:"https://github.com/noi-techpark/it.bz.opendatahub.sparql/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"using-javascript-python-to-query-the-vkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-javascript-python-to-query-the-vkg"}},[e._v("#")]),e._v(" Using javascript/python to query the VKG")]),e._v(" "),a("p",[e._v("While the query playground is a great way to familiarize yourself with SPARQL and what information can be retrieved from ODH, eventually you will want this data available in your app.")]),e._v(" "),a("p",[e._v("For "),a("code",[e._v("javascript")]),e._v(" you can take a look at the "),a("a",{attrs:{href:"https://www.npmjs.com/package/sparql-http-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("sparql-http-client"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For "),a("code",[e._v("python")]),e._v(" "),a("a",{attrs:{href:"https://github.com/eea/sparql-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("sparql-client"),a("OutboundLink")],1),e._v(" is one alternative.")])])}),[],!1,null,null,null);t.default=s.exports}}]);