import styled from "styled-components";

const ActionsTarget = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border: none;
  &:hover {
    background-color: #f0920e;
  }
`

const ButtonText = styled.button`
  color: #f0b322;
  border: none;
  &:hover {
    color: #f0920e;
  }
`

export default function Actions({btn, btnText, fn}) {
    return (
        <ActionsTarget>
            <ButtonText>{btnText}</ButtonText>
            <Button onClick={fn}>{btn}</Button>
        </ActionsTarget>
    )
}