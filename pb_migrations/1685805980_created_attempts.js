migrate((db) => {
  const collection = new Collection({
    "id": "95l1tjbmtdpxmlu",
    "created": "2023-06-03 15:26:20.266Z",
    "updated": "2023-06-03 15:26:20.266Z",
    "name": "attempts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dlmocmrh",
        "name": "quote",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "ytfkseh9ooi93se",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3p3oxxbx",
        "name": "attempt",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ijo97htz",
        "name": "accuracy",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("95l1tjbmtdpxmlu");

  return dao.deleteCollection(collection);
})
