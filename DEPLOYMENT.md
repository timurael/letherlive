# Deployment Guide - Let Her Live

## 🚀 Quick Deploy to Netlify

### Option 1: Manual Deploy
1. Build the project: `npm run build`
2. Drag the `.next` folder to Netlify Deploy dashboard
3. Configure environment variables in Netlify dashboard

### Option 2: Git-based Deploy (Recommended)
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install plugins: `@netlify/plugin-nextjs`

### Environment Variables (Optional)
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.netlify.app
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.netlify.app
NEXT_PUBLIC_GOFUNDME_URL=https://gofundme.com/your-campaign
NEXT_PUBLIC_PAYPAL_URL=https://paypal.me/your-handle
NEXT_PUBLIC_DONATION_GOAL=10000
```

## ✅ Post-Deployment Checklist

- [ ] Test all language versions (TR, EN, DE)
- [ ] Verify donation links work
- [ ] Check mobile responsiveness
- [ ] Test navigation and animations
- [ ] Confirm SEO meta tags are working
- [ ] Enable HTTPS (auto with Netlify)
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (Plausible recommended)

## 🔧 Custom Domain Setup

1. In Netlify dashboard: Site settings → Domain management
2. Add custom domain
3. Configure DNS with your domain provider
4. SSL certificate will be automatically generated

## 📊 Analytics Setup

### Plausible Analytics (Privacy-first, recommended)
1. Create account at plausible.io
2. Add your domain
3. Add environment variable: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
4. Plausible script will auto-load

## 🐛 Troubleshooting

### Build Fails
- Check all imports are correct
- Verify all dependencies are installed
- Ensure TypeScript types are correct

### i18n Issues
- Verify all translation keys exist in all language files
- Check locale routing configuration
- Ensure middleware is properly configured

### Images Not Loading
- Verify images are in the `public` directory
- Check image paths are correct
- Ensure proper Next.js Image optimization

## 🔄 Updates & Maintenance

### Content Updates
- Edit translation files in `/messages/`
- Update donation goals in components
- Add new updates to the updates page

### Technical Updates
- Keep dependencies updated: `npm update`
- Monitor security advisories
- Test builds regularly

---

**The website is now ready for deployment and will help support Cemre's urgent needs.** 🏳️‍⚧️