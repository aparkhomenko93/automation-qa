//Set grade
const averageGrade = 100;

//Return the result
if(averageGrade <60){
    console.log(`Оцінка ${averageGrade} балів.  Незадовільно.`);
}
else if(averageGrade >= 60 && averageGrade <= 70){
    console.log(`Оцінка ${averageGrade} балів.  Задовільно.`);
}
else if(averageGrade > 70 && averageGrade <= 80){
    console.log(`Оцінка ${averageGrade} балів.  Добре.`);
}
else if(averageGrade > 80 && averageGrade <= 90){
    console.log(`Оцінка ${averageGrade} балів.  Дуже добре.`);
}
else if(averageGrade > 90 && averageGrade <= 100){
    console.log(`Оцінка ${averageGrade} балів.  Відмінно.`);
}
else {
    console.log(`Оцінка ${averageGrade} має невірний формат.`);
}