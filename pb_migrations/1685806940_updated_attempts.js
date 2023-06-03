migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jue3wslc",
    "name": "session",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "qwzlk3pdszmv0h9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu")

  // remove
  collection.schema.removeField("jue3wslc")

  return dao.saveCollection(collection)
})
