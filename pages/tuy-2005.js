import Link from "next/link";

import styles from './tuy-2005.module.css'

let data = [
  {
    participant_ru: "Туфанов Игорь",
    participant_en: "Tufanov Igor",
    country: "Владивосток",
    problems1: [79, 10, 100],
    problems2: [100, 100, 100],
    place: "1",
  },
  {
    participant_ru: "Буруиана Филип",
    participant_en: "Buruiana Filip",
    country: "Румыния",
    problems1: [100, 30, 100],
    problems2: [100, 100, 40],
    place: "2",
  },
  {
    participant_ru: "Гладченко Максим",
    participant_en: "Gladchenko Maxim",
    country: "Казахстан",
    problems1: [79, 10, 90],
    problems2: [82, 100, 60],
    place: "3",
  },
  {
    participant_ru: "Стансиу Валентин",
    participant_en: "Stanciu Valentin",
    country: "Румыния",
    problems1: [54, 0, 100],
    problems2: [100, 95, 50],
    place: "4",
  },
  {
    participant_ru: "Садыков Жомарт",
    participant_en: "Sadykov Zhomart",
    country: "Казахстан",
    problems1: [87, 10, 30],
    problems2: [86, 100, 80],
    place: "5",
  },
  {
    participant_ru: "Гренкин Глеб",
    participant_en: "Grenkin Gleb",
    country: "Владивосток",
    problems1: [79, 20, 100],
    problems2: [82, 30, 40],
    place: "6",
  },
  {
    participant_ru: "Минюк Антон",
    participant_en: "Minyuk Anton",
    country: "Якутск",
    problems1: [69, 5, 29],
    problems2: [93, 5, 85],
    place: "7",
  },
  {
    participant_ru: "Жуплев Антон",
    participant_en: "Juplev Anton",
    country: "Владивосток",
    problems1: [67, 25, 0],
    problems2: [53, 100, 40],
    place: "8",
  },
  {
    participant_ru: "Старостин Петр",
    participant_en: "Starostin Petr",
    country: "РС(Я)",
    problems1: [86, 10, 40],
    problems2: [78, 5, 60],
    place: "9",
  },
  {
    participant_ru: "Дьяконов Айтал",
    participant_en: "Dyakonov Aytal",
    country: "Ленский край",
    problems1: [79, 0, 0],
    problems2: [93, 10, 20],
    place: "10",
  },
  {
    participant_ru: "Винокуров Павел",
    participant_en: "Vinokurov Pavel",
    country: "Якутск",
    problems1: [54, 25, 2],
    problems2: [22, 30, 50],
    place: "11",
  },
  {
    participant_ru: "Ганиев Евгений",
    participant_en: "Ganiev Evgeniy",
    country: "РС(Я)",
    problems1: [79, 5, 0],
    problems2: [50, 0, 30],
    place: "12",
  },
  {
    participant_ru: "Слепцов Василий",
    participant_en: "Slepcov Vasiliy",
    country: "Общество Дьо5ур",
    problems1: [45, 0, 5],
    problems2: [0, 5, 85],
    place: "13",
  },
  {
    participant_ru: "Высоцкий Петр",
    participant_en: "Visotskiy Petr",
    country: "Ленский край",
    problems1: [39, 0, 30],
    problems2: [64, 0, 0],
    place: "14",
  },
  {
    participant_ru: "Шарин Владимир",
    participant_en: "Sharin Vladimir",
    country: "РС(Я)",
    problems1: [72, 25, 0],
    problems2: [0, 5, 20],
    place: "15-16",
  },
  {
    participant_ru: "Кривогорницын Александр",
    participant_en: "Krivogornitsyn Aleksandr",
    country: "Общество Дьо5ур",
    problems1: [62, 0, 5],
    problems2: [0, 5, 50],
    place: "15-16",
  },
  {
    participant_ru: "Лукачевская Прасковья",
    participant_en: "Lukachevskaya Praskovya",
    country: "Общество Дьо5ур",
    problems1: [52, 0, 0],
    problems2: [0, 0, 50],
    place: "17",
  },
  {
    participant_ru: "Васильев Андрей",
    participant_en: "Vasilyev Andrey",
    country: "Якутск",
    problems1: [61, 0, 10],
    problems2: [0, 10, 20],
    place: "18",
  },
  {
    participant_ru: "Коротун Владислав",
    participant_en: "Korotun Vladislav",
    country: "Ленский край",
    problems1: [17, 0, 0],
    problems2: [47, 5, 30],
    place: "19",
  },
  {
    participant_ru: "Менг Фанлей",
    participant_en: "Meng Fanlei",
    country: "Китай",
    problems1: [37, 0, 0],
    problems2: [0, 5, 0],
    place: "20",
  },
  {
    participant_ru: "Степанов Евгений",
    participant_en: "Stepanov Evgeniy",
    country: "Иркутск",
    problems1: [39, 0, 0],
    problems2: [0, 0, 0],
    place: "21",
  },
];

export default function HomePage() {
  return (
    <>
      <h1>Tuymaada-2005</h1>
      <Link href="/">Главная</Link>
      <h2>Протокол</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={2}>№</th>
            <th rowSpan={2}>ФИО участника / Full name</th>
            <th rowSpan={2}>Страна / Country</th>
            <th colSpan={3}>Задания 1 дня / First day problems</th>
            <th rowSpan={2}>Итого1 / Total1</th>
            <th colSpan={3}>Задания 2 дня / Second day problems</th>
            <th rowSpan={2}>Итого2 / Total2</th>
            <th rowSpan={2}>Итого / Total</th>
            <th rowSpan={2}>Место / Place</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, i) => (
            <tr>
              <td>{i+1}</td>
              <td>{elem.participant_ru} / {elem.participant_en}</td>
              <td>{elem.country}</td>
              <td className={styles.value}>{elem.problems1[0]}</td>
              <td className={styles.value}>{elem.problems1[1]}</td>
              <td className={styles.value}>{elem.problems1[2]}</td>
              <td className={styles.value}>{elem.problems1.reduce((s, v) => s += v, 0)}</td>
              <td className={styles.value}>{elem.problems2[0]}</td>
              <td className={styles.value}>{elem.problems2[1]}</td>
              <td className={styles.value}>{elem.problems2[2]}</td>
              <td className={styles.value}>{elem.problems2.reduce((s, v) => s += v, 0)}</td>
              <td className={styles.value}>{elem.problems1.reduce((s, v) => s += v, 0) + elem.problems2.reduce((s, v) => s += v, 0)}</td>
              <td className={styles.value}>{elem.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
