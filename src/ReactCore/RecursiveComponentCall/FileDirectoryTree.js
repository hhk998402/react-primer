import React, { useState } from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const FileDirectoryTree = ({data}) => {
    const [open, setOpen] = useState([]);
    const toggle = (id) => {
        if(open.includes(id)){
            setOpen((prevState) => {
                let oldState = [...prevState];
                oldState = oldState.filter(entry => entry != id);
                return oldState;
            });
        } else{
            setOpen([
                ...open,
                id
            ]);
        }
    };

    return(
        <div className="row">
            {
                data?.map((entry,idx) => {
                    return(
                        <Accordion open={open} toggle={toggle}>
                            <AccordionItem>
                                <AccordionHeader targetId={idx}>{entry.name}</AccordionHeader>
                                <AccordionBody accordionId={idx}>
                                    <FileDirectoryTree data={entry.children}/>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    )
                })
            }
        </div>
    );
};

export default FileDirectoryTree;