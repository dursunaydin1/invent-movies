# Invent Movies

`Invent Movies`, film ve dizi araması yapmanıza olanak tanıyan bir web uygulamasıdır. Bu uygulama, React ve SCSS kullanılarak geliştirilmiştir. Kullanıcılar film ve dizi detaylarını inceleyebilir, farklı kategorilere göre filtreleme yapabilir ve IMDb bilgilerini görebilir.

## Özellikler

- **Film ve Dizi Arama**: Arama çubuğu üzerinden istediğiniz içerikleri arayın.
- **Filtreleme**: Tür (Film, Dizi, Bölüm) ve Yıl seçenekleriyle arama sonuçlarını filtreleyin.
- **Detaylı Bilgiler**: Her bir içeriğin detaylarını görüntüleyin.
- **Responsive Tasarım**: Tüm cihazlara uygun, duyarlı bir kullanıcı arayüzü.

## Kullanılan Teknolojiler

- **React**: Bileşen tabanlı kullanıcı arayüzü geliştirme.
- **SCSS(Sass)**: Hızlı ve modern stil yapısı.
- **React Router**: Sayfa yönlendirmeleri için.
- **Axios**: API istekleri yapmak için.
- **TypeScript**: Tip güvenliği ve kod kalitesini artırmak için.

## Kurulum

1. **Depoyu Klonlayın**:

```bash
git clone https://github.com/dursunaydin1/invent-movies.git
```

2. **Dizine Girin**:

```bash
cd invent-movies
```

3. **Bağımlılıkları Yükleyin**:

```bash
npm install
```

4. **Uygulamayı Çalıştırın**:

```bash
npm start
```

5. **Tarayıcıda Açın**:

Uygulama genellikle [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## API Kullanımı

Uygulama, OMDB API'sini kullanmaktadır. Başlamadan önce bir API anahtarı almanız gerekmektedir:

1. [OMDB API](http://www.omdbapi.com/) adresine gidin.
2. Bir hesap oluşturun ve API anahtarınızı alın.
3. `.env` dosyasına aşağıdaki satırı ekleyin:

```env
REACT_APP_OMDB_API_KEY =your_api_key
```

## Ön İzleme

Uygulamayı canlı olarak görmek için aşağıdaki bağlantıyı kullanabilirsiniz:

[Canlı Ön İzleme (Netlify)](https://invent-movie-app.netlify.app/)

## Uygulama Görseli

![Uygulama Tanıtım Gif'i](/src/assets/screen.gif)
