import React, { LegacyRef, MutableRefObject, forwardRef, useEffect, useRef, useState } from 'react';
import { ChoiceObjectContainer, BoxMode, ChoiceObject, ChoiceValueObject } from '../../../../types';


export default (params : { mode : BoxMode ,index : number, completeEdit : MutableRefObject<() => void> }) => {

    console.log("렌더링")

    const title = useRef<string>('제목을 적어주세요.');
    const titleInput = useRef<any>();
    const content = useRef<string>('설명을 적어주세요.');
    const contentInput = useRef<any>();
    const required = useRef<boolean>(false);
    const requiredInput = useRef<any>();

    const choiceRef = useRef<ChoiceValueObject[]>([{value:'선택지1'},{value:'선택지2'}]);

    const [choiceObjectContainer,setChoiceObjectContainer] = useState<ChoiceObjectContainer>(
        {
            id:3,
            instance : [{id : 1 ,selected : false, valueObject : choiceRef.current[0]},{id : 2,selected : false, valueObject : choiceRef.current[1]}]
        }
    );

    const selectChoice = (value : ChoiceObject ) => {
        value.selected = !value.selected;

        setChoiceObjectContainer((con)=>{
            return {...con}
        })
    }

    const addChoice = ( ) => {
        
        setChoiceObjectContainer((con)=>{

            const id = con.id;
            const valueObject = {value : `선택지${id}`};
            choiceRef.current.push(valueObject)
            con.instance.push({id : id,selected : false , valueObject : valueObject});
            con.id++;
            return {...con}
        })
    }

    const deleteChoice = () => {

        const deleteArray = choiceObjectContainer.instance.filter(obj => obj.selected);

        if(deleteArray.length < 1){
            return;
        }

        if(choiceObjectContainer.instance.length - deleteArray.length < 2){
            alert('선택지는 최소 두개가 필요합니다!');
            return;
        }
           
        setChoiceObjectContainer((con)=>{
            deleteArray.map( deleteObj => {
                const index = choiceRef.current.findIndex(obj => obj == deleteObj.valueObject);
                if(index > -1){
                    choiceRef.current.splice(index,1);
                }
            } );
            con.instance =  con.instance.filter(obj => !obj.selected);
            return {...con}
        })
    }

    const completeEdit = () => {
        console.log('SELECT FORM COMPLETE EDIT');
        title.current = (titleInput.current as HTMLInputElement).value;
        content.current = (contentInput.current as HTMLInputElement).value;
        required.current = (requiredInput.current as HTMLInputElement).checked;
    }

    useEffect(() => {
        params.completeEdit.current = completeEdit;
    },[])

    return (
        <>
            {
                params.mode == BoxMode.edit ?
                <div>
                    <span>필수 문항</span>
                    <input type='checkbox' ref={requiredInput} defaultChecked={required.current}/>
                </div>
                : null
            }
            {
                params.mode == BoxMode.edit ?
                <div>
                    <span>복수선택 여부</span>
                    <input type='checkbox' ref={requiredInput} defaultChecked={required.current}/>
                </div>
                : null
            }
            {
                params.mode == BoxMode.idle 
                ? required.current == true ? <h2>* {params.index}. {title.current}</h2> : <h2>{params.index}. {title.current}</h2>
                : <input ref={titleInput} defaultValue={title.current} placeholder='제목을 적어주세요.'/>
            }
            {
                params.mode == BoxMode.idle 
                ? <h2>{content.current}</h2>
                : <input ref={contentInput} defaultValue={content.current} placeholder='설명을 적어주세요.'/>
            }
            {
                <div>
                    <div style={{height:30,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <span>답변</span>
                        &nbsp;
                        <span style={{color:'blue'}} onClick={() => addChoice()}>추가</span>
                        <span>|</span>
                        <span style={{color:'red'}} onClick={() => deleteChoice()}>선택 삭제</span>
                    </div>
                    {
                        choiceObjectContainer.instance.map((obj) => {
                            console.log(obj.id);
                            return (
                                <div key={`choice_${obj.id}`} onClick={() => selectChoice(obj)} style={{backgroundColor:obj.selected ? 'red' : 'white'}}>
                                    <input type='checkbox' /><input type='text' defaultValue={obj.valueObject?.value} onChange={(eventObj) => {
                                        if(obj.valueObject) obj.valueObject.value = eventObj.currentTarget.value
                                        }} />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    );
};


