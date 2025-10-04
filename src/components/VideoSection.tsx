export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <div className="aspect-video">
              <iframe 
                src="https://player.vimeo.com/video/901907244?autoplay=1&muted=1&background=1" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
