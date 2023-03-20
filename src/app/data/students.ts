import {Student} from "../models/student";

export const students: Student[] = [
  {
    id: 4,
    name: "Коля Егоров",
    birthDate: new Date("2018-01-03"),
    parent: {
      id: 2,
      name: "Проскурякин Матвей Илларионович",
      phone: "+79999777780"
    },
    source: "Группа ВК",
    characteristic: "Любит петь",
    courses: ["Рисование", "Психология"],
    activeStatus:{
      id: 3,
      status: "Учится"
    }
  },
  {
    id: 4,
    name: "Егор Николаев",
    birthDate: new Date("2018-01-02"),
    parent: {
      id: 2,
      name: "Проскурякин Матвей Илларионович",
      phone: "+79999777780"
    },
    source: "Через знакомых",
    characteristic: "Любит петь",
    courses: ["Финансы"],
    activeStatus:{
      id: 3,
      status: "Пробный"
    }
  },
  {
    id: 4,
    name: "Константин Ян",
    birthDate: new Date("2018-01-01"),
    parent: {
      id: 2,
      name: "Проскурякин Матвей Илларионович",
      phone: "+79999777780"
    },
    source: "Листовки",
    characteristic: "Любит петь",
    courses: ["Английский язык"],
    activeStatus:{
      id: 3,
      status: "Дозвон"
    }
  }
]
