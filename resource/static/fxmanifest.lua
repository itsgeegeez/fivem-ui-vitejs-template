fx_version("cerulean")
game("gta5")

name("FiveM Vite TS UI Template")
description("A FiveM Vite TS UI Template")
author("zeeGeeG#2776")

client_scripts({
	"build/client.js",
})

server_scripts({
	"build/server.js",
})

ui_page("build/web/index.html")

files({
	"build/web/index.html",
    "build/web/index.css",
    "build/web/index.js",
    "build/web/**/*",
})
