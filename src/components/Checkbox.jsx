import React, {useState, useEffect, Fragment} from "react"

export default function Checkbox(props) {
    return (
        <Fragment>
            <input type="checkbox" name="task" id="task"/>
            <label htmlFor="task">props.taskTitle</label>
        </Fragment>
    )
} 