import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/travel.png"
              alt="TravelVize Logo"
              width={150}
              height={40}
              className="h-54 w-auto mb-4 filter brightness-0 invert"
            />
            {/* <p className="text-gray-400 mb-4">
              Profesyonel vize danışmanlık hizmetleri ile dünya kaplarına ulaşın.
            </p> */}
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Schengen Vizesi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Amerika Vizesi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İngiltere Vizesi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kanada Vizesi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#iletisim" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-gray-400">
              <p>0212 225 97 00</p>
              <p>info@travelvize.com</p>
              <p>ERGENEKON MAH. HALASKARGAZİ CAD NO : 13/1 </p>
              <p>Şişli/İstanbul</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TravelVize Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}