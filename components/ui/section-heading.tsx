import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  children?: ReactNode
}

export default function SectionHeading({ title, subtitle, align = "center", children }: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-12 ${alignClass[align]}`}>
      <div className="inline-block">
        {children && <div className="mb-4">{children}</div>}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
          {title}
          <span className="absolute -bottom-3 left-0 w-16 h-1 bg-kanoe-green-dark"></span>
        </h2>
      </div>
      {subtitle && <p className="text-gray-400 max-w-3xl mx-auto mt-6">{subtitle}</p>}
    </div>
  )
}

