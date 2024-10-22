import React, { useState } from 'react'

const outputs = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

const App = () => {

    const[fn, setfn] = useState("");
    const[ln, setLn] = useState("");
    const[relation, setRelation] = useState("");


    const calculateBtnHandler = () => {
        if(fn.length == 0 || ln.length == 0){
            return setRelation("Please Enter valid input");
        }

        let firstArr = fn.split("");
        let secondArr = ln.split("");

        let nArr = [];

        for(let i=0; i<firstArr.length; i++){
            let flag = false;
            for(let j = 0; j<secondArr.length; j++){
                if(firstArr[i] == secondArr[j]){
                    flag = true;
                    secondArr.splice(j,1);
                    break;
                }
            }

            if(!flag){
                nArr.push(firstArr[i]);
            }
        }

        let score = (nArr.length + secondArr.length)%6;

        switch(score){
            case 1 :
                return setRelation("Friends");
            case 2 :
                return setRelation("Love");
            case 3 :
                return setRelation("Friends");
            case 4 :
                return setRelation("Marraige");
            case 5 :
                return setRelation("Enemy");
            case 0 :
                return setRelation("Siblings");
        }
    }
  return (
    <div>
        <input name='name1' data-testid="input1" value={fn} onChange = {(e) => {
            setfn(e.target.value); 
        }} placeholder="Enter first name" />
        <input name='name2' data-testid="input2" value={ln} onChange = {(e) => {
            setLn(e.target.value); 
        }} placeholder="Enter second name" />
         <button data-testid="calculate_relationship" onClick={calculateBtnHandler}>Calculate Relationship Future</button>
        <button data-testid="clear" onClick={() => {
            setfn("")
            setLn("")
            setRelation("")
        }}>Clear</button>

        <h3 data-testid="answer">{relation}</h3>
    </div>
  )
}

export default App
