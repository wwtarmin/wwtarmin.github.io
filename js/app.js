function calculateFinalGrade() {
    let firstScore = parseFloat(document.getElementById("firstScore").value);
    let secondScore = parseFloat(document.getElementById("secondScore").value);
    let examScore = parseFloat(document.getElementById("examScore").value);

    let firstWeight = parseFloat(document.getElementById("firstScoreWeight").value);
    let secondWeight = parseFloat(document.getElementById("secondScoreWeight").value);
    let examWeight = parseFloat(document.getElementById("examWeight").value);

    firstWeight /= 100;
    secondWeight /= 100;
    examWeight /= 100;

    let finalGrade = (firstScore * firstWeight) + (secondScore * secondWeight) + (examScore * examWeight);
    console.log(finalGrade);

    document.getElementById("finalGrade").value = finalGrade.toFixed(1);
}

function calculateExamGrade() {
    let firstScore = parseFloat(document.getElementById("firstScore").value);
    let secondScore = parseFloat(document.getElementById("secondScore").value);
    let finalGrade = parseFloat(document.getElementById("finalGrade").value);

    let firstWeight = parseFloat(document.getElementById("firstScoreWeight").value);
    let secondWeight = parseFloat(document.getElementById("secondScoreWeight").value);
    let examWeight = parseFloat(document.getElementById("examWeight").value);

    firstWeight /= 100;
    secondWeight /= 100;
    examWeight /= 100;

    let examScore = ((firstScore * firstWeight) + (secondScore * secondWeight) - finalGrade) / examWeight;
    if (examScore < 0) {
        examScore *= -1;
    }
    console.log(examScore);

    document.getElementById("examScore").value = examScore.toFixed(1);   
}

function resetForm() {
    console.log("Form values reset");

    document.getElementById("gradeCalculatorForm").reset();
}