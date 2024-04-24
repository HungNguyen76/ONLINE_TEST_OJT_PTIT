document.getElementById('quest-f').addEventListener('submit', estimateFormResult);

function estimateFormResult(event) {
    event.preventDefault();

    var estimate = 0;

    // Lấy giá trị của từng câu hỏi và tính toán tổng điểm
    var answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(function(answer) {
        estimate += parseInt(answer.value);
    });

    // Hiển thị kết quả
    document.getElementById("cong").innerHTML = "Your Score";
    document.getElementById("degr").innerHTML = estimate + " %";
    document.getElementById("cong").style = "transform: scale(1,1); transition-delay: 0.2s";
    document.getElementById("degr").style = "transform: scale(1,1); transition-delay: 0.4s";
    document.getElementById("lineone").style = "transform: translateX(0%); transition-delay: .1s;";
    document.getElementById("linetwo").style = "transform: translateX(0%); transition-delay: .3s;";
    document.getElementById("linethree").style = "transform: translateX(0%); transition-delay: .4s;";
    document.getElementById("crid").style = "animation: aut 2s infinite alternate;";
}


