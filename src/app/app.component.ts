import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  GetStatusDescription=  function GetStatusDescription(statu) {
    switch (statu) {
      case 0:
        return "Onayda";
      case 1:
        return "Yayında";
      case 2:
        return "Hazırlanıyor";
      case 3:
        return "Ödeme";
      case 5:
        return "Onaylandı";
      case 6:
        return "Alınacak";
      case 7:
        return "Alınan";
      default:
        return "Hatalı durum ataması :"+statu;
    }
  };

  GetStatusBackColor= function GetStatusBackColor(statu) {
    switch (statu) {
      case 0:
        return "black";
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "blue";
      case 5:
        return "aqua";
      case 6:
        return "red";
      case 7:
        return "yellow";
      default:
        return "tomato";
    }
  }
  title = 'my-dream-app';
  Claims = [
    {
      id: 2031,
      durum: 10,
      baslik: 'Bursa Sehir Otelleri',
      istek: 'Bursada 2 gün kalmak istiyoruz. Sehir gezisi istiyoruz.',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2020-07-11T21:32:00',
      bildirim: '-404',
      butce: 2000,
      dil: 'TR',
    },
    {
      id: 2032,
      durum: 6,
      baslik: 'Kapadokya Otelleri',
      istek:
        'Kapodokyada 2 kisi tatil istiyoruz.  Balon a binmek istiyoruz.2 tane kedimiz var',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2020-07-11T21:32:00',
      bildirim: '-404',
      butce: 2000,
      dil: 'TR',
    },
    {
      id: 2033,
      durum: 1,
      baslik: 'Babalar Gününe Özel Firsat Otelleri ',
      istek: 'istanbulda 2 kisi kalacak otel istiyoruz.vip araç kiralayacagiz',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2020-07-11T21:35:00',
      bildirim: '-404',
      butce: 1000,
      dil: 'TR',
    },
    {
      id: 2034,
      durum: 1,
      baslik: 'erew',
      istek: 'rersdfsdf',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2020-07-24T21:26:00',
      bildirim: '-100',
      butce: 0,
      dil: 'TR',
    },
    {
      id: 2035,
      durum: 1,
      baslik: 'Onaylandı',
      istek: 'Beşiktaş otellerinde konaklamak istiyoruz.',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 1,
      tarih: '2020-08-07T10:02:00',
      bildirim: '-404',
      butce: 800,
      dil: 'TR',
    },
    {
      id: 2036,
      durum: 0,
      baslik: 'sdfs',
      istek: 'dfsdf',
      UserId: 'asdas',
      parabirimi: 0,
      tarih: null,
      bildirim: '1',
      butce: 234,
      dil: 'tr',
    },
    {
      id: 2037,
      durum: 0,
      baslik: 'başlık',
      istek: 'açıklama',
      UserId: 'asdas',
      parabirimi: 0,
      tarih: null,
      bildirim: '1',
      butce: 1000,
      dil: 'tr',
    },
    {
      id: 2038,
      durum: 0,
      baslik: 'başlık',
      istek: 'açıklama',
      UserId: null,
      parabirimi: 0,
      tarih: '2021-02-17T00:54:00',
      bildirim: '1',
      butce: 1000,
      dil: 'tr',
    },
    {
      id: 2039,
      durum: 0,
      baslik: 'sdf',
      istek: 'sdfsdf',
      UserId: null,
      parabirimi: 0,
      tarih: '2021-02-17T01:16:00',
      bildirim: '1',
      butce: 2343,
      dil: 'tr',
    },
    {
      id: 2040,
      durum: 0,
      baslik: 'deneme başlık',
      istek: 'açıklama deneme',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 1,
      tarih: '2021-02-17T01:17:00',
      bildirim: '-404',
      butce: 2500,
      dil: 'tr',
    },
    {
      id: 2041,
      durum: 0,
      baslik: 'deneme',
      istek: 'asdas',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2021-02-20T04:20:00',
      bildirim: '-404',
      butce: 1231,
      dil: null,
    },
    {
      id: 2042,
      durum: 0,
      baslik: 'sdasd',
      istek: 'sadasd',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2021-02-20T04:23:00',
      bildirim: '-404',
      butce: 324,
      dil: null,
    },
    {
      id: 2043,
      durum: 0,
      baslik: 'deneme',
      istek: 'sddsfds',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2021-02-20T04:33:00',
      bildirim: '-404',
      butce: 2343,
      dil: null,
    },
    {
      id: 2044,
      durum: 1,
      baslik: 'Asteria Otelleri',
      istek: 'Djdjdkedks',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2021-02-28T13:54:00',
      bildirim: '-404',
      butce: 2000,
      dil: 'TR',
    },
    {
      id: 2045,
      durum: 1,
      baslik: 'Selam otel ',
      istek: 'Selam dedik ',
      UserId: 'f332d510-5b85-41d1-8f74-8d52f01da7de',
      parabirimi: 0,
      tarih: '2021-02-28T14:11:00',
      bildirim: '-100',
      butce: 1000,
      dil: 'TR',
    },
  ];
}
