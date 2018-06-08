[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Image",
        "alias": "media",
        "view": "media",
        "icon": "icon-picture"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt"
    },
    {
        "name": "Headline",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },
    {
        "name": "Quote",
        "alias": "quote",
        "view": "textstring",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
            "markup": "<blockquote>#value#</blockquote>"
        }
    },
    {
        "name": "Block Documents",
        "alias": "docType",
        "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
        "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
        "icon": "icon-item-arrangement",
        "config": {
            "allowedDocTypes": ["Block$"],
            "nameTemplate": "",
            "enablePreview": true,
            "viewPath": "/Views/Partials/Grid/Editors/DocTypeGridEditor/",
            "previewViewPath": "/Views/Partials/Grid/Editors/DocTypeGridEditor/Previews/",
            "previewCssFilePath": "",
            "previewJsFilePath": ""
        }
    },
    {
        "name": "Full Block Documents",
            "alias": "fullDocType",
            "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
            "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
            "icon": "icon-item-arrangement",
            "config": {
            "allowedDocTypes": ["BlockFull$"],
                "nameTemplate": "",
                "enablePreview": true,
                "viewPath": "/Views/Partials/Grid/Editors/DocTypeGridEditor/",
                "previewViewPath": "/Views/Partials/Grid/Editors/DocTypeGridEditor/Previews/",
                "previewCssFilePath": "",
                "previewJsFilePath": ""
        }
    }
]