migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crsx0tdu",
    "name": "poem",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "8c01kntm1ai67hn",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xjemntxo",
    "name": "quote",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3dfwfxy",
    "name": "mastery",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crsx0tdu",
    "name": "poem",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8c01kntm1ai67hn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xjemntxo",
    "name": "quote",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3dfwfxy",
    "name": "mastery",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
