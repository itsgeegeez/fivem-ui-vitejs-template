# **FiveM UI Template** <img src="https://img.shields.io/github/repo-size/itsGeeGeez/fivem-ui-vitejs-template" /> <img src="https://img.shields.io/github/stars/itsgeegeez/fivem-ui-vitejs-template" /> <img src="https://img.shields.io/github/forks/itsgeegeez/fivem-ui-vitejs-template"/>

An easy-to-use template for developers to build their own UIs for FiveM or RedM.

# **Donate**
##### Support this project by ⭐️ starring and sharing it. [Follow me](https://github.com/itsGeeGeez) to get the latest updates from me! Please consider donating for more content like this!
<div style="display: flex; gap:12px; margin: 8px 0 0 0; justify-content: center; align-items:center;">
<a href="https://www.youtube.com/channel/UCZzDK-7I6nFLMG3cMEHoHyA">
<img src="https://img.shields.io/badge/-Youtube-FF0000?logo=Youtube" />
</a>
<div>
<img src="https://img.shields.io/badge/Discord-zeeGeeG%232776-grey?labelColor=5865F2&logo=youtube" />
<a href="">
</div>
<img src="https://img.shields.io/badge/Github-181717?logo=Github" />
</a>
<a href="">
<img src="https://img.shields.io/badge/Twitter-white?logo=Twitter" />
</a>
<a href="paypal.me/itsgeegeez">
<img src="https://img.shields.io/badge/Donate-00457C?logo=Paypal" />
</a>
</div>


#

## 🚀 **Features:**

- **Typescript support**
  - Write your code in typescript and get all the benefits of typescript
  - Declare all your types in the types folder for ease of debugging and import them anywhere with the alias `@types`
  - Use the `@types` alias to import your types from the index.d.ts file in the types folder
- **Esbuild support (for backend)**
  - Use esbuild to bundle your code and get the benefits of tree shaking
  - Enjoy blazing fast build times
  - Hot reload support via `pnpm watch`
- **Tailwindcss support**
  - Use tailwindcss to write your css
  - Get all the benefits of tailwindcss
- **ViteJS support (for frontend)**
  - Use vitejs to serve your code and get the benefits of vitejs
  - Hot reload support via `pnpm watch`
  - Enjoy blazing fast build times
- **Static/public folder**
  - Use the `static` or `public` folder to serve static files which will be copied to the build folder
  - Upload images, fonts, etc. to the `public` folder and use them in your code as such: `'/image.png'`
- **Monorepo setup**
  - This project is setup as a monorepo fashion so you can just run `pnpm -parallel build` to build both the web and resource folder into the build directory
- **Plug and play**
  - Easily add your own code to the project and run any of the scripts to compile your code:
    - `pnpm build` - Build the project
    - `pnpm watch` - Watch the project for changes and build on change
    - `pnpm dev` - Run the project in development mode on the browser (frontend only)
