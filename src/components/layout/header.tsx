import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Header = () => {
  const logo = PlaceHolderImages.find(p => p.id === 'nail_design_logo');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-center sm:justify-start">
        {logo && (
          <Image
            src={logo.imageUrl}
            alt={logo.description}
            width={180}
            height={45}
            priority
            data-ai-hint={logo.imageHint}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
