export default function Head() {
    return (
      <>
        <title>LOGWEAR Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="description" content="Emergency and safety assistant for forestry professionals" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script src="/register-sw.js" defer></script>
      </>
    );
  }