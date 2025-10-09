export function Footer() {
  return (
    <footer className="py-8 px-6 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Daniel Balverde. Built with React &
          Tailwind CSS.
        </p>
        <p className="mt-2">Made with ❤️ and lots of coffee ☕</p>
      </div>
    </footer>
  );
}
