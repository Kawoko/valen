# Valentine's Day Website 💝

A beautiful, interactive Valentine's Day website with smooth animations and a special message.

## Features

- ✨ Modern, gradient background with floating hearts
- 💖 Interactive "Yes" and "No" buttons
- 🎯 "No" button flies to random positions (3 times) then disappears
- 🎬 Custom video playback after "Yes" is clicked
- 💌 Personal message reveal

## Setup

1. **Add your video**: Place your MP4 video file in the `public` folder and name it `valentine.mp4`
   
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to see your website.

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)

### Option 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

## Customize

- **Message**: Edit the message text in `src/app/page.tsx` (line ~180)
- **Colors**: Adjust the gradient colors in the className (line ~50)
- **Video**: Replace `/valentine.mp4` in the public folder
- **Animations**: Modify `src/app/globals.css` for custom animations

## How It Works

1. User sees the "Will you be my Valentine?" question
2. If they click "No":
   - First click: Button flies to random position
   - Second click: Flies again
   - Third click: Flies one more time
   - Fourth click: Disappears with fade animation
3. If they click "Yes":
   - Buttons fade out
   - Video appears and plays
   - Special message is displayed

## Technologies

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Vercel** - Hosting (free)

Enjoy your Valentine's Day! 💕
