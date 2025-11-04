import type { RodapeData } from "@/lib/data";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const Footer = ({ data }: { data: RodapeData }) => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12 text-center space-y-8">
        <div className="max-w-3xl mx-auto p-6 border border-yellow-400/50 bg-yellow-400/10 rounded-lg">
            <ShieldCheck className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-foreground">Aviso Importante</h3>
            <p className="text-sm mt-2">{data.aviso_legal}</p>
        </div>
        <div className="text-sm space-y-2">
            <p>{data.copyright}</p>
            <div className="flex justify-center gap-4">
                <Link href={data.url_termos} className="hover:text-primary transition-colors">Termos de Uso</Link>
                <span>|</span>
                <Link href={data.url_privacidade} className="hover:text-primary transition-colors">Política de Privacidade</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
