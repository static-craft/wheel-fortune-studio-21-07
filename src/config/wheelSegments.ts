import type { WheelSegment } from '../types';

/**
 * Сегменты колеса — заполните под свои услуги.
 * Добавляйте, удаляйте и меняйте объекты в массиве.
 * Все сектора одинакового размера; weight влияет только на шанс выпадения.
 */
export const WHEEL_SEGMENTS: WheelSegment[] = [
  {
    id: 'discount-5',
    label: 'скидка 5%',
    type: 'bonus',
    value: 'скидка 5%',
    description: 'Скидку можно применить на любую услугу. Приятный бонус к любимой процедуре.',
    color: '#c3b2a1',
    weight: 3,
  },
  {
    id: 'discount-10',
    label: 'скидка 10%',
    type: 'bonus',
    value: 'скидка 10%',
    description: 'Скидку можно применить на любую услугу. Отличный повод попробовать что-то новое.',
    color: '#4d372f',
    weight: 1,
  },
  {
    id: 'bonus-depilations',
    label: 'Депиляция',
    type: 'bonus',
    value: 'Антигусар',
    description: 'Депиляция одной зоны (усы, нос, бакенбарда)',
    color: '#6b564b',
    weight: 3,
  },
  {
    id: 'bonus-paraffin-hands',
    label: 'Парафинотерапия',
    type: 'bonus',
    value: 'Парафинотерапия рук',
    description: 'SPA-уход. Глубокое увлажнение, питание и бархатистая кожа.',
    color: '#301812',
    weight: 2.5,
  },
  {
    id: 'bonus-organic-brow',
    label: 'Organic Brow',
    type: 'bonus',
    value: 'Комплексный уход\nOrganic Brow',
    description: 'Глубокий органический уход. Питание, восстановление бровей.',
    color: '#733632',
    weight: 0.5,
  },
];

/** Название салона / мастера — отображается в шапке */
export const SALON_NAME = 'STUDIO 21 | 07';

/** Telegram мастера без @ */
export const MASTER_TELEGRAM = 'diana_kilmamatova';

/** Онлайн-запись DIKIDI */
export const BOOKING_URL = 'https://dikidi.ru/1926460';

/**
 * Ссылка на профиль мастера в MAX (https://max.ru/u/...).
 * Скопируйте из приложения: профиль → QR → Поделиться.
 */
export const MASTER_MAX_URL =
  'https://max.ru/u/f9LHodD0cOIdzv883aRaPvR638Mt_4bjGURt0UF7mhhU7vJF3LycY7Pwucw';

/** Срок действия приза в днях */
export const PRIZE_VALIDITY_DAYS = 30;
