import { useState } from "react";
import { useQuery } from "react-query";
import { Menu } from "../types";
import styled, { css } from "styled-components";
import { useInterval } from "../hooks/use-interval";

const AnimatedContainer = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.25s linear;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
    `}
`;

const Background = styled.div`
  position: relative;
  background-color: black;
  color: white;
  height: 100%;
`;

export default function Home() {
  const { isLoading, error, data, isError } = useQuery<Menu, { error: true }>(
    "menu",
    () => fetch("/api/menu").then((res) => res.json())
  );

  const [activeBoard, setActiveBoard] = useState(0);
  useInterval(
    () => {
      const length = data?.sections?.length || 0;
      const next = activeBoard + 1 >= length ? 0 : activeBoard + 1;
      setActiveBoard(next);
    },
    !!data ? 15000 : null
  );

  if (isLoading || isError) return null;

  return (
    <Background>
      {data.sections.map((section, i) => (
        <AnimatedContainer $active={i === activeBoard} key={section.name}>
          <h2>{section.name}</h2>
          {section.items.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </AnimatedContainer>
      ))}
    </Background>
  );
}
