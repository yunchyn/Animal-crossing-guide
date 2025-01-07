import styled from "styled-components";
import { BackgroundImage, LayoutContainer, Overlay, Wrapper } from "../components/layout";
import { TitleImg, TitleImgContainer } from "../components/header";
import Menubar from "../components/menubar";
import { useEffect, useState } from "react";

const MainTitleImg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("/img/title_img.png");
`;

const DialogContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const BubbleImg = styled.img`
  width: 850px;
`;

const TodoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 630px;
  margin-top: 33px;
`;

const TodoItem = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: #49252a;
`;

export default function Home() {
  const [bubbleImage, setBubbleImage] = useState("img/isabelle-bubble.png");

  // 초기 투두 상태 설정
  const initialTodos = [
    { id: 1, text: "화석 발굴", completed: false },
    { id: 2, text: "코인 바위 치기", completed: false },
    { id: 3, text: "주민의 레시피 배우기", completed: false },
    { id: 4, text: "너굴포트 출석하기", completed: false },
  ];

  // 메인화면의 할일 체크는 매일 초기화됨
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    const savedDate = localStorage.getItem("todosDate");
    const currentDate = new Date().toDateString();

    if (savedTodos && savedDate === currentDate) {
      return JSON.parse(savedTodos);
    } else {
      // 날짜가 다르다면 초기화
      localStorage.setItem("todosDate", currentDate);
      localStorage.setItem("todos", JSON.stringify(initialTodos));
      return initialTodos;
    }
  });

  // 랜덤 NPC(여울/너굴)
  useEffect(() => {
    const randomImage = Math.random() < 0.5 ? "img/isabelle-bubble.png" : "img/nook-bubble.png";
    setBubbleImage(randomImage);
  }, []);

  // 투두 상태 localstorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const currentDate = new Date().toDateString();
    localStorage.setItem("todosDate", currentDate);
  }, [todos]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <LayoutContainer>
      <Wrapper>
        <TitleImgContainer to="/">
          <TitleImg
            src="img/title.png"
            alt="title"
          />
          가이드 팬 페이지
        </TitleImgContainer>
        <MainTitleImg />
        <Menubar />
        <DialogContainer>
          <TodoContainer>
            {todos.map((todo) => (
              <TodoItem key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                {todo.text}
              </TodoItem>
            ))}
          </TodoContainer>
          <BubbleImg
            src={bubbleImage}
            alt="bubbleImg"
          />
        </DialogContainer>
      </Wrapper>
      <Overlay />
      <BackgroundImage />
    </LayoutContainer>
  );
}
