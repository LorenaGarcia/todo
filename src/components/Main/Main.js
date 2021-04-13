import React from "react";
import {
  Container,
  Menu,
  TitleMenu,
  Border,
  Input,
  AddDetail,
  Button,
  TextCheckBox,
  ContaineCheckBox,
  ContaineCheckBoxActive,
  ContaineCheckBoxCompleted,
  ContainerButtonDelette,
  ButtonDelete,
  Icon,
} from "./Main.styles";

const Main = ({
  tasks,
  addTask,
  handleAddTask,
  setAddTask,
  handleCheck,
  showAll,
  showActive,
  handleview,
  showCompleted,
  handleDeleteTask,
  handleDeleteAll,
}) => {
  return (
    <Container>
      <Menu>
        <TitleMenu onClick={() => handleview("all")}>
          All {showAll && <Border></Border>}
        </TitleMenu>
        <TitleMenu onClick={() => handleview("active")}>
          Active {showActive && <Border></Border>}
        </TitleMenu>
        <TitleMenu onClick={() => handleview("completed")}>
          Completed {showCompleted && <Border></Border>}
        </TitleMenu>
      </Menu>
      {showAll || showActive ? (
        <AddDetail>
          <Input
            name="task"
            placeholder="add details"
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
          />
          <Button onClick={handleAddTask}>Add</Button>
        </AddDetail>
      ) : (
        ""
      )}

      {showAll &&
        tasks &&
        tasks.map((value, index) => (
          <ContaineCheckBox key={index}>
            <input
              type="checkbox"
              onClick={() => handleCheck(index)}
              defaultChecked={value.check}
            />
            <TextCheckBox through={value.check}>{value.name}</TextCheckBox>
          </ContaineCheckBox>
        ))}

      {showActive &&
        tasks &&
        tasks.map((value, index) => (
          <ContaineCheckBoxActive show={value.check} key={index}>
            <input
              type="checkbox"
              onClick={() => handleCheck(index)}
              defaultChecked={value.check}
            />
            <TextCheckBox through={value.check}>{value.name}</TextCheckBox>
          </ContaineCheckBoxActive>
        ))}

      {showCompleted &&
        tasks &&
        tasks.map((value, index) => (
          <ContaineCheckBoxCompleted show={value.check} key={index}>
            <div>
              <input
                type="checkbox"
                onClick={() => handleCheck(index)}
                defaultChecked={value.check}
              />
              <TextCheckBox through={value.check}>{value.name}</TextCheckBox>
            </div>
            <Icon onClick={() => handleDeleteTask(index)}>
              <span className="material-icons">delete_outline</span>
            </Icon>
          </ContaineCheckBoxCompleted>
        ))}
      {showCompleted && (
        <ContainerButtonDelette>
          <ButtonDelete onClick={handleDeleteAll}>Delete</ButtonDelete>
        </ContainerButtonDelette>
      )}
    </Container>
  );
};

export { Main };
