@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 25% 4%;
    --foreground: 0 0% 98%;
    --card: 220 20% 8%;
    --card-foreground: 0 0% 98%;
    --popover: 220 20% 8%;
    --popover-foreground: 0 0% 98%;
    --primary: 210 100% 45%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 15% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 220 15% 20%;
    --muted-foreground: 220 10% 60%;
    --accent: 35 100% 55%;
    --accent-foreground: 220 25% 4%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 15% 20%;
    --input: 220 15% 20%;
    --ring: 210 100% 45%;
    --radius: 0.625rem;
    --sidebar-background: 220 20% 6%;
    --sidebar-foreground: 0 0% 98%;
    --sidebar-primary: 210 100% 45%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 15% 15%;
    --sidebar-accent-foreground: 0 0% 98%;
    --sidebar-border: 220 15% 20%;
    --sidebar-ring: 210 100% 45%;
    
    /* Custom brand colors */
    --vp-blue: 210 100% 45%;
    --vp-blue-light: 210 100% 65%;
    --vp-blue-dark: 210 100% 25%;
    --vp-gold: 35 100% 55%;
    --vp-space: 220 25% 4%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, hsl(var(--vp-blue-light)) 0%, hsl(var(--vp-blue)) 50%, hsl(var(--vp-gold)) 100%);
  }
  
  .glass-effect {
    @apply backdrop-blur-xl bg-white/5 border border-white/10;
  }
  
  .glow-blue {
    box-shadow: 0 0 40px hsl(var(--vp-blue) / 0.3);
  }
  
  .glow-gold {
    box-shadow: 0 0 40px hsl(var(--vp-gold) / 0.3);
  }
}
