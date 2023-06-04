migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // remove
  collection.schema.removeField("t5wi7lky")

  return dao.saveCollection(collection)
})
