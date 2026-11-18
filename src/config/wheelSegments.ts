import type { WheelSegment } from '../types';

/**
 * Сегменты колеса — заполните под свои услуги.
 * Добавляйте, удаляйте и меняйте объекты в массиве.
 * Все сектора одинакового размера; weight влияет только на шанс выпадения.
 */
export const WHEEL_SEGMENTS: WheelSegment[] = [
  {
    id: 'discount-5',
    label: '−5%',
    type: 'discount',
    value: 5,
    description: 'Скидка 5% на любую услугу. Приятный бонус к любимой процедуре.',
    color: '#c3b2a1',
    weight: 3,
  },
  {
    id: 'discount-10',
    label: '−10%',
    type: 'discount',
    value: 10,
    description: 'Скидка 10% на любую услугу. Отличный повод попробовать что-то новое.',
    color: '#4d372f',
    weight: 1,
  },
  {
    id: 'bonus-depilations',
    label: 'Депиляция',
    type: 'bonus',
    value: 'Депиляция одной зоны',
    description: 'Идеальная форма бровей — наш комплимент. Приходите на коррекцию в подарок.',
    color: '#6b564b',
    weight: 3,
  },
  {
    id: 'bonus-paraffin-hands',
    label: 'Парафинотерапия рук',
    type: 'bonus',
    value: 'Парафинотерапия рук',
    description: 'SPA-уход в подарок: парафинотерапия для рук. Глубокое увлажнение, питание и бархатистая кожа.',
    color: '#301812',
    weight: 2.5,
  },
  {
    id: 'bonus-organic-brow',
    label: 'Organic Brow',
    type: 'bonus',
    value: 'Уход Organic Brow',
    description: 'Комплексный уход Organic Brow в подарок. Питание, восстановление бровей.',
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
