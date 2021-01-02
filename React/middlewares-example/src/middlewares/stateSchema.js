const stateSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "comments": [
                "comment 1",
                "comment2"
            ],
            "isLoggedIn": false
        }
    ],
    "required": [
        "comments",
        "isLoggedIn"
    ],
    "properties": {
        "comments": {
            "$id": "#/properties/comments",
            "type": "array",
            "title": "The comments schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    "comment 1",
                    "comment2"
                ]
            ],
            "additionalItems": true,
            "items": {
                "$id": "#/properties/comments/items",
                "anyOf": [
                    {
                        "$id": "#/properties/comments/items/anyOf/0",
                        "type": "string",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "comment 1",
                            "comment2"
                        ]
                    }
                ]
            }
        },
        "isLoggedIn": {
            "$id": "#/properties/isLoggedIn",
            "type": "boolean",
            "title": "The isLoggedIn schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                false
            ]
        }
    },
    "additionalProperties": true
};

export default stateSchema;