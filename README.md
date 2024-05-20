
# Transcribe App

Transcribe App is a powerful audio transcription tool that delivers accurate and reliable transcripts in minutes.

## Demo

![Demo](https://transcribe-app-next.vercel.app/desktop.webp)


## Features

- Light/dark mode toggle
- Transcriptions in english
- Cross platform
- Transcription management
- Authentication


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### SERVICES CREDENTIALS
`ASSEMBLYAI_API_KEY`

#### STORAGE CREDENTIALS
`MONGO_URI`

`STORAGE_BUCKET_REGION`
`STORAGE_ACCESS_KEY`
`STORAGE_SECRET_KEY`
`STORAGE_BUCKET_NAME`

`NEXT_PUBLIC_AWS_CLOUTFRONT_URL`

#### AUTH CREDENTIALS
`CLERK_SECRET_KEY`
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`NEXT_PUBLIC_CLERK_SIGN_IN_URL`
`NEXT_PUBLIC_CLERK_SIGN_UP_URL`
`NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL`
`NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL`

## Scripts

to set up the development server

```bash
  bun run dev
```


## Tech Stack

**Client:** Typescript, TailwindCSS, Shadcn/ui

**Server:** Typescript, Server actions, AWS, MongoDB, Assmblyai

**Both:** Next, Bun, Clerk

## Roadmap

- Additional multiple languages support

- Integration of streaming functionality


## Authors

- [@developaul](https://www.github.com/developaul)

