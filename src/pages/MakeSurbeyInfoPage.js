import React from "react";

function MakeSurbeyInfopPage() {
  return (
    <>
      <div>설문 기초 정보 입력</div>

      <form>
        <input type="answer" placeholder="설문 제목" />
        <input type="submit" value="Update Ans" />
      </form>

      <form>
        <input type="answer" placeholder="설문 대상" />
        <input type="submit" value="Update Ans" />
      </form>

      <form>
        <input type="answer" placeholder="설문 목적" />
        <input type="submit" value="Update Ans" />
      </form>

      <form>
        <input type="answer" placeholder="설문 기간" />
        <input type="submit" value="Update Ans" />
      </form>
    </>
  );
}

export default MakeSurbeyInfopPage;
