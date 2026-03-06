/* Virtual Planet - Custom Styles */

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background-color: hsl(210 100% 45% / 0.3);
  color: white;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0f;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #0066CC, #4D9FFF);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #4D9FFF, #0066CC);
}

/* Focus styles */
*:focus-visible {
  outline: 2px solid hsl(210 100% 45%);
  outline-offset: 2px;
}

/* Video background optimization */
video {
  object-fit: cover;
}

/* Prevent text selection on interactive elements */
button,
a {
  -webkit-user-select: none;
  user-select: none;
}

/* Attention-grabbing button animations */
@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes gradient-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

.animate-gradient-rotate {
  animation: gradient-rotate 3s linear infinite;
}

.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 1.5s ease-in-out infinite;
}

/* Pulse glow effect for primary button */
.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(77, 159, 255, 0.4),
                0 0 40px rgba(77, 159, 255, 0.2),
                0 0 60px rgba(77, 159, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(77, 159, 255, 0.6),
                0 0 60px rgba(77, 159, 255, 0.4),
                0 0 90px rgba(77, 159, 255, 0.2);
  }
}
