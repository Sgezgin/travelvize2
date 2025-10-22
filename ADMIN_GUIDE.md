# Admin Panel Guide

## Accessing the Admin Panel

1. Navigate to `/admin` on your website
2. Login with the following credentials:
   - Username: `admin`
   - Password: `password`

## Editing Country Content

1. Select a country from the list
2. Edit the markdown content in the editor
3. Click "Save" to update the content

## Content Management Workflow

### For Local Development
- Changes are saved directly to markdown files
- Content updates are immediately visible

### For Production (Vercel Deployment)
**Important**: Due to Vercel's immutable filesystem, direct file modifications won't persist between deployments.

To update content in production:
1. Make changes using the admin panel on your local development environment
2. Commit the updated markdown files to your GitHub repository
3. GitHub Actions will automatically deploy the changes to Vercel

## Best Practices

1. Always test content changes locally before committing to production
2. Keep regular backups of your markdown files
3. Use version control (Git) to track content changes
4. For team collaboration, consider using a headless CMS for more robust content management

## Troubleshooting

### Admin Panel Not Working
- Ensure you're using the correct login credentials
- Check browser console for any JavaScript errors
- Verify that cookies are enabled in your browser

### Content Not Updating on Vercel
- Remember that changes made on Vercel won't persist
- Always make content changes locally and commit to GitHub
- Check GitHub Actions workflow for deployment status