import { createRef } from "react";
import { BoxType, FormTool } from "../../../types";
import Header from '../../../styles/Header.module.css';

export default (props : { tool : FormTool }) => {

    const selectRef = createRef<HTMLSelectElement>();
    
    return(
    <div id={Header.mainHeader}>
        <span style={{display:'flex',alignItems:'center'}}>
          <select ref={selectRef}>
            <option value={BoxType.basic}>일반</option>
            <option value={BoxType.select}>선택</option>
          </select>
          <h1 onClick={() => {
            let type : number = Number(selectRef.current?.value);
            props.tool.addForm(type);
          }}>{'추가하기'}</h1>
          <h2 style={{marginLeft:5,marginRight:5}}>|</h2>
          <h1 onClick={() => {
          }}>{'선택 삭제하기'}</h1>
        </span>
    </div>
    )
}