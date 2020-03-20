import React from 'react'
import './HomeIdees.scss'
import Variables from '../../variables'
import im_1 from "../../assets/inscription_.svg"
import im_2 from "../../assets/undraw_typewriter_i8xd.svg"
import im_3 from "../../assets/undraw_social_girl_562b.svg"
import Titre from '../TitreComponent/Titre'
import {CardLeft, CardRight} from '../CardComponent/Card'



class HomeIdees extends React.Component {
    render(){
        return(
            <main className="list-idees">
               <Titre titre={Variables.IDEES_HOME_TITLE}/>
                <CardLeft nbrVote={38}  nbrVoteRequis={100} dateDeb="31/12/2019" dateFin="31/12/2020" titre={Variables.IDEES_HOME_TITLE_1}  contenue={Variables.lOREM} image={im_1}/>
                <CardRight nbrVote={49}  nbrVoteRequis={100} dateDeb="31/12/2019" dateFin="31/12/2020" titre={Variables.IDEES_HOME_TITLE_2}  contenue={Variables.lOREM} image={im_2}/>
                <CardLeft nbrVote={196}  nbrVoteRequis={200} dateDeb="31/12/2019" dateFin="31/12/2020" titre={Variables.IDEES_HOME_TITLE_3}  contenue={Variables.lOREM} image={im_3}/>
            </main>
        )
    }
}

export default HomeIdees