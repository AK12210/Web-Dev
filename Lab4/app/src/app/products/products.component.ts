import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [CommonModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
      name: 'BT SPEAKER ZQS-4239',
      description: 'Start the day with a bang',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h8f/80794403635230.jpg?format=gallery-medium',
      name: 'AAA Duracell batteries 12 pcs',
      description: 'Batteries that last',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/batareika-aaa-duracell-12-sht-110389394/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      name: 'Apple AirPods 4 White',
      description: 'Wireless headphones with active noise cancellation',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-4-belyi-124333372/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      name: 'Yandex Midi',
      description: 'Compact smart speaker with voice assistant “Alice”',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h18/63780476616734.jpg?format=gallery-medium',
      name: 'Sony Dualshock 4 v2',
      description: 'Play in a new way with the built-in accelerometer and gyroscope',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sony-dualshock-4-v2-chernyi-13000002/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h80/64424720236574.jpg?format=gallery-medium',
      name: 'AAA VARTA 4 pcs',
      description: 'Varta Longlife Power for every day use',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/batareika-aaa-varta-4-sht-106821862/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/pb3/7469583.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi Buds 6 Active Black',
      description: 'Forget about wires and lost connections!',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-6-active-chernyi-119799369/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h71/63867993423902.jpg?format=gallery-medium',
      name: 'Ring Fill Light ZD666',
      description: 'LED ring light for photo and video shooting',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/ring-fill-light-zd666-100129346/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h75/86812056846366.png?format=gallery-medium',
      name: 'Fujifilm Instax Mini 20 pcs',
      description: 'Instax mini film designed for Fujifilm instant cameras',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-20-sht-105248732/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/haa/81070058733598.jpg?format=gallery-medium',
      name: 'Tripod P185',
      description: 'The tripod has a floor-standing design and a height of up to 180 cm',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/tripod-p185-110663572/?c=750000000'
    },
  ];

  shareInWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/`);
  }

  shareInTelegram(link: string) {
    window.open(`https://telegram.org/`);
  }
}
