migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se")

  collection.listRule = ""
  collection.viewRule = ""

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3dfwfxy",
    "name": "accuracy",
    "type": "number",
    "required": false,
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

  collection.listRule = null
  collection.viewRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n3dfwfxy",
    "name": "mastery",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1
    }
  }))

  return dao.saveCollection(collection)
})
