migrate((db) => {
  const collection = new Collection({
    "id": "8c01kntm1ai67hn",
    "created": "2023-06-03 15:08:35.791Z",
    "updated": "2023-06-03 15:08:35.791Z",
    "name": "poems",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v7nv0afp",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kvlhcxc4",
        "name": "author",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8c01kntm1ai67hn");

  return dao.deleteCollection(collection);
})
