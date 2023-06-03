migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzlk3pdszmv0h9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dj7s8o7w",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzlk3pdszmv0h9")

  // remove
  collection.schema.removeField("dj7s8o7w")

  return dao.saveCollection(collection)
})
