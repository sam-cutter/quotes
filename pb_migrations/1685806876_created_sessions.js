migrate((db) => {
  const collection = new Collection({
    "id": "qwzlk3pdszmv0h9",
    "created": "2023-06-03 15:41:16.155Z",
    "updated": "2023-06-03 15:41:16.155Z",
    "name": "sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpej53ex",
        "name": "accuracy",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qwzlk3pdszmv0h9");

  return dao.deleteCollection(collection);
})
