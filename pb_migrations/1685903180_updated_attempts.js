migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // remove
  collection.schema.removeField("ijo97htz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q5ket78o",
    "name": "correct",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5wi7lky",
    "name": "validated",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijo97htz",
    "name": "accuracy",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  // remove
  collection.schema.removeField("q5ket78o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5wi7lky",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
