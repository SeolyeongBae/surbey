import React from "react";

function ShareSurveyPage() {
  const doCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <div className="flex flex flex-col px-10 py-10">
      <div className="mt-40 mb-5 w-20 content-center ">
        <img
          src="https://i.pinimg.com/originals/65/af/79/65af793dbd6f191ff9ee2f992d478bd5.png"
          alt="폭죽"
        />
      </div>
      <h3 className="py-1 rounded-lg text-2xl font-bold">
        설문 작성을 완료하셨습니다!
      </h3>

      <div> 다음 링크를 공유하여 설문을 응답해 보세요. </div>
      <button
        onClick={() =>
          doCopy(
            "http://localhost:3000/response/d46e3a89-e527-4ec2-b4f2-0e8cc53ffb41"
          )
        }
        className="mt-5 py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700"
      >
        설문 공유하기
      </button>
    </div>
  );
}

export default ShareSurveyPage;
