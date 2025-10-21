import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminDocs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Yönetim Paneline Dön
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Yönetim Paneli Kullanım Kılavuzu</h1>
          <p className="text-gray-600">TravelVize admin panelinin nasıl kullanılacağına dair bilgiler</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Giriş Bilgileri</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <span className="font-semibold">Kullanıcı Adı:</span> admin
              </p>
              <p className="text-blue-800">
                <span className="font-semibold">Şifre:</span> password
              </p>
            </div>
            <p className="mt-3 text-gray-700">
              İlk girişten sonra şifrenizi değiştirmeniz önerilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ülke İçeriklerini Düzenleme</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Yönetim paneline giriş yaptıktan sonra sol tarafta ülkelerin listesini göreceksiniz</li>
              <li>Düzenlemek istediğiniz ülkeye tıklayın</li>
              <li>Sağ tarafta o ülkeye ait markdown içeriğini göreceksiniz</li>
              <li>İçeriği düzenleyin</li>
              <li>"Kaydet" butonuna tıklayın</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Markdown Formatı</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Başlıklar</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm">
{`# Ana Başlık (Sayfa başlığı - genellikle kullanılmaz)
## Bölüm Başlığı
### Alt Bölüm Başlığı`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Listeler</h3>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm">
{`- Liste öğesi 1
- Liste öğesi 2
- **Kalın yazı**: Açıklama`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Paragraflar</h3>
                <p className="text-gray-700">
                  Normal metin olarak yazılabilir. Boş satır bırakarak yeni paragrafa geçebilirsiniz.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deploy İşlemi</h2>
            <p className="text-gray-700 mb-3">
              Bu proje GitHub Actions kullanarak otomatik deploy edilmektedir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">main</code> branch'ine yapılan her push işlemi otomatik olarak deploy edilir</li>
              <li>Manuel deploy için GitHub Actions sekmesinden "Deploy to Vercel" workflow'unu çalıştırabilirsiniz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vercel Ayarları</h2>
            <p className="text-gray-700 mb-3">
              Deploy işlemi için aşağıdaki secret'ların GitHub repository'sinde tanımlanması gerekir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">VERCEL_TOKEN</code> - Vercel access token</li>
              <li><code className="bg-gray-100 px-1 rounded">VERCEL_ORG_ID</code> - Vercel organization ID</li>
              <li><code className="bg-gray-100 px-1 rounded">VERCEL_PROJECT_ID</code> - Vercel project ID</li>
            </ul>
            <p className="mt-3 text-gray-700">
              Bu ayarlar Vercel dashboard üzerinden alınabilir.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}