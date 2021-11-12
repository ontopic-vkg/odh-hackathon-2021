# Wikidata

Another source that you can query through SPARQL queries is [Wikidata](https://wikidata.org). It also has a query service similar to the portal pages for ODH, you can find it [here](https://query.wikidata.org). You can take a look at the examples provided, however note that the properties and classes in wikidata follow a particular format which may take some getting used to. If you need some orientation about this you can ask your mentor.

Wikidata has a wealth of information, examples and tutorials, however do not forget that challenge is relying as much as you can on the ODH VKG.

Ideally you would complement data you got from ODH sources with results from wikidata. For example, say you'd like to give the user more information about a random menu item of the destination restaurant the user has inputted. Assuming you retrieve the menu, you'd make a call to one of the items with a wikidata SPARQL query on the wikidata endpoint, and if anything interesting comes up, you'd offer it to the user. In the particular case of foods (https://www.wikidata.org/wiki/Q280354), it is often possible to find an entry to Wikibooks (https://de.wikibooks.org/wiki/Kochbuch/_Semmelkn%C3%B6del).

The programmatic querying can be done using the same tools as with the ODH VKG.
