import { createRef, useContext } from "react";
import { BoxType } from "../../../types";
import Header from '../../../styles/Header.module.css';
import { FormManagerToolContext } from "../../../context";

export default () => {

    const selectRef = createRef<HTMLSelectElement>();
    const tool = useContext(FormManagerToolContext)

    return(
    <div id={Header.mainHeader}>
        <span style={{display:'flex',alignItems:'center'}}>
          <select ref={selectRef}>
            <option value={BoxType.basic}>일반</option>
            <option value={BoxType.select}>선택</option>
          </select>
          <h1 onClick={() => {
            let type : number = Number(selectRef.current?.value);
            tool.addForm(type);
          }}>{'추가하기'}</h1>
          <h2 style={{marginLeft:5,marginRight:5}}>|</h2>
          <h1 onClick={() => {
          }}>{'선택 삭제하기'}</h1>
        </span>
    </div>
    )
}