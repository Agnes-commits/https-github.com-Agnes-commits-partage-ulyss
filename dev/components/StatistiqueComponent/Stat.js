import React from 'react'
import './Stat.scss'
import Variables from '../../variables'

const Stat = ({nbrVote, nbrVoteRequis,dateDeb, dateFin}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="graph_circle">

                    </div>
                    <p className="graph_int">
                        {nbrVote}/{nbrVoteRequis}
                    </p>
                </div>
                <div className="col-md-3 milieu">
                    <h4>
                        {Variables.IDEES_DATE}
                    </h4>
                    <p>
                        {dateDeb}
                    </p>
                </div>
                <div className="col-md-3">
                    <h4>
                        {Variables.IDEES_DEADLINE}
                    </h4>
                    <p>
                        {dateFin}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stat