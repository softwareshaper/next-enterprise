import "styles/tailwind.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bienvenue chez software shaper",
  viewport: "initial-scale=1, width=device-width"
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <>
        <Analytics />
        <SpeedInsights />
      </>
      <body>
        {children}
      </body>
    </html>
  )
}
