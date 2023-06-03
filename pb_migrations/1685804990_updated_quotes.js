migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se")

  // remove
  collection.schema.removeField("n3dfwfxy")

  return dao.saveCollection(collection)
})
