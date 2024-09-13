# Web osu!mania

Web osu!mania is an unofficial web port of osu!'s piano-style gamemode, osu!mania. Play beatmaps directly in your browser, without the need to download the desktop application.

Game mechanics attempt to match (if not come close to) the official osu!mania's V2 scoring system.

[Visit the site](https://web-osu-mania.vercel.app/)

## Demo

https://github.com/user-attachments/assets/c449893b-ea35-41b7-88c2-63e77d7b0a44

## Credits

- NeriNyan for providing their [beatmap mirror API](https://nerinyan.stoplight.io/docs/nerinyan-api)
- SayoBot for providing their [beatmap mirror API](https://osu.sayobot.cn/home)
- Mino for providing their [beatmap mirror API](https://dev.catboy.best/docs)
- Peppy and the rest of the osu! team for creating [osu!](https://osu.ppy.sh/)

## Development

- Add a `.env` to the project's root:

```
NEXT_PUBLIC_BASE_URL=https://web-osu-mania.vercel.app

# I set this to my CDN in production, but for local dev this is left blank
NEXT_PUBLIC_ASSETS_URL=

# Get these values by following these instructions: https://osu.ppy.sh/docs/index.html#registering-an-oauth-application
OSU_API_CLIENT_ID=
OSU_API_CLIENT_SECRET=
```

- Install NPM packages with `npm install`
- Run with `npm run dev`

## Disclaimer

This project is not affiliated with or endorsed by osu! or its creators. All assets, including images, sounds, and any other copyrighted materials, are the property of their respective owners. The use of these assets in this project is intended for non-commercial, educational, or personal use only.

By using the site, you agree to comply with the terms and conditions set forth by the original content creators.
