/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Button,Navbar, Nav } from "react-bootstrap";
import "./Question.css";
import Auxiliary from '../../../Hoc/Auxiliary';
import Choices from '../../../Components/Choices';

const Question = (props) => {
  const {
    questionCount, questionId, submitTest, questionText, onNext, onPrevious, options,
  } = props;
  let second = props.quizTime % 60;
  let minute = Math.floor(props.quizTime / 60);
  minute = minute.toString().length === 1 ? `0${minute}` : minute;
  second = second.toString().length === 1 ? `0${second}` : second;

  if (second === "00" && minute === "00") {
    submitTest();
  }
  const items = [];
  for (let number = 1; number <= questionCount; number += 1) {
    // Adding Pagination
    items.push(
      <Nav.Link
        key={number}
        active={number === questionId + 1}
        onClick={() => props.setQuestion(number)}
      >{number}
      </Nav.Link>
      ,
    );
  }
  return (
    <Auxiliary>
    <div className="container" style={{height:"400px"}}>
      <div className="Countdown-time" style={{textAlign:"right"}}>
        Timer : {minute} : {second}
      </div>
      <div className="questions">
        <h4 id="question">
          Question {questionId + 1} : {questionText}
        </h4>
        <div id="">
      <Choices
      options={props.options}
      answer={props.answer}
      onChange={props.onChange}/>
        </div>

        {questionId !== 0 && (
          <Button
            variant="info"
            onClick={onPrevious}
            className="questionaireButton"
          >
            Previous
          </Button>
        )}
          &nbsp; &nbsp; &nbsp;
        {questionId < questionCount - 1 && (
          <Button
            variant="info"
            className="questionaireButton"
            onClick={onNext}
          >
            Next
          </Button>
        )}
        &nbsp; &nbsp; &nbsp;
        <Button
          variant="info"
          id="submitTest"
          onClick={submitTest}
          className="questionaireButton"
        >
          Submit Test
        </Button>
      </div>
      <Navbar>
        <Navbar.Brand href="#home">Jump To QuestionNo :</Navbar.Brand>
        <Nav className="mr-auto">
          {items}
        </Nav>
      </Navbar>
    </div>
    </Auxiliary>
  );
};

Question.propTypes = {
  quizTime: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  submitTest: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired,
  questionText: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  options: PropTypes.func.isRequired,
};

export default Question;
