import React from 'react'
import styled from 'styled-components';
function DateSelector() {
    return (
        <div>
            <h1>Choose A Delivery Day</h1>
            <div style={{
                float: "left",
                width: "20em",
                overflowY: "scroll",
                height: "200px",
                border: "1px solid black",
            }}>
                <div>
                   
                    Monday, Jul 25
                   
                </div>
                <div>
                    Thursday, Jul 28
                </div>
                <div>
                    Friday, Jul 29
                </div>
                <div>
                    Sunday, Jul 31
                </div>
                <div>
                    Monday, Aug 1
                </div>
                <div>
                    Tuesday, Aug 2
                </div>
                <div>
                    Wednesday, Aug 3
                </div>
                <div>
                    Thursday, Aug 4
                </div>
                <div>
                    Friday, Aug 5
                </div>
                <div>
                    Saturday, Aug 6
                </div>
                <div>
                    Sunday, Aug 7
                </div>
                <div>
                    Monday, Aug 8
                </div>
                <div>
                    Tuesday, Aug 9
                </div>
                <div>
                    Wednesday, Aug 10
                </div>
                <div>
                    Thursday, Aug 11
                </div>
                <div>
                    Friday, Aug 12
                </div>
            </div>
        </div>
    )
}
export default DateSelector
const DateBorder = styled.div`
    border: 1px solid black;
    padding: 0
    `



