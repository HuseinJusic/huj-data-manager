import React from 'react';

const MainContainer = () => {

        return(
            <div className="container-row">
                    <div className="sidebar r-02 container-column">
                        <div>sidebar el 1</div>
                        <div>sidebar el 2</div>
                        <div>sidebar el 3</div>
                    </div>

                    <div className="main r-08 container-row">
                        <div className="r-02">r1</div>
                        <div className="r-06">r1</div>
                        <div className="r-02">r1</div>

                        <div className="r-08">r2</div>
                        <div className="r-01">r2</div>
                        <div className="r-01">r2</div>

                        <div className="r-7">r3</div>
                        <div className="r-02">r3</div>
                        <div className="r-01">r3</div>
                    </div>

            </div>
        )
}

export default MainContainer;