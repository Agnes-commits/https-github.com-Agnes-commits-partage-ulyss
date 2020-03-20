import React from 'react'
import Stat from '../StatistiqueComponent/Stat'
import '../../variables'
import './Card.scss'
import doigt from '../../assets/digit_poll.png'
import  Button from '../ButtonComponent/Button'
import Variables from '../../variables'


export const CardTop = ({nbrVote, nbrVoteRequis,dateDeb, dateFin,titre, contenue,image}) => {
    return(
        <div className="card mb-3">
        <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{titre}</h5>
            <p className="card-text">{contenue}</p>
            <Stat nbrVote={nbrVote} nbrVoteRequis={nbrVoteRequis} dateDeb={dateDeb} dateFin={dateFin}/>
            <div className="card-btn">
                <Button className="btn-info" text={Variables.IDEES_HOME_INFO_BTN} color="black" image=""/>
                <Button className="btn-vote" text={Variables.IDEES_HOME_VOTER_BTN} color="#ef2541" image={doigt}/>
            </div>
        </div>
        </div>
    )
}


export const CardBottom = ({nbrVote, nbrVoteRequis,dateDeb, dateFin,titre, contenue,image}) => {
    return(
        <div class="card w-100">
        <div class="card-body">
            <h5 class="card-title">{titre}</h5>
            <p class="card-text">{contenue}</p>
            <Stat nbrVote={nbrVote} nbrVoteRequis={nbrVoteRequis} dateDeb={dateDeb} dateFin={dateFin}/>
                <div className="card-btn">
                    <Button className="btn-info" text={Variables.IDEES_HOME_INFO_BTN} color="black" image=""/>
                    <Button className="btn-vote" text={Variables.IDEES_HOME_VOTER_BTN} color="#ef2541" image={doigt}/>
                </div>
                </div>
                    <img class="card-img-bottom" src={image} alt="Card image cap"/>
                </div>
    )
}


export const CardLeft = ({nbrVote, nbrVoteRequis,dateDeb, dateFin,titre, contenue,image}) => {
    return(
        <div className="card-content" >
                <div className="card w-100" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-5 deg">
                        <img src={image} className="card-img" alt="..."/>
                        </div>
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{titre}</h3>
                            <p className="card-text">
                                {contenue}
                            </p>
                            <Stat nbrVote={nbrVote} nbrVoteRequis={nbrVoteRequis} dateDeb={dateDeb} dateFin={dateFin}/>
                            <div className="card-btn">
                                <Button className="btn-info" text={Variables.IDEES_HOME_INFO_BTN} color="black" image=""/>
                                <Button className="btn-vote" text={Variables.IDEES_HOME_VOTER_BTN} color="#ef2541" image={doigt}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export const CardRight = ({nbrVote, nbrVoteRequis,dateDeb, dateFin,titre, contenue,image}) => {
    return(
        <div className="card-content" >
                <div className="card w-100" >
                    <div className="row no-gutters">
                        <div className="col-12 col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{titre}</h3>
                            <p className="card-text">
                                {contenue}
                            </p>
                            <Stat nbrVote={nbrVote} nbrVoteRequis={nbrVoteRequis} dateDeb={dateDeb} dateFin={dateFin}/>
                            <div className="card-btn">
                                <Button className="btn-info" text={Variables.IDEES_HOME_INFO_BTN} color="black" image=""/>
                                <Button className="btn-vote" text={Variables.IDEES_HOME_VOTER_BTN} color="#ef2541" image={doigt}/>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-5 deg">
                        <img src={image} className="card-img" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
    )
}




        