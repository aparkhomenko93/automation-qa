//Set grade
const averageGrade = 100;

//Return the result
switch (true) {
    case averageGrade < 60: {
        console.log(`Оцінка ${averageGrade} балів.  Незадовільно.`);
        break;
    }
    case averageGrade >= 60 && averageGrade <= 70: {
        console.log(`Оцінка ${averageGrade} балів.  Задовільно.`);
        break;
    }
    case averageGrade > 70 && averageGrade <= 80: {
        console.log(`Оцінка ${averageGrade} балів.  Добре.`);
        break;
    }
    case averageGrade > 80 && averageGrade <= 90: {
        console.log(`Оцінка ${averageGrade} балів.  Дуже добре.`);
        break;
    }
    case averageGrade > 90 && averageGrade <= 100: {
        console.log(`Оцінка ${averageGrade} балів.  Відмінно.`);
        break;
    }
    default:
        console.log(`Оцінка ${averageGrade} має невірний формат.`);
}