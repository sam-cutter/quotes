migrate((db) => {
  const collection = new Collection({
    "id": "ytfkseh9ooi93se",
    "created": "2023-06-03 15:09:03.550Z",
    "updated": "2023-06-03 15:09:03.550Z",
    "name": "quotes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ytfkseh9ooi93se");

  return dao.deleteCollection(collection);
})
