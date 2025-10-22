# TravelVize2

A travel visa information website built with Next.js App Router.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is configured for deployment on Vercel. The deployment workflow is automated via GitHub Actions.

### Admin Panel on Vercel

**Important**: The admin panel allows content editing, but due to Vercel's immutable filesystem, direct file modifications won't persist between deployments. 

For production content management:
1. Use the admin panel locally to make changes
2. Commit the updated markdown files to GitHub
3. Let GitHub Actions automatically deploy the changes to Vercel

### Content Management Workflow

1. **Local Development**:
   - Run `npm run dev`
   - Use admin panel at http://localhost:3000/admin to edit content
   - Changes are saved directly to markdown files

2. **Production Deployment**:
   - Commit changes to GitHub
   - GitHub Actions automatically deploys to Vercel
   - Content is read from markdown files at deployment time

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.