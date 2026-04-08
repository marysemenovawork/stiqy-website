export function Footer() {
  return (
    <footer className="py-10 border-t border-orange-100 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)' }}>
          STIQY
        </span>
        <p className="text-sm text-muted-foreground">
          &copy; 2025 STIQY. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
