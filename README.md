
# LOTUS web 

Natural Products Online is an open source project for Natural Products (NPs) storage, search and analysis. 
This repository contains code for LOTUS, one of the biggest and best annotated resources for NPs occurrences available free of charge and without any restriction. 
LOTUS is a living database which is hosted in parallel at Wikidata and here. 
The Wikidata version allows for community curation and addition of novel data. 
The current version allows a more user friendly experience (such as structural search, taxonomy oriented query, flat table and structures exports).

Prior to any further action, a target folder needs to be generated, with the following command:

```
mvn package
```

To fire up a local version of it, you need to have Docker installed.

```
docker-compose build
docker-compose up -d
```

```
docker exec -it npoc-mongo-db bash
```

```
mongo --port 27019
```

```
use NPOC2021
db.dropDatabase()
exit
```

You then need to download the latest version of LOTUS (available at https://lotus.naturalproducts.net/download), and unzip it

```
curl https://lotus.naturalproducts.net/download/mongo -o mongodata/LOTUSlatest.zip
unzip mongodata/LOTUSlatest.zip -d mongodata/ 
```

```
cd mongodata/NPOC2021/NPOC2021/
mongorestore --port 27019 --db=NPOC2021 --noIndexRestore .
```

```
mongo --port 27019
```

```
use NPOC2021
```

```
db.lotusUniqueNaturalProduct.createIndex( {lotus_id:1})
db.lotusUniqueNaturalProduct.createIndex( {inchi:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchikey:1})
db.lotusUniqueNaturalProduct.createIndex( {smiles: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchi2D:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchikey2D:1})
db.lotusUniqueNaturalProduct.createIndex( {smiles2D: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( {molecular_formula:1})
db.lotusUniqueNaturalProduct.createIndex( {fragmentsWithSugar:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {fragments:"hashed"})

db.lotusUniqueNaturalProduct.createIndex( {molecular_weight:1})
db.lotusUniqueNaturalProduct.createIndex( {fsp3:1})
db.lotusUniqueNaturalProduct.createIndex( {lipinskiRuleOf5Failures:1})
db.lotusUniqueNaturalProduct.createIndex( {heavy_atom_number:1})



db.runCommand(
  {
    createIndexes: 'lotusUniqueNaturalProduct',
    indexes: [
        {
            key: {
                iupac_name:"text", traditional_name:"text", allTaxa:"text", allChemClassifications:"text", allWikidataIds:"text"
            },
            name: "superTextIndex",
	    weights: { traditional_name:10, allTaxa:5  }
        }

    ]
  }
)




db.lotusUniqueNaturalProduct.createIndex( {npl_score:1})

db.lotusUniqueNaturalProduct.createIndex( { pubchemBits : "hashed" } )


db.lotusUniqueNaturalProduct.createIndex( {deep_smiles: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( { "pfCounts.bits" :1} )
db.lotusUniqueNaturalProduct.createIndex( { "pfCounts.count" : 1 })

exit
exit
```

```
docker-compose up -d --no-deps --build lotus-online
```
