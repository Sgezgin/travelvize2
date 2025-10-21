# TravelVize Admin Panel Kullanım Kılavuzu

## Giriş Bilgileri
- **Kullanıcı Adı:** admin
- **Şifre:** password

## Yönetim Paneline Erişim
1. Tarayıcınızda `http://localhost:3000/admin` adresine gidin (geliştirme ortamı)
2. Veya production ortamında `https://your-domain.com/admin` adresine gidin
3. Giriş yapın

## Ülke İçeriklerini Düzenleme
1. Yönetim paneline giriş yaptıktan sonra sol tarafta ülkelerin listesini göreceksiniz
2. Düzenlemek istediğiniz ülkeye tıklayın
3. Sağ tarafta o ülkeye ait markdown içeriğini göreceksiniz
4. İçeriği düzenleyin
5. "Kaydet" butonuna tıklayın

## Markdown Formatı
İçerikleri düzenlerken aşağıdaki markdown formatını kullanabilirsiniz:

### Başlıklar
```markdown
# Ana Başlık (Sayfa başlığı - genellikle kullanılmaz)
## Bölüm Başlığı
### Alt Bölüm Başlığı
```

### Listeler
```markdown
- Liste öğesi 1
- Liste öğesi 2
- **Kalın yazı**: Açıklama
```

### Paragraflar
Normal metin olarak yazılabilir. Boş satır bırakarak yeni paragrafa geçebilirsiniz.

## Deploy İşlemi
Bu proje GitHub Actions kullanarak otomatik deploy edilmektedir:

1. `main` branch'ine yapılan her push işlemi otomatik olarak deploy edilir
2. Manuel deploy için GitHub Actions sekmesinden "Deploy to Vercel" workflow'unu çalıştırabilirsiniz

## Vercel Ayarları
Deploy işlemi için aşağıdaki secret'ların GitHub repository'sinde tanımlanması gerekir:

1. `VERCEL_TOKEN` - Vercel access token
2. `VERCEL_ORG_ID` - Vercel organization ID
3. `VERCEL_PROJECT_ID` - Vercel project ID

Bu ayarlar Vercel dashboard üzerinden alınabilir.